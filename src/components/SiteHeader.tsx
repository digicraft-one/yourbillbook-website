import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ybb-border)]/70 bg-[color-mix(in_srgb,var(--ybb-sheet)_88%,white)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 min-w-0">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--ybb-ink)] truncate">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--ybb-muted)] transition hover:text-[var(--ybb-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={site.storeMitr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-semibold text-[var(--sm-orange)] sm:inline hover:underline"
          >
            StoreMitr
          </Link>
          <Link
            href={site.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--ybb-primary)] px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--ybb-primary-dark)]"
          >
            Get on Play
          </Link>
        </div>
      </div>
    </header>
  );
}
