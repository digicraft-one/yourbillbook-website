import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const hindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: offline billing for Indian shops`,
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
    title: `${site.name}: billing that works without internet`,
    description: site.shortDescription,
    siteName: site.name,
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: `${site.name}: offline billing on one Android phone` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.shortDescription,
    images: ["/img/og-image.jpg"],
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${hindi.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
