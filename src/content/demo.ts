/** Demo data for the landing page. Matches the demo store used in the app screenshots. */

export const demoStore = {
  name: "Sharma General Store",
  nameHi: "शर्मा जनरल स्टोर",
  customer: "Ramesh Kumar",
} as const;

export const demoProducts = [
  { id: "toor-dal", name: "Toor Dal 1 kg", hi: "तूर दाल 1 kg", price: 160 },
  { id: "basmati-rice", name: "Basmati Rice 5 kg", hi: "बासमती चावल 5 kg", price: 425 },
  { id: "sugar", name: "Sugar 1 kg", hi: "चीनी 1 kg", price: 46 },
  { id: "tea-leaves", name: "Tea Leaves 250 g", hi: "चाय पत्ती 250 g", price: 140 },
  { id: "bath-soap", name: "Bath Soap", hi: "नहाने का साबुन", price: 38 },
  { id: "mustard-oil", name: "Mustard Oil 1 L", hi: "सरसों तेल 1 L", price: 185 },
  { id: "atta", name: "Atta 5 kg", hi: "आटा 5 kg", price: 245 },
  { id: "biscuits", name: "Biscuits", hi: "बिस्कुट", price: 10 },
  { id: "detergent", name: "Detergent 1 kg", hi: "डिटर्जेंट 1 kg", price: 95 },
] as const;

export type DemoProductId = (typeof demoProducts)[number]["id"];

export const demoLabels = {
  en: {
    tapToStart: "Tap an item to start the bill",
    items: "items",
    total: "Total",
    pay: "Payment",
    cash: "Cash",
    upi: "UPI",
    khata: "Khata",
    print: "Print bill",
    newSale: "New sale",
    paidCash: "PAID · CASH",
    paidUpi: "PAID · UPI",
    onKhata: "ON KHATA",
    thanks: "Thank you, visit again",
    customer: "Customer",
    online: "Internet on",
    offline: "Internet off",
    offlineNote: "Still billing. Nothing changed.",
    scan: "Scan to pay",
  },
  hi: {
    tapToStart: "बिल शुरू करने के लिए सामान चुनें",
    items: "आइटम",
    total: "कुल",
    pay: "भुगतान",
    cash: "नकद",
    upi: "UPI",
    khata: "खाता",
    print: "बिल प्रिंट करें",
    newSale: "नई बिक्री",
    paidCash: "भुगतान · नकद",
    paidUpi: "भुगतान · UPI",
    onKhata: "खाते में",
    thanks: "धन्यवाद, फिर आइए",
    customer: "ग्राहक",
    online: "इंटरनेट चालू",
    offline: "इंटरनेट बंद",
    offlineNote: "बिलिंग जारी है। कुछ नहीं बदला।",
    scan: "स्कैन करके भुगतान करें",
  },
} as const;

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
