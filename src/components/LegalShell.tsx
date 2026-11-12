import type { ReactNode } from "react";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalShell({ title, updated, children }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ybb-primary)]">
        YourBillBook
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[var(--ybb-ink)]">
        {title}
      </h1>
      <p className="mt-2 text-sm text-[var(--ybb-muted)]">Last updated: {updated}</p>
      <div className="prose-ybb mt-10 space-y-8 text-[15px] leading-7 text-[var(--ybb-ink)]/90">
        {children}
      </div>
    </div>
  );
}
