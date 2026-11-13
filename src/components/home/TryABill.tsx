"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  IconCash,
  IconKhata,
  IconMinus,
  IconPlane,
  IconPrinter,
  IconQr,
  IconRotate,
  IconWifi,
  IconWifiOff,
} from "@/components/icons";
import {
  demoLabels,
  demoProducts,
  demoStore,
  formatINR,
  type DemoProductId,
} from "@/content/demo";

type Pay = "cash" | "upi" | "khata";
type Lang = "en" | "hi";

const STARTER: Partial<Record<DemoProductId, number>> = {
  "toor-dal": 2,
  "basmati-rice": 1,
};

function useRollingNumber(target: number) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const from = fromRef.current;
    if (reduce || from === target) {
      fromRef.current = target;
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 380;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(from + (target - from) * eased);
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      fromRef.current = target;
    };
  }, [target]);

  return value;
}

/** Decorative QR-like pattern. Not scannable. */
function FakeQr({ seed }: { seed: number }) {
  const cells = useMemo(() => {
    const n = 21;
    let s = seed * 9301 + 49297;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    const inFinder = (x: number, y: number) =>
      (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
    const out: [number, number][] = [];
    for (let y = 0; y < n; y++)
      for (let x = 0; x < n; x++) if (!inFinder(x, y) && rand() > 0.52) out.push([x, y]);
    return out;
  }, [seed]);

  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={7} height={7} fill="currentColor" />
      <rect x={x + 1} y={y + 1} width={5} height={5} fill="var(--ybb-receipt)" />
      <rect x={x + 2} y={y + 2} width={3} height={3} fill="currentColor" />
    </g>
  );

  return (
    <svg viewBox="0 0 21 21" className="h-24 w-24" shapeRendering="crispEdges" aria-hidden="true">
      {cells.map(([x, y]) => (
        <rect key={`${x}.${y}`} x={x} y={y} width={1} height={1} fill="currentColor" />
      ))}
      {finder(0, 0)}
      {finder(14, 0)}
      {finder(0, 14)}
    </svg>
  );
}

export function TryABill() {
  const [cart, setCart] = useState<Partial<Record<DemoProductId, number>>>(STARTER);
  const [pay, setPay] = useState<Pay>("upi");
  const [printed, setPrinted] = useState(false);
  const [printKey, setPrintKey] = useState(0);
  const [online, setOnline] = useState(true);
  const [lang, setLang] = useState<Lang>("en");
  const [invoice, setInvoice] = useState(25);

  const L = demoLabels[lang];
  const lines = demoProducts.filter((p) => (cart[p.id] ?? 0) > 0);
  const count = lines.reduce((n, p) => n + (cart[p.id] ?? 0), 0);
  const total = lines.reduce((n, p) => n + p.price * (cart[p.id] ?? 0), 0);
  const rolling = useRollingNumber(total);

  const name = (p: (typeof demoProducts)[number]) => (lang === "hi" ? p.hi : p.name);

  function add(id: DemoProductId) {
    if (printed) {
      setPrinted(false);
      setInvoice((n) => n + 1);
      setCart({ [id]: 1 });
      return;
    }
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  }

  function remove(id: DemoProductId) {
    if (printed) return;
    setCart((c) => {
      const next = { ...c, [id]: Math.max(0, (c[id] ?? 0) - 1) };
      if (!next[id]) delete next[id];
      return next;
    });
  }

  function print() {
    if (!count) return;
    setPrinted(true);
    setPrintKey((k) => k + 1);
  }

  function newSale() {
    setPrinted(false);
    setCart({});
    setInvoice((n) => n + 1);
  }

  const hindi = lang === "hi" ? "font-hindi" : "";
  const payOptions: { id: Pay; label: string; icon: React.ReactNode }[] = [
    { id: "cash", label: L.cash, icon: <IconCash size={16} /> },
    { id: "upi", label: L.upi, icon: <IconQr size={16} /> },
    { id: "khata", label: L.khata, icon: <IconKhata size={16} /> },
  ];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
      {/* ---------- The "app" ---------- */}
      <div
        className={`overflow-hidden rounded-[1.75rem] border border-[var(--ybb-border)] bg-white shadow-[0_30px_70px_-45px_rgba(11,63,32,0.6)] ${hindi}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--ybb-border)] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2">
            <Image src="/brand/logo-mark.png" alt="" width={28} height={28} className="h-7 w-7" />
            <span className="truncate rounded-full bg-[var(--ybb-sheet)] px-3 py-1 text-sm font-semibold text-[var(--ybb-ink)]">
              {lang === "hi" ? demoStore.nameHi : demoStore.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label="Language"
              className="flex rounded-full border border-[var(--ybb-border)] p-0.5 text-xs font-bold"
            >
              {(["en", "hi"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 transition ${
                    lang === l
                      ? "bg-[var(--ybb-ink)] text-white"
                      : "text-[var(--ybb-muted)] hover:text-[var(--ybb-ink)]"
                  } ${l === "hi" ? "font-hindi" : ""}`}
                >
                  {l === "en" ? "EN" : "हिं"}
                </button>
              ))}
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={online}
              onClick={() => setOnline((o) => !o)}
              className={`flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-bold transition ${
                online
                  ? "border-[var(--ybb-border)] text-[var(--ybb-ink)]"
                  : "border-[var(--ybb-marigold)] bg-[color-mix(in_srgb,var(--ybb-marigold)_16%,white)] text-[var(--ybb-marigold-ink)]"
              }`}
            >
              {online ? <IconWifi size={15} /> : <IconWifiOff size={15} />}
              <span>{online ? L.online : L.offline}</span>
              <span
                className={`relative h-4 w-7 rounded-full transition ${
                  online ? "bg-[var(--ybb-primary)]" : "bg-[var(--ybb-border-strong)]"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow transition-all ${
                    online ? "left-3.5" : "left-0.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          aria-live="polite"
          className={`grid transition-all duration-300 ${online ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
        >
          <div className="overflow-hidden">
            <p className="flex items-center gap-2 bg-[color-mix(in_srgb,var(--ybb-marigold)_14%,white)] px-5 py-2 text-sm font-semibold text-[var(--ybb-marigold-ink)]">
              <IconPlane size={16} /> {L.offlineNote}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-4">
          {demoProducts.map((p) => {
            const qty = cart[p.id] ?? 0;
            return (
              <li key={p.id} className="relative">
                <button
                  type="button"
                  onClick={() => add(p.id)}
                  aria-label={`Add ${p.name}, ${formatINR(p.price)}`}
                  className={`group flex h-full w-full flex-col rounded-2xl border bg-white p-1.5 text-left transition active:scale-[0.97] sm:p-2 ${
                    qty
                      ? "border-[var(--ybb-primary)] ring-1 ring-[var(--ybb-primary)]"
                      : "border-[var(--ybb-border)] hover:border-[var(--ybb-border-strong)]"
                  }`}
                >
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-white">
                    <Image
                      src={`/img/products/${p.id}.webp`}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 160px, 30vw"
                      className="object-contain p-1 transition duration-300 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-1.5 line-clamp-1 text-[11px] font-medium text-[var(--ybb-ink)] sm:text-sm">
                    {name(p)}
                  </span>
                  <span className="text-xs font-bold text-[var(--ybb-ink)] sm:text-[15px]">
                    {formatINR(p.price)}
                  </span>
                </button>
                {qty > 0 && (
                  <>
                    <span
                      key={qty}
                      className="pop pointer-events-none absolute right-2 top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[var(--ybb-primary)] px-1.5 text-xs font-bold text-white"
                    >
                      {qty}
                    </span>
                    {!printed && (
                      <button
                        type="button"
                        onClick={() => remove(p.id)}
                        aria-label={`Remove one ${p.name}`}
                        className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--ybb-border)] bg-white text-[var(--ybb-ink)] shadow-sm transition hover:border-[var(--ybb-ink)]"
                      >
                        <IconMinus size={14} />
                      </button>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <div className="border-t border-[var(--ybb-border)] bg-[var(--ybb-sheet)] px-3 py-3 sm:px-4">
          <div className="flex flex-wrap items-center gap-2">
            <div role="radiogroup" aria-label={L.pay} className="flex gap-1.5">
              {payOptions.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  role="radio"
                  aria-checked={pay === o.id}
                  disabled={printed}
                  onClick={() => setPay(o.id)}
                  className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-semibold transition disabled:opacity-60 ${
                    pay === o.id
                      ? "border-[var(--ybb-primary)] bg-[var(--ybb-primary)] text-white"
                      : "border-[var(--ybb-border)] bg-white text-[var(--ybb-ink)] hover:border-[var(--ybb-primary)]"
                  }`}
                >
                  {o.icon}
                  {o.label}
                </button>
              ))}
            </div>
            {printed ? (
              <button
                type="button"
                onClick={newSale}
                className="ml-auto flex items-center gap-2 rounded-xl border border-[var(--ybb-ink)] bg-white px-4 py-2 text-sm font-bold text-[var(--ybb-ink)] transition hover:bg-[var(--ybb-ink)] hover:text-white"
              >
                <IconRotate size={16} /> {L.newSale}
              </button>
            ) : (
              <button
                type="button"
                onClick={print}
                disabled={!count}
                className="ml-auto flex items-center gap-2 rounded-xl bg-[var(--ybb-primary)] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--ybb-primary-dark)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <IconPrinter size={16} />
                {L.print}
                <span className="font-mono text-white/80">
                  · {count} {L.items} · {formatINR(total)}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------- The printer + receipt ---------- */}
      <div className={`mx-auto w-full max-w-[330px] lg:sticky lg:top-24 ${hindi}`}>
        <div className="relative z-10 rounded-[1.4rem] bg-[#1d2a22] px-5 pb-4 pt-4 shadow-[0_18px_30px_-18px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
            <span className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  printed ? "pulse-dot bg-[var(--ybb-leaf)] text-[var(--ybb-leaf)]" : "bg-white/30"
                }`}
              />
              BT printer
            </span>
            <span className="font-mono">58 mm</span>
          </div>
          <div className="mt-3 h-2.5 rounded-full bg-black/70 shadow-[inset_0_2px_3px_rgba(0,0,0,0.8)]" />
        </div>

        <div
          key={printKey}
          className={`relative -mt-2 mx-4 ${printed ? "receipt-feed" : ""}`}
          aria-live="polite"
        >
          <div className="zigzag-bottom bg-[var(--ybb-receipt)] px-5 pt-6 font-mono text-[13px] leading-relaxed text-[#2a2a2a] shadow-[0_24px_40px_-24px_rgba(60,40,0,0.45)]">
            <p className={`text-center font-bold uppercase tracking-wide ${hindi}`}>
              {lang === "hi" ? demoStore.nameHi : demoStore.name}
            </p>
            <p className="text-center text-[11px] text-black/55">
              INV-{String(invoice).padStart(4, "0")} · {online ? "online" : "offline ✈"}
            </p>
            <div className="dashed-rule my-3" />

            {lines.length === 0 ? (
              <p className="py-6 text-center text-xs text-black/45">{L.tapToStart}</p>
            ) : (
              <ul className="space-y-1">
                {lines.map((p) => {
                  const q = cart[p.id] ?? 0;
                  return (
                    <li key={p.id} className="line-in flex justify-between gap-3">
                      <span className={`min-w-0 truncate ${hindi}`}>
                        {name(p)} <span className="text-black/50">×{q}</span>
                      </span>
                      <span className="shrink-0">{(p.price * q).toLocaleString("en-IN")}</span>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="dashed-rule my-3" />
            <div className="flex items-baseline justify-between text-base font-bold">
              <span className={hindi}>{L.total}</span>
              <span className="tabular-nums">{formatINR(rolling)}</span>
            </div>

            {printed && (
              <div className="mt-4 flex flex-col items-center gap-2 pb-1">
                <span
                  className={`stamp-in inline-block rounded-md border-2 px-2 py-0.5 text-xs font-bold tracking-wider ${
                    pay === "khata"
                      ? "border-[var(--ybb-marigold-ink)] text-[var(--ybb-marigold-ink)]"
                      : "border-[var(--ybb-primary)] text-[var(--ybb-primary)]"
                  } ${hindi}`}
                >
                  {pay === "cash" ? L.paidCash : pay === "upi" ? L.paidUpi : L.onKhata}
                </span>
                {pay === "upi" && (
                  <>
                    <FakeQr seed={invoice} />
                    <p className="text-[11px] text-black/55">{L.scan}</p>
                  </>
                )}
                {pay === "khata" && (
                  <p className="text-center text-xs text-black/65">
                    {L.customer}: {demoStore.customer}
                    <br />
                    {lang === "hi" ? "बकाया" : "Bakaya"} +{formatINR(total)}
                  </p>
                )}
                <p className={`mt-1 text-center text-[11px] text-black/50 ${hindi}`}>{L.thanks}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
