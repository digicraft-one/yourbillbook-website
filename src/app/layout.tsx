import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Offline billing for Indian shops`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  keywords: [
    "YourBillBook",
    "offline billing",
    "khata",
    "inventory",
    "GST billing",
    "kirana",
    "DigiCraft",
    "StoreMitr",
  ],
  authors: [{ name: site.publisher, url: site.publisherUrl }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — Offline billing. Pay once.`,
    description: site.shortDescription,
    siteName: site.name,
    images: [{ url: "/brand/logo.png", width: 512, height: 512, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.shortDescription,
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
