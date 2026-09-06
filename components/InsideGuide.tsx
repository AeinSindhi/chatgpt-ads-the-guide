"use client";

import { useState } from "react";

type Part = {
  label: string;
  title: string;
  span: string;
  summary: string;
  chapters: string[];
};

const parts: Part[] = [
  {
    label: "Part 1",
    title: "Foundations",
    span: "Ch. 1–9",
    summary:
      "What ChatGPT Ads are, how they came to exist, how they work mechanically, and how they stack up against Google Ads, Meta Ads, and other AI platforms.",
    chapters: [
      "Introduction & How to Use This Guide",
      "The Rise of Conversational AI Advertising",
      "A Timeline: How ChatGPT Ads Came to Be",
      "How ChatGPT Ads Actually Work",
      "ChatGPT Ads vs. Google Ads: The Full Comparison",
      "ChatGPT Ads vs. Meta Ads: The Full Comparison",
      "ChatGPT Ads vs. Other AI Platforms",
      "Pricing and Cost Structure, In Depth",
      "Pros and Cons: Is This Right for You?",
    ],
  },
  {
    label: "Part 2",
    title: "Strategy",
    span: "Ch. 10–17",
    summary:
      "Goals, budget forecasting, audience research in a conversational context, and playbooks tailored to specific industries.",
    chapters: [
      "Setting Goals and KPIs",
      "Budget Planning and Forecasting",
      "Understanding Your Audience in a Conversational Context",
      "Creative and Brand Strategy",
      "Industry Playbook: E-commerce and Retail",
      "Industry Playbook: SaaS and B2B",
      "Industry Playbook: Local & Professional Services",
      "Industry Playbook: Travel, Education & Finance",
    ],
  },
  {
    label: "Part 3",
    title: "Setup & Launch",
    span: "Ch. 18–24",
    summary:
      "A literal, step-by-step walkthrough of preparing for, setting up, and launching your first campaign in OpenAI Ads Manager.",
    chapters: [
      "Before You Begin: Preparation Checklist",
      "Setting Up Your OpenAI Ads Manager Account",
      "Campaign Structure, Explained in Depth",
      "Building and Launching Your First Campaign, Step by Step",
      "Writing Context Hints That Convert",
      "Ad Copy and Creative Best Practices (With a Swipe File)",
      "Compliance, Policy, and Brand Safety",
    ],
  },
  {
    label: "Part 4",
    title: "Measure, Optimize, Scale",
    span: "Ch. 25–29",
    summary:
      "How to track conversions, read your reports, and run a disciplined 30/60/90-day optimization cycle.",
    chapters: [
      "Measurement and Conversion Tracking Setup",
      "Reading Your Reports and Dashboards",
      "The 30/60/90-Day Optimization Playbook",
      "Scaling and Advanced Tactics",
      "Common Mistakes and Troubleshooting",
    ],
  },
  {
    label: "Part 5",
    title: "The Bigger Picture",
    span: "Ch. 30–32",
    summary:
      "Privacy and regulatory context, where the platform is heading, and how to think about it strategically over the next few years.",
    chapters: [
      "Privacy, Trust, and the Regulatory Landscape",
      "The Future of Conversational AI Advertising",
      "Conclusion and Next Steps",
    ],
  },
  {
    label: "Appendices",
    title: "Reference material",
    span: "A–G",
    summary:
      "A glossary, a master launch checklist, a ready-to-use context hint and ad copy swipe file, an FAQ, resources, a vendor landscape map, and a sample 90-day campaign calendar.",
    chapters: [
      "A — Glossary of Terms",
      "B — Master Launch Checklist",
      "C — Context Hint & Ad Copy Swipe File",
      "D — Frequently Asked Questions",
      "E — Resources & Further Reading",
      "F — Tools & Vendor Landscape",
      "G — Sample 90-Day Campaign Calendar",
    ],
  },
];

export default function InsideGuide() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-y border-line bg-parchment/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-lg">
          <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
            Inside the guide
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft/80">
            32 chapters organized into five parts, plus a full set of
            reference appendices. This is a complete resource, not a short
            blog post.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {parts.map((part, i) => {
            const expanded = open === i;
            return (
              <div key={part.label}>
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : i)}
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="w-20 shrink-0 font-body text-xs font-medium uppercase tracking-[0.1em] text-gold-deep">
                      {part.label}
                    </span>
                    <span className="font-display text-xl font-medium text-ink">
                      {part.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="hidden text-sm text-ink-soft/60 sm:inline">
                      {part.span}
                    </span>
                    <span
                      aria-hidden
                      className={`text-lg text-ink-soft/60 transition-transform ${
                        expanded ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                {expanded && (
                  <div className="grid gap-8 pb-8 pl-0 sm:grid-cols-[0.9fr_1.4fr] sm:pl-20">
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft/75">
                      {part.summary}
                    </p>
                    <ol className="space-y-2 text-[0.92rem] text-ink-soft/85">
                      {part.chapters.map((ch, idx) => (
                        <li key={ch} className="flex gap-3">
                          <span className="text-ink-soft/40">
                            {part.label === "Appendices" ? "" : idx + 1}
                          </span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
