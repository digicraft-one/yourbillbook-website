"use client";

import { useState } from "react";

const sizes = [
  { mm: 58, width: "58%" },
  { mm: 80, width: "78%" },
  { mm: 112, width: "100%" },
] as const;

export function ReceiptWidths() {
  const [i, setI] = useState(0);
  const s = sizes[i];

  return (
    <div>
      <div role="tablist" aria-label="Paper width" className="flex gap-1.5">
        {sizes.map((o, idx) => (
          <button
            key={o.mm}
            type="button"
            role="tab"
            aria-selected={i === idx}
            onClick={() => setI(idx)}
            className={`rounded-lg px-3 py-1.5 font-mono text-sm font-bold transition ${
              i === idx
                ? "bg-[var(--ybb-ink)] text-white"
                : "bg-white text-[var(--ybb-muted)] ring-1 ring-[var(--ybb-border)] hover:text-[var(--ybb-ink)]"
            }`}
          >
            {o.mm} mm
          </button>
        ))}
      </div>
      <div className="mt-5 flex h-[184px] items-start justify-center overflow-hidden rounded-xl bg-[var(--ybb-paper-deep)] pt-4">
        <div
          className="zigzag-bottom bg-[var(--ybb-receipt)] px-3 pt-3 font-mono text-[10px] leading-snug text-black/70 shadow-md transition-[width] duration-500 ease-out"
          style={{ width: s.width }}
        >
          <p className="text-center font-bold">SHARMA GENERAL STORE</p>
          <p className="text-center text-black/45">INV-0024</p>
          <div className="dashed-rule my-1.5" />
          <p className="flex justify-between"><span>Toor Dal ×2</span><span>320</span></p>
          <p className="flex justify-between"><span>Basmati ×1</span><span>425</span></p>
          <p className="flex justify-between"><span>Sugar ×2</span><span>92</span></p>
          <div className="dashed-rule my-1.5" />
          <p className="flex justify-between font-bold"><span>TOTAL</span><span>₹1,091</span></p>
          <p className="mt-1 text-center text-black/40">{s.mm} mm paper</p>
        </div>
      </div>
    </div>
  );
}
