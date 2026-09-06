const included = [
  "The full ebook PDF — all 32 chapters",
  "All five parts: Foundations, Strategy, Setup & Launch, Measure/Optimize/Scale, The Bigger Picture",
  "Practical frameworks for goals, budget, and audience mapping",
  "Appendix A — Glossary of Terms",
  "Appendix B — Master Launch Checklist",
  "Appendix C — Context Hint & Ad Copy Swipe File",
  "Appendix D — Frequently Asked Questions",
  "Appendix E — Resources & Further Reading",
  "Appendix F — Tools & Vendor Landscape",
  "Appendix G — Sample 90-Day Campaign Calendar",
];

export default function WhatYouGet() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="max-w-sm">
          <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
            What you get
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft/80">
            One purchase, one file, everything included — nothing held back
            for a future upsell.
          </p>
        </div>

        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-t border-line pt-4 text-[0.95rem] leading-relaxed text-ink-soft/85"
            >
              <span aria-hidden className="text-gold-deep">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
