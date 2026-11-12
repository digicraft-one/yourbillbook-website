import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--ybb-border)] bg-[var(--ybb-ink)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg bg-white/10"
            />
            <div>
              <p className="font-display text-xl font-semibold">{site.name}</p>
              <p className="text-sm text-white/65">by {site.publisher}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Offline bill book for Indian shop counters. One phone, one store,
            pay once on Google Play.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            Product
          </p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={site.playUrl} className="text-white/80 hover:text-white">
                Google Play
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            Also from DigiCraft
          </p>
          <a
            href={site.storeMitr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <div className="mb-2 flex items-center gap-2">
              <Image
                src="/storemitr/logo.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="font-semibold text-[var(--sm-orange)]">
                StoreMitr
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {site.storeMitr.tagline}. Cloud, team seats, multi-store — when
              one phone is not enough.
            </p>
          </a>
          <p className="mt-4 text-sm text-white/60">
            Support:{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="underline decoration-white/30 hover:text-white"
            >
              {site.supportEmail}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © 2026 {site.publisher}. {site.name} package{" "}
            <span className="font-mono text-white/55">{site.packageName}</span>
          </p>
          <p>
            <Link href="/privacy" className="hover:text-white/80">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-white/80">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
