import type { Metadata } from "next";
import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PlayBadge } from "@/components/PlayBadge";
import { features, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Offline sales, stock, Khata, Bluetooth print, expenses, backup — YourBillBook feature list.",
};

const deep = [
  {
    title: "Sale",
    screen: "checkout",
    points: [
      "Product grid with search and barcode camera scan",
      "Favorites pinned on top; recent items after a completed sale",
      "Hold bill, copy last bill, qty chips for variable units",
      "Cash / UPI / Card / Khata / Split with optional customer",
      "Confirm never waits on the printer",
    ],
  },
  {
    title: "Inventory",
    screen: "inventory",
    points: [
      "Products with price, tax %, barcode, photo, low-stock threshold",
      "Stock adjust and stock history",
      "Bulk price update (% or flat)",
      "Fast stock-take scan/count loop",
    ],
  },
  {
    title: "Khata & Home",
    screen: "home",
    points: [
      "Customer bakaya, collect payment, credit limit",
      "Home totals for today, 7 days, 30 days, or custom range",
      "Overdue bakaya list and backup reminder",
      "Daily expenses with categories",
    ],
  },
  {
    title: "Print, share & safety",
    screen: "receipt",
    points: [
      "Bluetooth ESC/POS 58 / 80 / 112 mm",
      "Thermal UPI QR image when UPI is on the bill",
      "PDF download / share",
      "CSV export, SQLite backup & restore",
      "Optional PIN lock and PIN zones for void / view cost",
      "English + Hindi labels for main flows",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ybb-primary)]">
          Product
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[var(--ybb-ink)]">
          Features
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--ybb-muted)]">
          YourBillBook is a paid, offline-first Android bill book. For cloud,
          team seats, and multi-store, see{" "}
          <a
            href={site.storeMitr.url}
            className="font-semibold text-[var(--sm-orange)] underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            StoreMitr
          </a>
          .
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-[var(--ybb-border)] bg-white p-5"
          >
            <h2 className="text-lg font-semibold text-[var(--ybb-ink)]">
              {f.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ybb-muted)]">
              {f.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {deep.map((block) => (
          <section
            key={block.title}
            className="grid gap-6 rounded-[1.75rem] border border-[var(--ybb-border)] bg-[var(--ybb-surface)] p-6 sm:grid-cols-[150px_1fr]"
          >
            <PhoneFrame
              src={`/img/screens/${block.screen}.webp`}
              alt={`${block.title} screen in YourBillBook`}
              sizes="150px"
              compact
              className="mx-auto w-[150px] self-start"
            />
            <div>
              <h2 className="font-display text-2xl font-semibold text-[var(--ybb-ink)]">
                {block.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--ybb-muted)]">
                {block.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ybb-primary)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--ybb-border)] bg-white p-6">
        <PlayBadge />
        <div>
          <p className="font-semibold text-[var(--ybb-ink)]">
            Get it on Google Play
          </p>
          <p className="text-sm text-[var(--ybb-muted)]">
            One-time purchase ·{" "}
            <Link href="/support" className="text-[var(--ybb-primary)]">
              Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
