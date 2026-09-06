const steps = [
  "Understand the platform and how it differs from Google and Meta",
  "Plan your campaign — goals, KPIs, and a realistic test budget",
  "Prepare your assets — landing pages, creative, and context hints",
  "Set up OpenAI Ads Manager, billing, and account verification",
  "Launch your first campaign with tracking installed from day one",
  "Measure performance with realistic expectations about attribution",
  "Optimize and scale using the 30/60/90-day playbook",
];

export default function Journey() {
  return (
    <section className="border-y border-line bg-parchment/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="max-w-sm">
            <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
              From confused to launched
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft/80">
              The guide follows one continuous path — each part picks up
              exactly where the last one leaves off.
            </p>
          </div>

          <ol className="space-y-0">
            {steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-6 border-t border-line py-5 last:border-b"
              >
                <span className="font-display text-base text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1rem] leading-relaxed text-ink-soft/85">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
