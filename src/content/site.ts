export const site = {
  name: "YourBillBook",
  domain: "yourbillbook.digicraft.one",
  url: "https://yourbillbook.digicraft.one",
  packageName: "com.digicraft.yourbillbook",
  tagline: "Offline billing for your shop. Pay once. Use forever.",
  shortDescription:
    "Offline billing, stock & Khata for your shop. Pay once. Works without internet.",
  supportEmail: "support@digicraft.one",
  publisher: "DigiCraft",
  publisherUrl: "https://digicraft.one",
  playUrl:
    "https://play.google.com/store/apps/details?id=com.digicraft.yourbillbook",
  storeMitr: {
    name: "StoreMitr",
    url: "https://storemitr.com",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.digicraft.storemitr&hl=en_IN",
    tagline: "Multi-store · team · cloud sync · GST billing",
    supportEmail: "support@storemitr.com",
  },
} as const;

export const features = [
  {
    title: "Fast counter sales",
    body: "Search, favorites, barcode scan, hold bill, and copy last bill — built for rush hours.",
    icon: "sale",
  },
  {
    title: "Stock that stays honest",
    body: "Adjust stock, low-stock alerts, bulk price update, and a fast stock-take loop.",
    icon: "stock",
  },
  {
    title: "Khata / bakaya",
    body: "Track udhaar, collect payments, credit limits, and overdue reminders on Home.",
    icon: "khata",
  },
  {
    title: "Print & share",
    body: "Bluetooth thermal printers (58/80/112 mm), UPI QR on receipt, PDF share.",
    icon: "print",
  },
  {
    title: "Works offline",
    body: "Airplane mode friendly. Sales, stock, and Khata live in SQLite on your phone.",
    icon: "offline",
  },
  {
    title: "Pay once",
    body: "One Google Play purchase. Same account can reinstall forever — no subscription.",
    icon: "pay",
  },
] as const;

export const nav = [
  { href: "/features", label: "Features" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
