import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} (${site.packageName}).`,
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="13 November 2026">
      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          1. Who we are
        </h2>
        <p className="mt-2">
          {site.name} (&quot;the App&quot;) is published by {site.publisher}{" "}
          (&quot;we&quot;, &quot;us&quot;). Package name:{" "}
          <span className="font-mono text-sm">{site.packageName}</span>. Contact:{" "}
          <a
            className="font-semibold text-[var(--ybb-primary)]"
            href={`mailto:${site.supportEmail}`}
          >
            {site.supportEmail}
          </a>
          . Website:{" "}
          <a className="text-[var(--ybb-primary)]" href={site.url}>
            {site.domain}
          </a>
          .
        </p>
        <p className="mt-2">
          {site.name} is a separate product from{" "}
          <a
            href={site.storeMitr.url}
            className="font-semibold text-[var(--sm-orange)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            StoreMitr
          </a>
          . StoreMitr has its own privacy practices at storemitr.com. This policy
          covers {site.name} only.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          2. Summary
        </h2>
        <p className="mt-2">
          {site.name} is designed to keep shop data on your phone. We do not
          operate a {site.name} cloud account for sales, stock, or Khata. Google
          Play handles purchase and license checks. You control optional backups
          you export yourself.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          3. Information stored on your device
        </h2>
        <p className="mt-2">
          Depending on how you use the App, it may store locally (SQLite /
          preferences):
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Store profile (name, address, GSTIN, UPI VPA, invoice settings)</li>
          <li>Products, stock levels, stock history, product photos you add</li>
          <li>Sales, payments labels (Cash/UPI/Card/Khata), customers, Khata entries</li>
          <li>Expenses, printer settings, language preference</li>
          <li>Optional PIN / zone PIN (stored as a local hash, not shared with us)</li>
          <li>Crash notes you may export from the in-app crash log</li>
        </ul>
        <p className="mt-2">
          Customer names and phone numbers you enter are your business records.
          We do not receive them unless you voluntarily email support or share a
          backup file with someone.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          4. Permissions
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Camera</strong> — barcode scan and optional product photos
          </li>
          <li>
            <strong>Bluetooth</strong> — thermal receipt printers
          </li>
          <li>
            <strong>Storage / files</strong> — backup, restore, PDF/CSV share as
            you choose
          </li>
          <li>
            <strong>Internet</strong> — Google Play licensing / store links;
            opening StoreMitr or support links you tap
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          5. Google Play purchase & licensing
        </h2>
        <p className="mt-2">
          Payment is processed by Google Play. Google may process account,
          device, and purchase data under Google&apos;s policies. The App may
          contact Google Play Licensing to verify that your Google account owns
          the paid app. That check uses Google&apos;s services — not a DigiCraft
          license server for shop data.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          6. What we do not do
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>No ads in the App</li>
          <li>No sale of shop data</li>
          <li>No payment gateway that takes customer money inside the App</li>
          <li>No required DigiCraft login for daily billing</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          7. Website
        </h2>
        <p className="mt-2">
          This marketing site ({site.domain}) may use standard hosting logs
          (IP, user agent) from our host. We do not run advertising trackers on
          this site for selling personal data.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          8. Children
        </h2>
        <p className="mt-2">
          The App is a business tool and is not directed at children under 13
          (or the age required in your region).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          9. Your choices & deletion
        </h2>
        <p className="mt-2">
          You can clear App data, uninstall the App, or restore from a backup you
          control. Uninstalling removes local data from that device. Google
          purchase history remains with your Google account per Google&apos;s
          rules.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          10. Changes
        </h2>
        <p className="mt-2">
          We may update this policy. The &quot;Last updated&quot; date will
          change. Continued use after updates means you accept the revised
          policy where permitted by law.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-[var(--ybb-ink)]">
          11. Contact
        </h2>
        <p className="mt-2">
          Privacy questions:{" "}
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
