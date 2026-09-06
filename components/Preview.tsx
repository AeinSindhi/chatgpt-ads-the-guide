"use client";

import { useState } from "react";
import CoverMockup from "./CoverMockup";

const pages = [
  {
    tag: "Table of Contents",
    heading: "Five parts, thirty-two chapters",
    body: [
      "PART 1 — FOUNDATIONS · Ch. 1–9",
      "PART 2 — STRATEGY · Ch. 10–17",
      "PART 3 — SETUP & LAUNCH · Ch. 18–24",
      "PART 4 — MEASURE, OPTIMIZE, SCALE · Ch. 25–29",
      "PART 5 — THE BIGGER PICTURE · Ch. 30–32",
      "APPENDICES · A–G",
    ],
  },
  {
    tag: "Chapter 4 — How ChatGPT Ads Actually Work",
    heading: "Weak vs. strong context hints",
    body: [
      "Weak (keyword-style): \u201CCRM sales software best tools comparison\u201D",
      "Strong (scenario-style): \u201Clooking for a CRM to help a small remote sales team track deals without a steep learning curve\u201D",
      "The system reads intent, not word fragments. Writing context hints like a keyword list is the single most common targeting mistake beginners make on this platform.",
    ],
  },
  {
    tag: "Chapter 22 — Writing Context Hints That Convert",
    heading: "A five-step process",
    body: [
      "1. Start from real language, not internal jargon.",
      "2. Include the situation, not just the need.",
      "3. Write several distinct hints per ad group, not one long one.",
      "4. Avoid keyword stacking.",
      "5. Revisit and refine after real data comes in.",
    ],
  },
];

export default function Preview() {
  const [active, setActive] = useState<number | null>(null);
  const openPage = pages[active ?? 0];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-lg">
        <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
          Preview the guide
        </h2>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft/80">
          A few real pages, so you can see the format and the level of
          specificity before you buy.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <CoverMockup />
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
          {pages.map((page, i) => (
            <button
              key={page.tag}
              type="button"
              onClick={() => setActive(i)}
              className="flex h-full flex-col border border-line bg-ivory p-6 text-left transition-colors hover:border-gold-deep"
            >
              <span className="font-body text-[0.68rem] font-medium uppercase tracking-[0.1em] text-gold-deep">
                {page.tag}
              </span>
              <span className="mt-2 font-display text-base font-medium text-ink">
                {page.heading}
              </span>
              <span className="mt-3 text-sm text-ink-soft/60">
                Tap to read this page
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openPage.heading}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto border border-line bg-ivory p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 text-xl text-ink-soft/60 hover:text-ink"
            >
              ×
            </button>
            <span className="font-body text-[0.68rem] font-medium uppercase tracking-[0.1em] text-gold-deep">
              {openPage.tag}
            </span>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink">
              {openPage.heading}
            </h3>
            <div className="mt-5 space-y-3 border-t border-line pt-5 text-[0.95rem] leading-relaxed text-ink-soft/85">
              {openPage.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
