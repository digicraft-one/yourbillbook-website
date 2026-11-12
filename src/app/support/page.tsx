import type { Metadata } from "next";
import Link from "next/link";
import { PlayBadge } from "@/components/PlayBadge";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Support and contact for ${site.name}.`,
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ybb-primary)]">
        Help
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[var(--ybb-ink)]">
        Support
      </h1>
      <p className="mt-3 text-base leading-relaxed text-[var(--ybb-muted)]">
        We&apos;re here for install, license, backup, and printer questions for
        YourBillBook.
      </p>

      <div className="mt-10 space-y-4">
        <a
          href={`mailto:${site.supportEmail}?subject=YourBillBook%20support`}
          className="block rounded-2xl border border-[var(--ybb-border)] bg-white p-5 transition hover:border-[var(--ybb-primary)]"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ybb-muted)]">
            Email
          </p>
          <p className="mt-1 text-xl font-bold text-[var(--ybb-primary)]">
            {site.supportEmail}
          </p>
          <p className="mt-2 text-sm text-[var(--ybb-muted)]">
            Include your Google account email used on Play (not the password)
            and Android version if reporting a bug.
          </p>
        </a>

        <div className="rounded-2xl border border-[var(--ybb-border)] bg-[var(--ybb-sheet)] p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ybb-muted)]">
            Common topics
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ybb-ink)]/90">
            <li>
              <strong>Purchase / reinstall:</strong> use the same Google account
              that bought the app on Play.
            </li>
            <li>
              <strong>Backup:</strong> More → Data → Backup now. Keep the file
              somewhere safe.
            </li>
            <li>
              <strong>Printer:</strong> pair in Android Bluetooth settings, then
              More → Printers.
            </li>
            <li>
              <strong>StoreMitr:</strong> cloud / multi-store help is handled by{" "}
              <a
                href={`mailto:${site.storeMitr.supportEmail}`}
                className="font-semibold text-[var(--sm-orange)]"
              >
                {site.storeMitr.supportEmail}
              </a>{" "}
              or{" "}
              <a
                href={site.storeMitr.url}
                className="font-semibold text-[var(--sm-orange)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                storemitr.com
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--ybb-border)] bg-white p-5">
          <PlayBadge />
          <div className="text-sm text-[var(--ybb-muted)]">
            <p className="font-semibold text-[var(--ybb-ink)]">Get the app</p>
            <p>
              <Link href="/privacy" className="text-[var(--ybb-primary)]">
                Privacy
              </Link>
              {" · "}
              <Link href="/terms" className="text-[var(--ybb-primary)]">
                Terms
              </Link>
              {" · "}
              <Link href="/features" className="text-[var(--ybb-primary)]">
                Features
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
