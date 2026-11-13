import Image from "next/image";
import Link from "next/link";
import { DayAtCounter } from "@/components/home/DayAtCounter";
import { HeroToasts } from "@/components/home/HeroToasts";
import { ReceiptWidths } from "@/components/home/ReceiptWidths";
import { TryABill } from "@/components/home/TryABill";
import {
  IconArrowDown,
  IconArrowRight,
  IconChevronDown,
  IconInfinity,
  IconPrinter,
  IconWifiOff,
} from "@/components/icons";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PlayBadge } from "@/components/PlayBadge";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

const shopTypes = [
  "Kirana",
  "General store",
  "Medical",
  "Stationery",
  "Hardware",
  "Sweets & namkeen",
  "Dairy",
  "Mobile accessories",
  "Cosmetics",
  "Pan shop",
  "Bakery",
  "Footwear",
];

const faqs = [
  {
    q: "Does it really work without internet?",
    a: "Yes. Billing, stock, khata, expenses and Bluetooth printing all run on the phone. You need internet to download the app from Google Play, and Google Play may check your purchase when you are online. Daily billing never waits for signal.",
  },
  {
    q: "Is my shop data uploaded anywhere?",
    a: "No. There is no YourBillBook cloud account. Sales, stock and customer details stay on your phone. Backups are files you export yourself from More → Data.",
    link: { href: "/privacy", label: "Read the privacy policy" },
  },
  {
    q: "What if my phone breaks or I get a new one?",
    a: "Reinstall on the new phone with the same Google account. You don't pay again. Then restore your latest backup file. Data that was never backed up stays on the old phone, so take a backup regularly. The app reminds you on Home.",
  },
  {
    q: "Which printers does it support?",
    a: "Bluetooth ESC/POS thermal printers in 58, 80 and 112 mm widths. If UPI is on the bill, your UPI QR prints on the receipt. You can also download or share the bill as a PDF.",
  },
  {
    q: "Can two phones or two shops share the same data?",
    a: "No. YourBillBook is one phone and one store, on purpose. If you need staff logins, more than one store or cloud sync, StoreMitr is our app built for that.",
  },
  {
    q: "Is the app available in Hindi?",
    a: "Yes. Home, Sale, checkout and Khata have Hindi labels. You can switch from More → Language / भाषा.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10 lg:pb-20 lg:pt-16">
          <div>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-[var(--ybb-ink)] sm:text-6xl lg:text-[4.1rem]">
              Billing that works{" "}
              <span className="relative inline-block whitespace-nowrap">
                even offline.
                <svg
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3.5 w-full text-[var(--ybb-marigold)]"
                  aria-hidden="true"
                >
                  <path
                    className="draw-line"
                    d="M3 14 C 60 4, 120 4, 170 10 S 260 16, 297 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--ybb-ink)]/80">
              A bill book, stock register and khata on one Android phone. Built
              for the shop counter, where the signal drops right when the queue is longest.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                { icon: IconWifiOff, strong: "No internet needed", rest: "for billing, stock or khata" },
                { icon: IconInfinity, strong: "Pay once", rest: "on Google Play. No monthly fee." },
                { icon: IconPrinter, strong: "Prints receipts", rest: "on 58, 80 and 112 mm Bluetooth printers" },
              ].map(({ icon: Icon, strong, rest }) => (
                <li key={strong} className="flex items-center gap-3 text-[15px] text-[var(--ybb-muted)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--ybb-sheet)] text-[var(--ybb-primary)] ring-1 ring-[var(--ybb-primary)]/15">
                    <Icon size={17} />
                  </span>
                  <span>
                    <strong className="font-bold text-[var(--ybb-ink)]">{strong}</strong> {rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <PlayBadge />
              <a
                href="#try"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--ybb-ink)]"
              >
                <span className="underline decoration-[var(--ybb-marigold)] decoration-2 underline-offset-4">
                  Try a bill right here
                </span>
                <IconArrowDown size={16} className="transition group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Art + real phone */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--ybb-border)] shadow-[0_40px_90px_-50px_rgba(60,40,0,0.55)]">
              <Image
                src="/img/art/counter.webp"
                alt="Illustration of a kirana counter with a phone, a receipt printer, a UPI QR stand and a khata notebook"
                width={1400}
                height={1050}
                preload
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute right-3 top-3 sm:right-5 sm:top-5">
              <HeroToasts />
            </div>
            <div
              className="float-soft absolute -bottom-8 left-2 w-[30%] min-w-[118px] max-w-[190px] sm:-bottom-10 sm:left-[-1.5rem]"
              style={{ "--r": "-5deg" } as React.CSSProperties}
            >
              <PhoneFrame
                src="/img/screens/sale.webp"
                alt="YourBillBook sale screen with products and a ₹1,091 cart"
                sizes="190px"
                compact
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHOP TICKER ================= */}
      <section aria-label="Shops that use a counter" className="relative py-3">
        <div className="zigzag-y -rotate-1 bg-[var(--ybb-receipt)] py-4 shadow-[0_10px_30px_-20px_rgba(60,40,0,0.5)]">
          <div className="ticker flex overflow-hidden">
            <div className="ticker-track flex w-max shrink-0 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[var(--ybb-ink)]/75">
              {[0, 1].map((half) => (
                <div key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
                  {[...shopTypes, ...shopTypes].map((s, i) => (
                    <span key={i} className="flex items-center gap-8 whitespace-nowrap pr-8">
                      {s}
                      <span className="text-[var(--ybb-primary)]">✶</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRY A BILL ================= */}
      <section id="try" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="mb-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-sm font-bold text-[var(--ybb-primary)]">Try it · no download</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--ybb-ink)] sm:text-5xl">
              Go on, ring up a bill.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--ybb-muted)]">
              A small copy of the Sale screen. Tap items, pick how they paid, and print.
              Then switch the internet off and do it again.
            </p>
          </div>
          <p className="hidden max-w-[16rem] rotate-2 rounded-xl border border-dashed border-[var(--ybb-border-strong)] bg-[var(--ybb-surface)] px-4 py-3 text-sm text-[var(--ybb-muted)] lg:block">
            Tip: try <span className="font-hindi font-bold text-[var(--ybb-ink)]">हिं</span> for Hindi
            labels, like the app.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <TryABill />
        </Reveal>
      </section>

      {/* ================= A DAY AT THE COUNTER ================= */}
      <section className="border-y border-[var(--ybb-border)] bg-[var(--ybb-surface)]/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-sm font-bold text-[var(--ybb-primary)]">The real app</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--ybb-ink)] sm:text-5xl">
              One phone, from opening to closing.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ybb-muted)]">
              A normal day at Sharma General Store, a demo shop. These are actual
              YourBillBook screens.
            </p>
          </Reveal>
          <div className="mt-10 lg:mt-4">
            <DayAtCounter />
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--ybb-ink)] sm:text-5xl">
            Made for how a counter actually runs.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-6">
          <Reveal className="lg:col-span-4">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-[var(--ybb-primary-deep)] p-7 text-white sm:flex-row sm:items-center sm:p-9">
              <div className="relative z-10 max-w-sm">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--ybb-leaf)]">
                  Offline first
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">
                  No signal? Billing doesn&apos;t notice.
                </h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  Sales, stock and khata are saved on the phone. A basement shop, patchy 4G
                  or airplane mode makes no difference.
                </p>
              </div>
              <Image
                src="/img/art/offline.webp"
                alt=""
                width={890}
                height={900}
                sizes="(min-width: 1024px) 300px, 70vw"
                className="mx-auto mt-6 w-[70%] max-w-[300px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] sm:mt-0 sm:w-[45%]"
              />
            </article>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-2">
            <article className="h-full rounded-[1.75rem] border border-[var(--ybb-border)] bg-[var(--ybb-surface)] p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--ybb-primary)]">
                Your printer
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[var(--ybb-ink)]">
                Fits the paper you already use.
              </h3>
              <div className="mt-5">
                <ReceiptWidths />
              </div>
            </article>
          </Reveal>

          {[
            {
              img: "/img/art/khata.webp",
              w: 859,
              h: 866,
              kicker: "Khata",
              title: "Udhaar, without the notebook.",
              body: "Customer balances, credit limits and payment collection. Overdue bakaya shows up on Home.",
            },
            {
              img: "/img/art/pay-once.webp",
              w: 889,
              h: 900,
              kicker: "Pay once",
              title: "Buy it once. That's all.",
              body: "One Google Play purchase. Reinstall free on the same Google account. Nothing to renew.",
            },
            {
              img: "/img/art/backup.webp",
              w: 892,
              h: 576,
              kicker: "Backup",
              title: "Phone broke? The shop didn't.",
              body: "Export a backup file, restore it on your next phone. CSV export too, for your accountant.",
            },
          ].map((c, i) => (
            <Reveal key={c.kicker} delay={i * 80} className="lg:col-span-2">
              <article className="group flex h-full flex-col rounded-[1.75rem] border border-[var(--ybb-border)] bg-[var(--ybb-surface)] p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_50px_-35px_rgba(60,40,0,0.5)]">
                <div className="flex h-40 items-center justify-center">
                  <Image
                    src={c.img}
                    alt=""
                    width={c.w}
                    height={c.h}
                    sizes="220px"
                    className="max-h-40 w-auto transition duration-500 group-hover:scale-105 group-hover:-rotate-2"
                  />
                </div>
                <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--ybb-primary)]">
                  {c.kicker}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-[var(--ybb-ink)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ybb-muted)]">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--ybb-ink)]"
          >
            <span className="underline decoration-[var(--ybb-marigold)] decoration-2 underline-offset-4">
              See every feature
            </span>
            <IconArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* ================= YBB vs STOREMITR ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--ybb-ink)] sm:text-5xl">
            One phone, or a whole team?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--ybb-muted)]">
            YourBillBook and StoreMitr are both made by {site.publisher}. Choose the one
            that fits the shop you have today.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "YourBillBook",
              tone: "var(--ybb-primary)",
              logo: "/brand/logo-mark.png",
              rows: [
                ["Payment", "One-time on Play"],
                ["Data", "On this phone"],
                ["Stores", "One"],
                ["Team", "Just you"],
              ],
              best: "A single counter that wants it simple",
              cta: { href: site.playUrl, label: "Get it on Google Play" },
            },
            {
              name: "StoreMitr",
              tone: "var(--sm-orange)",
              logo: "/storemitr/logo.png",
              rows: [
                ["Payment", "Subscription plans"],
                ["Data", "Cloud sync"],
                ["Stores", "Many"],
                ["Team", "Owner · Manager · Cashier"],
              ],
              best: "Growing shops with staff or branches",
              cta: { href: site.storeMitr.url, label: "Visit StoreMitr.com" },
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`zigzag-bottom h-full bg-[var(--ybb-receipt)] px-7 pt-7 font-mono shadow-[0_30px_50px_-35px_rgba(60,40,0,0.55)] ${
                  i === 0 ? "md:-rotate-[0.6deg]" : "md:rotate-[0.6deg]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image src={p.logo} alt="" width={36} height={36} className="h-9 w-9" />
                  <p className="font-display text-2xl font-semibold" style={{ color: p.tone }}>
                    {p.name}
                  </p>
                </div>
                <div className="dashed-rule my-5" />
                <dl className="space-y-2.5 text-sm">
                  {p.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="text-black/50">{k}</dt>
                      <dd className="text-right font-bold text-[var(--ybb-ink)]">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="dashed-rule my-5" />
                <p className="text-xs uppercase tracking-[0.14em] text-black/45">Best for</p>
                <p className="mt-1 font-sans text-base font-semibold text-[var(--ybb-ink)]">{p.best}</p>
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-bold text-white transition hover:brightness-110"
                  style={{ background: p.tone }}
                >
                  {p.cta.label}
                  <IconArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-[var(--ybb-border)] bg-[var(--ybb-surface)]/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--ybb-ink)]">
              Questions shopkeepers ask us.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--ybb-muted)]">
              Something else?{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="font-semibold text-[var(--ybb-primary)] underline underline-offset-4"
              >
                {site.supportEmail}
              </a>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="divide-y divide-[var(--ybb-border)] border-y border-[var(--ybb-border)]">
              {faqs.map((f) => (
                <details key={f.q} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-[var(--ybb-ink)] [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <IconChevronDown
                      size={20}
                      className="shrink-0 text-[var(--ybb-muted)] transition group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 pr-8 leading-relaxed text-[var(--ybb-muted)]">
                    {f.a}{" "}
                    {f.link && (
                      <Link href={f.link.href} className="font-semibold text-[var(--ybb-primary)] underline underline-offset-4">
                        {f.link.label}
                      </Link>
                    )}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ybb-primary-deep)] text-white">
            <div className="grid items-center lg:grid-cols-[1fr_1.1fr]">
              <div className="relative z-10 p-8 sm:p-12">
                <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Open the shutter. Start billing.
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/75">
                  Install YourBillBook from Google Play, add your products, and ring up
                  your first bill in a few minutes. Pay once, and it&apos;s yours.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <PlayBadge />
                  <Link
                    href="/support"
                    className="text-sm font-bold text-white/85 underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    Need help? Contact support
                  </Link>
                </div>
              </div>
              <div className="px-6 pb-6 lg:py-8 lg:pl-0 lg:pr-8">
                <Image
                  src="/img/art/banner.webp"
                  alt=""
                  width={1200}
                  height={630}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="h-auto w-full rounded-[1.4rem] ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
