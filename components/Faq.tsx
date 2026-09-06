"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is this ebook for?",
    a: "Total beginners who've never run a paid ad, Google Ads and Meta Ads marketers translating existing skills, founders and marketing leads evaluating the channel, and agencies building a service offering around it.",
  },
  {
    q: "Do I need prior advertising experience?",
    a: "No. Every step assumes zero prior knowledge, though experienced marketers will also get a direct, chapter-by-chapter comparison to Google and Meta.",
  },
  {
    q: "What topics are covered?",
    a: "Fundamentals and platform comparisons, strategy and industry playbooks, step-by-step Ads Manager setup and launch, measurement and optimization, and the wider privacy and regulatory picture — plus a glossary, checklists, a swipe file, and an FAQ.",
  },
  {
    q: "Is this a step-by-step setup guide?",
    a: "Yes. Part 3 walks through account setup, campaign structure, and launching your first campaign in detail, alongside the strategic and measurement chapters around it.",
  },
  {
    q: "Does it cover measurement and optimization?",
    a: "Yes. Part 4 covers conversion tracking setup, reading your reports, and a full 30/60/90-day optimization playbook.",
  },
  {
    q: "What format will I receive?",
    a: "[Add your delivery format here — e.g. a downloadable PDF.]",
  },
  {
    q: "How do I access the ebook after payment?",
    a: "[Add your delivery process here — e.g. an instant download link on the confirmation page.]",
  },
  {
    q: "Is the ebook updated as the platform changes?",
    a: "[Add your update policy here.] The guide itself notes that ChatGPT Ads is a fast-moving beta platform and recommends verifying specific numbers, dates, and workflow details against ads.openai.com and help.openai.com before spending real budget.",
  },
  {
    q: "What's your refund policy?",
    a: "[Add your refund policy here.]",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-lg">
        <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
          Frequently asked questions
        </h2>
      </div>

      <div className="max-w-2xl divide-y divide-line border-y border-line">
        {faqs.map((item, i) => {
          const expanded = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : i)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-base font-medium text-ink">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-lg text-ink-soft/60 transition-transform ${
                    expanded ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {expanded && (
                <p className="pb-5 pr-8 text-[0.95rem] leading-relaxed text-ink-soft/80">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
