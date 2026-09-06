const reasons = [
  {
    title: "Structured learning path",
    body: "Context first, then strategy, then hands-on execution, then measurement and scaling — organized the way you'd actually want to learn it.",
  },
  {
    title: "Beginner-friendly explanations",
    body: "Every step assumes zero prior knowledge, without talking down to readers who already run Google or Meta campaigns.",
  },
  {
    title: "Strategy before execution",
    body: "Goals, budget, and audience thinking come before you ever open Ads Manager — so setup follows a plan instead of guesswork.",
  },
  {
    title: "Practical setup and launch guidance",
    body: "A literal, step-by-step walkthrough of the account setup and campaign build, including the details that silently block ads from serving.",
  },
  {
    title: "Honest about pros and cons",
    body: "A real assessment of where this channel is a strong fit today, and where Google, Meta, or simply waiting is the better call.",
  },
  {
    title: "Checklists and reference material",
    body: "A master launch checklist, a glossary, and a context hint and ad copy swipe file you'll return to at every stage.",
  },
];

export default function WhyThisGuide() {
  return (
    <section className="border-y border-line bg-parchment/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-lg">
          <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
            Why this guide
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title}>
              <h3 className="font-display text-lg font-medium text-ink">
                {r.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft/75">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
