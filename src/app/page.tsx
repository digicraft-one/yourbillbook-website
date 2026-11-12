import Image from "next/image";
import Link from "next/link";
import { PlayBadge } from "@/components/PlayBadge";
import { features, site } from "@/content/site";

const featureIcons: Record<string, string> = {
  sale: "₹",
  stock: "▣",
  khata: "≡",
  print: "▤",
  offline: "✈",
  pay: "✓",
};

export default function HomePage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="grid-wash absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
          <div className="animate-rise">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--ybb-border)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ybb-primary-dark)]">
              DigiCraft · Android
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--ybb-ink)] sm:text-5xl lg:text-[3.4rem]">
              YourBillBook
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-[var(--ybb-ink)]/85 sm:text-xl">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--ybb-muted)]">
              Bill, stock, and Khata on one phone — even with airplane mode on.
              Built for kirana and small counters who want a simple offline app,
              not another subscription.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-rise-delay">
              <PlayBadge />
              <Link
                href="/features"
                className="rounded-full border border-[var(--ybb-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ybb-ink)] transition hover:border-[var(--ybb-primary)] hover:text-[var(--ybb-primary)]"
              >
                See features
              </Link>
            </div>
            <p className="mt-5 text-sm text-[var(--ybb-muted)] animate-rise-delay-2">
              Package{" "}
              <span className="font-mono text-[var(--ybb-ink)]">
                {site.packageName}
              </span>
            </p>
          </div>

          <div className="relative animate-rise-delay">
            <div className="absolute -inset-6 rounded-[2rem] bg-[var(--ybb-primary)]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--ybb-border)] bg-white shadow-[0_30px_80px_-40px_rgba(20,92,46,0.55)]">
              <div className="border-b border-[var(--ybb-border)] bg-[var(--ybb-sheet)] px-5 py-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/brand/logo-mark.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-xl"
                  />
                  <div>
                    <p className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
                      YourBillBook
                    </p>
                    <p className="text-sm text-[var(--ybb-muted)]">
                      Today · Cash · UPI · Khata
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2">
                {[
                  ["Sales", "₹12,480"],
                  ["Bills", "27"],
                  ["Khata due", "₹3,200"],
                  ["Expenses", "₹640"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-[var(--ybb-border)] bg-[var(--ybb-sheet)] px-4 py-3"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ybb-muted)]">
                      {label}
                    </p>
                    <p className="mt-1 text-xl font-bold text-[var(--ybb-ink)]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--ybb-border)] px-5 py-4 text-sm text-[var(--ybb-muted)]">
                Offline SQLite on device · Bluetooth print · PDF share
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ybb-ink)] sm:text-4xl">
            Everything a counter needs — on this phone
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--ybb-muted)]">
            No cloud login for daily billing. Your sales, stock, and bakaya stay
            local until you choose to backup.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-[var(--ybb-border)] bg-white p-5 shadow-[0_1px_0_rgba(18,24,18,0.03)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ybb-sheet)] text-lg font-bold text-[var(--ybb-primary)]">
                {featureIcons[f.icon]}
              </div>
              <h3 className="text-lg font-semibold text-[var(--ybb-ink)]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ybb-muted)]">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--ybb-border)] bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ybb-primary)]">
              How it works
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[var(--ybb-ink)]">
              Pay once on Play. Use forever on that account.
            </h2>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--ybb-muted)]">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--ybb-primary)] text-xs font-bold text-white">
                  1
                </span>
                Buy YourBillBook on Google Play with your Google account.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--ybb-primary)] text-xs font-bold text-white">
                  2
                </span>
                Set up store, add products, start billing — offline works.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--ybb-primary)] text-xs font-bold text-white">
                  3
                </span>
                Uninstall or change phones? Same Google account reinstalls free.
              </li>
            </ol>
            <div className="mt-8">
              <PlayBadge />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--ybb-border)] bg-[var(--ybb-sheet)] p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-[var(--ybb-ink)]">
              YourBillBook vs StoreMitr
            </h3>
            <div className="mt-5 overflow-hidden rounded-xl border border-[var(--ybb-border)] bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--ybb-sheet)] text-[var(--ybb-muted)]">
                  <tr>
                    <th className="px-4 py-3 font-semibold"> </th>
                    <th className="px-4 py-3 font-semibold text-[var(--ybb-primary)]">
                      YourBillBook
                    </th>
                    <th className="px-4 py-3 font-semibold text-[var(--sm-orange)]">
                      StoreMitr
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--ybb-ink)]">
                  {[
                    ["Payment", "One-time on Play", "Subscription / plans"],
                    ["Data", "On this phone", "Cloud sync"],
                    ["Stores", "One store", "Multi-store"],
                    ["Team", "Single phone", "Owner / Manager / Cashier"],
                    ["Best for", "Simple offline counter", "Growing shops"],
                  ].map(([row, a, b]) => (
                    <tr key={row} className="border-t border-[var(--ybb-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--ybb-muted)]">
                        {row}
                      </td>
                      <td className="px-4 py-3">{a}</td>
                      <td className="px-4 py-3">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(224,120,31,0.12),rgba(245,247,245,0.4)_45%,rgba(27,122,61,0.08))]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div className="order-2 lg:order-1">
            <Image
              src="/storemitr/kirana.png"
              alt="Shopkeeper using StoreMitr"
              width={640}
              height={640}
              className="mx-auto h-auto w-full max-w-md animate-float drop-shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/storemitr/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <Image
                src="/storemitr/wordmark.png"
                alt="StoreMitr"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ybb-ink)] sm:text-4xl">
              Need cloud, team, or more stores?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--ybb-muted)]">
              <strong className="text-[var(--ybb-ink)]">StoreMitr</strong> is
              DigiCraft&apos;s full shop OS — multi-store, staff roles, cloud
              sync, WhatsApp invoices, and plans that grow with you. Keep
              YourBillBook for a single offline phone; graduate to StoreMitr when
              the business needs more.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.storeMitr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--sm-orange)] px-5 py-3 text-sm font-bold text-white transition hover:brightness-105"
              >
                Visit StoreMitr.com
              </a>
              <a
                href={site.storeMitr.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--sm-orange)]/40 bg-white px-5 py-3 text-sm font-bold text-[var(--sm-orange)]"
              >
                StoreMitr on Play
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="rounded-[1.75rem] border border-[var(--ybb-border)] bg-[var(--ybb-primary)] px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Ready for the counter?
              </h2>
              <p className="mt-2 text-white/80">
                Install YourBillBook from Google Play. Privacy and terms are
                published here for Play Console and your customers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <PlayBadge />
              <Link
                href="/support"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--ybb-primary-dark)]"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
