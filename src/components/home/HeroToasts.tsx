"use client";

import { useEffect, useState } from "react";
import { IconCart, IconCheck, IconPlane, IconPrinter } from "@/components/icons";

const toasts = [
  { icon: IconCart, title: "Toor Dal ×2 added", meta: "₹320", tone: "green" },
  { icon: IconCheck, title: "UPI received", meta: "₹1,091", tone: "green" },
  { icon: IconPrinter, title: "Receipt printed", meta: "58 mm · INV-0024", tone: "ink" },
  { icon: IconPlane, title: "Internet off", meta: "still billing", tone: "marigold" },
] as const;

const toneClass = {
  green: "bg-[var(--ybb-sheet)] text-[var(--ybb-primary)]",
  ink: "bg-[#eef0ee] text-[var(--ybb-ink)]",
  marigold: "bg-[color-mix(in_srgb,var(--ybb-marigold)_18%,white)] text-[var(--ybb-marigold-ink)]",
};

/** Cycles little "what just happened at the counter" notifications over the hero art. */
export function HeroToasts() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % toasts.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  const t = toasts[i];
  const Icon = t.icon;

  return (
    <div
      key={i}
      className="toast-cycle flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 py-2.5 pl-2.5 pr-4 shadow-[0_18px_40px_-20px_rgba(11,63,32,0.55)] backdrop-blur"
      aria-hidden="true"
    >
      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${toneClass[t.tone]}`}>
        <Icon size={18} />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold text-[var(--ybb-ink)]">{t.title}</span>
        <span className="block font-mono text-xs text-[var(--ybb-muted)]">{t.meta}</span>
      </span>
    </div>
  );
}
