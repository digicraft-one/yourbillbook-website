"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";

const steps = [
  {
    time: "9:00 am",
    title: "Open the shutter, open the app.",
    body: "Today's sales, bills, cash, UPI, card and khata on one screen. Switch to 7 days, 30 days or any range.",
    screen: "home",
    alt: "Home screen with today's sales of ₹8,640 across 23 bills",
  },
  {
    time: "11:30 am",
    title: "Rush hour. Tap, tap, tap.",
    body: "Every product is one tap away, with photo, price and stock left. Search, scan a barcode, or copy the last bill.",
    screen: "sale",
    alt: "Sale screen with nine grocery products and a ₹1,091 cart",
  },
  {
    time: "11:31 am",
    title: "Cash, UPI, card, khata or split.",
    body: "Add the customer's name and number only if you want to. Confirm never waits for the printer.",
    screen: "checkout",
    alt: "Checkout sheet showing ₹1,091 paid by UPI",
  },
  {
    time: "11:31 am",
    title: "Print it, or share it.",
    body: "Bluetooth thermal printers at 58, 80 or 112 mm, with your UPI QR on the receipt. Or share a PDF.",
    screen: "receipt",
    alt: "Receipt INV-0024 with five line items and a total of ₹1,091",
  },
  {
    time: "3:55 pm",
    title: "Low stock shows up before the shelf is empty.",
    body: "Mustard oil is down to 4. It's flagged in inventory so you reorder in time.",
    screen: "inventory",
    alt: "Inventory grid with mustard oil marked as low stock",
  },
  {
    time: "4:00 pm",
    title: "Delivery came in. Add 20.",
    body: "Change stock by a number, or set an exact count after a stock-take. Every change is kept in history.",
    screen: "stock",
    alt: "Stock adjustment sheet adding 20 bottles of mustard oil",
  },
  {
    time: "9:30 pm",
    title: "Shutter down. Back up.",
    body: "Export a backup, set an app PIN, set up printers, or switch the labels to हिंदी. It's all under More.",
    screen: "more",
    alt: "More screen listing Khata, Expenses, Store details, Printers, Data, Security and Language",
  },
] as const;

export function DayAtCounter() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: text scrolls, phone stays */}
      <div className="hidden gap-16 lg:grid lg:grid-cols-[1fr_340px]">
        <ol className="relative">
          <span className="absolute bottom-10 left-[5px] top-10 w-px bg-[var(--ybb-border-strong)]" />
          {steps.map((s, i) => (
            <li
              key={s.screen}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className="relative flex min-h-[50vh] flex-col justify-center pl-10"
            >
              <span
                className={`absolute left-0 top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full border-2 transition ${
                  active === i
                    ? "scale-125 border-[var(--ybb-primary)] bg-[var(--ybb-primary)]"
                    : "border-[var(--ybb-border-strong)] bg-[var(--ybb-paper)]"
                }`}
              />
              <div className={`transition duration-500 ${active === i ? "opacity-100" : "opacity-35"}`}>
                <p className="font-mono text-sm font-bold text-[var(--ybb-primary)]">{s.time}</p>
                <h3 className="mt-2 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ybb-ink)]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--ybb-muted)]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="relative">
          <div className="sticky top-[calc(50vh-330px)]">
            <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-[var(--ybb-muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--ybb-primary)]" />
              <span key={active} className="line-in font-bold text-[var(--ybb-ink)]">
                {steps[active].time}
              </span>
              <span>· {active + 1}/{steps.length}</span>
            </div>
            <PhoneFrame className="mx-auto w-[300px]">
              {steps.map((s, i) => (
                <Image
                  key={s.screen}
                  src={`/img/screens/${s.screen}.webp`}
                  alt={s.alt}
                  fill
                  sizes="300px"
                  className={`screen-fade object-cover ${
                    active === i ? "opacity-100" : "translate-y-3 opacity-0"
                  }`}
                />
              ))}
            </PhoneFrame>
          </div>
        </div>
      </div>

      {/* Mobile: swipe through the day */}
      <ol className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:hidden">
        {steps.map((s) => (
          <li key={s.screen} className="w-[78vw] max-w-[300px] shrink-0 snap-center">
            <PhoneFrame src={`/img/screens/${s.screen}.webp`} alt={s.alt} sizes="78vw" className="w-full" />
            <p className="mt-4 font-mono text-sm font-bold text-[var(--ybb-primary)]">{s.time}</p>
            <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-[var(--ybb-ink)]">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ybb-muted)]">{s.body}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
