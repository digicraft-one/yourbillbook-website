import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="13 November 2026">
      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          1. Agreement
        </h2>
        <p className="mt-2">
          By downloading or using {site.name} (package{" "}
          <span className="font-mono text-sm">{site.packageName}</span>), you
          agree to these Terms with {site.publisher}. If you do not agree, do not
          use the App.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          2. The product
        </h2>
        <p className="mt-2">
          {site.name} is an offline-oriented Android application for recording
          sales, stock, Khata, expenses, and related shop records on a single
          device. It is{" "}
          <strong>not</strong> a payment gateway and does not collect money from
          your customers. Cash / UPI / Card / Khata are labels you record.
        </p>
        <p className="mt-2">
          {site.name} is separate from{" "}
          <a
            href={site.storeMitr.url}
            className="font-semibold text-[var(--sm-orange)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            StoreMitr
          </a>
          , which offers cloud and multi-store features under its own terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          3. License & purchase
        </h2>
        <p className="mt-2">
          The App is sold as a paid Google Play application (one-time purchase
          unless Play states otherwise). Subject to these Terms and Play&apos;s
          terms, we grant you a personal, non-exclusive, non-transferable license
          to use the App on devices associated with the purchasing Google
          account, as allowed by Google Play.
        </p>
        <p className="mt-2">
          Refunds, chargebacks, and family library sharing follow Google Play
          policies. We may use Google Play Licensing to verify ownership.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          4. Your responsibilities
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Keep backups of important shop data using the in-app backup tools</li>
          <li>Ensure GST / tax / invoice wording matches your legal obligations</li>
          <li>Do not reverse engineer, redistribute, or circumvent licensing</li>
          <li>Do not use the App for unlawful activity</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          5. No professional advice
        </h2>
        <p className="mt-2">
          The App helps you keep records. It does not provide legal, tax, or
          accounting advice. You are responsible for compliance with Indian GST
          and other applicable laws.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          6. Availability & changes
        </h2>
        <p className="mt-2">
          We may update the App, change features, or discontinue distribution. We
          try to keep offline core flows reliable but do not guarantee
          uninterrupted service (especially printer hardware, OS changes, or Play
          services).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          7. Disclaimer of warranties
        </h2>
        <p className="mt-2">
          THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          8. Limitation of liability
        </h2>
        <p className="mt-2">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {site.publisher.toUpperCase()}{" "}
          WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
          LOST PROFITS / DATA DAMAGES ARISING FROM USE OF THE APP. OUR TOTAL
          LIABILITY FOR CLAIMS RELATING TO THE APP IS LIMITED TO THE AMOUNT YOU
          PAID FOR THE APP LICENSE IN THE TWELVE MONTHS BEFORE THE CLAIM (OR INR
          1,000 IF GREATER LAW REQUIRES A MINIMUM).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          9. Privacy
        </h2>
        <p className="mt-2">
          Our{" "}
          <a href="/privacy" className="font-semibold text-[var(--ybb-primary)]">
            Privacy Policy
          </a>{" "}
          explains how data is handled.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          10. Governing law
        </h2>
        <p className="mt-2">
          These Terms are governed by the laws of India. Courts in Jamshedpur,
          Jharkhand (or as required by mandatory consumer law) shall have
          jurisdiction, without affecting non-waivable consumer rights.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          11. Contact
        </h2>
        <p className="mt-2">
          <a
            className="font-semibold text-[var(--ybb-primary)]"
            href={`mailto:${site.supportEmail}`}
          >
            {site.supportEmail}
          </a>
        </p>
      </section>
    </LegalShell>
  );
}
