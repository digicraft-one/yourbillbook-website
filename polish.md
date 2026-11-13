# Polish plan: from "template site" to a site that feels made for kirana counters

Goal: make yourbillbook.digicraft.one feel designed, not generated. Visitors should
*play with* the product idea (offline, fast bill, receipt, Khata) instead of reading
six cards about it.

Reference: [mybillbook.in](https://mybillbook.in/) (same domain: Indian SMB billing).
We borrow **patterns**, not their copy, layout, colours, illustrations or claims.
YourBillBook's angle is different anyway: **offline, single phone, pay once**. Lean into
that instead of chasing a GST-suite look.

---

## 1. What currently reads as "AI / vibe coded"

| Tell | Where | Why it feels generic |
|---|---|---|
| Unicode glyphs as icons (`₹ ▣ ≡ ▤ ✈ ✓`) | `src/app/page.tsx` `featureIcons` | Obvious placeholder; inconsistent weight and size |
| Radial-gradient glow + faint grid wash | `.hero-glow`, `.grid-wash` in `globals.css` | The default "AI landing page" background |
| Pill eyebrow tag ("DigiCraft · Android") above an H1 | Hero | Same pattern on thousands of templates |
| H1 is just the product name | Hero | Says nothing; the tagline does the real work |
| Fake dashboard card (₹12,480, 27 bills) | Hero right column | Looks like a UI kit, not *our* app |
| 6 identical feature cards in a 3×2 grid | "Everything a counter needs" | No hierarchy; every feature weighs the same |
| Fade-up-on-load for everything, `float` on an image | `animate-rise*`, `animate-float` | Motion with no meaning |
| Package name `com.digicraft.yourbillbook` in the hero | Hero | Developer detail; shopkeepers don't care |
| Copy full of em-dashes and "built for X, not Y" lines | Throughout | A recognisable LLM writing rhythm |

---

## 2. What to take from mybillbook.in (patterns only)

- **Real product imagery over abstract cards.** They show actual app screens in phone/laptop
  frames. We should show *real* YourBillBook screenshots.
- **Hero bullets with one bold fact each** (checkmark + short line). Good scannability.
- **Numbered features with a matching screenshot** under each. This gives hierarchy and proof.
- **Format tabs for print templates** (thermal / A4 / A5). We can do 58 / 80 / 112 mm thermal tabs.
- **Shop-type pills** (kirana, medical, hardware, stationery…). They're cheap to build and make visitors feel seen.
- **Strong closing CTA + FAQ + contact block** with WhatsApp / email.
- **Local language in labels** (they use Hindi-derived terms). We already have Hindi in-app.

**Do NOT copy:** their award/press badge rows, "X lakh businesses" claims, testimonial
metrics, demo-booking flow, mega-menu, or GST-compliance focus. We have none of that yet,
and fake social proof is worse than none (and risky for Play listing trust).

---

## 3. Visual direction

**Concept: "the counter."** Warm, tactile, a bit hand-made. Think thermal paper, a steel
cash tray, a notebook khata, green UPI QR stand. Not glassmorphism and glows.

- **Palette:** keep the brand greens from the logo (`#0b5d2a` → `#7ed321`). Add a warm
  paper off-white (`#fbf8f1`), a receipt grey, and a single accent for "due/bakaya" (marigold/haldi).
  Drop the StoreMitr orange from YourBillBook sections except the StoreMitr block.
- **Type:** Fraunces + Manrope is fine, but use Fraunces only for big moments. Add a monospace
  (e.g. JetBrains Mono / IBM Plex Mono) for receipt and amount UI. That alone sells "billing".
  Add a Devanagari-capable face (Noto Sans Devanagari / Mukta) for Hindi bits.
- **Texture:** subtle paper grain, dashed "tear" edges on receipt elements, perforation dots.
  Replace the grid wash.
- **Icons:** one consistent custom SVG set (2px stroke, rounded) for sale, stock, khata,
  print, offline and pay-once. Draw them or adapt from Lucide/Phosphor and customise.

---

## 4. Hero vector illustration

A custom **inline SVG** (not a PNG) so parts can animate independently:

> A small shop counter. A phone on a stand shows the bill screen. A Bluetooth thermal
> printer sits beside it. A UPI QR stand, a few jars (dal, biscuits), a khata notebook.
> The wifi signal above has a slash through it, and nothing is broken.

Animated beats (CSS/SVG, loop once then idle):
1. Items "drop" onto the bill, and the total ticks up (monospace digits roll).
2. The printer feeds a receipt that curls out, with a UPI QR at the bottom.
3. The wifi icon flips to airplane mode ✈, and a small "Still works" stamp lands on the receipt.

How to make it:
- Sketch in Figma/Illustrator → export clean SVG (named groups: `#phone`, `#printer`, `#receipt`).
- Or commission a freelancer (a 1-scene SVG is cheap) with the brief above.
- Avoid stock packs (unDraw/Storyset look). They're the other big generic tell.
- Keep it under ~40 KB, and set `role="img"` with an `aria-label`.

---

## 5. Interactive sections (the "creative" part)

Ordered by impact vs effort.

### A. Try-a-bill demo (high impact, medium effort) ⭐
A mini billing counter on the landing page. Tap product chips (Parle-G ₹10, Tata Salt ₹28,
Amul Milk ₹33…) → line items appear → total updates → pick Cash / UPI / Khata →
**Print** → a receipt animates out (58 mm width, monospace, dashed edges, QR).
- Client component, no backend, pure state.
- A "Hindi" toggle switches labels (बिल, कुल, बकाया) to show the in-app Hindi support.

### B. Offline switch (high impact, low effort)
A toggle: "Turn internet off". Two side-by-side phone frames:
- "Cloud app": spinner, "Reconnecting…"
- "YourBillBook": keeps adding sales.
Make the cloud side a generic app. Don't name or mock a real competitor.

### C. Pay-once vs subscription slider (medium impact, low effort)
A "How many years will you use it?" slider (1–5) with a bar chart: YourBillBook flat
price vs a typical yearly subscription.
- **Needs real numbers.** Fill in our actual Play price and a sourced typical subscription
  range before shipping. Don't guess.

### D. Khata notebook (medium impact, medium effort)
A notebook-page UI with customers' bakaya. Click "Collect ₹500", and the line gets a hand-drawn
strike-through and the balance updates. Shows the Khata feature without a paragraph.

### E. Receipt size tabs (low effort)
Tabs for 58 / 80 / 112 mm. The receipt preview resizes and reflows. Borrowed pattern, our content.

### F. Shop-type pills (low effort)
Kirana · Medical · Stationery · Hardware · Sweets · Mobile accessories. Clicking one swaps the
demo's product chips (A) to that shop's items. This ties two sections together.

---

## 6. Motion rules

Motion should *explain*, not decorate.
- Remove global fade-up-on-load and the infinite `float` on the StoreMitr image.
- Scroll-triggered reveals only where something *happens* (receipt prints, total counts up).
- Library: CSS + `IntersectionObserver` first. Add [`motion`](https://motion.dev) only if
  the demo needs layout animations (line items reordering). Pin an exact version.
- Durations of 150–300 ms for UI and up to 1.2 s for the hero story. Use ease-out, no bouncy springs.
- Honour `prefers-reduced-motion`: show the end state and skip the animation.
- Budget: no animation should block LCP. Keep the hero SVG inline and the JS for demos lazy/client-only.

---

## 7. Copy pass

- H1 should be the promise, not the name. Draft: **"Billing that works even when the internet doesn't."**
  The brand name goes in the header logo, which is enough.
- Hero bullets (one bold fact each): **No internet needed** · **Pay once, no subscription** ·
  **Prints on 58/80/112 mm Bluetooth printers**.
- Write like a shopkeeper talks: "udhaar", "bakaya", "rush hour", "galla". Use Hinglish sparingly.
- Cut em-dashes and the "X — not Y" constructions. Use short sentences.
- Move the package name to the footer or support page.

---

## 8. Proof (only real things)

- Real app screenshots (export from a device with demo data) in a clean phone frame.
- A short screen recording (10–15 s, muted, looping WebM/MP4) of a real sale + print.
- A photo of an actual thermal receipt printed by the app. Very convincing, costs nothing.
- Play Store rating/reviews **only once they exist**. Pull them in, don't invent them.
- FAQ: "What if my phone breaks?", "Does it need GST?", "Can two phones share data?" (→ StoreMitr), "Is my data uploaded anywhere?"

---

## 9. Execution order

| Phase | Work | Size |
|---|---|---|
| 1. Clean-up | Remove glow/grid/glyph icons, global fade-ups, package name in hero; copy pass (§7) | ½ day |
| 2. Foundations | Palette tokens, mono + Devanagari fonts, paper texture, custom SVG icon set | 1 day |
| 3. Hero | Vector illustration + 3-beat animation; new H1 + bullets | 1–2 days (+ illustration time) |
| 4. Try-a-bill demo | Section A + Hindi toggle + receipt animation | 1–2 days |
| 5. Offline switch + receipt tabs + shop pills | Sections B, E, F | 1 day |
| 6. Proof | Real screenshots, screen recording, receipt photo, FAQ | 1 day |
| 7. Pay-once slider, Khata notebook | Sections C, D (after we have real prices) | 1 day |
| 8. QA | Mobile (360 px), reduced motion, Lighthouse ≥ 90, keyboard nav on demos | ½ day |

Suggested file layout:
```
src/components/hero/CounterIllustration.tsx   # inline SVG + animation classes
src/components/demo/TryABill.tsx              # "use client"
src/components/demo/Receipt.tsx
src/components/demo/OfflineSwitch.tsx
src/components/icons/*.tsx                    # custom icon set
src/content/demo-products.ts                  # products per shop type
```

---

## 10. Open questions

- [ ] Actual Play Store price (needed for §5C and hero bullet).
- [ ] Who draws the hero illustration: in-house in Figma, or a freelancer?
- [ ] Do we have a device with clean demo data for screenshots and recording?
- [ ] Should the site itself get a Hindi version, or only the Hindi toggle in the demo?
- [ ] Keep StoreMitr upsell on the landing page, or move it to /features?
