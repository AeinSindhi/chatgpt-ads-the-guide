const items = [
  {
    n: "01",
    title: "Understand ChatGPT Ads",
    body: "How sponsored cards work, what \u201Canswer independence\u201D means, and how the platform actually compares to Google and Meta.",
  },
  {
    n: "02",
    title: "Build a campaign strategy",
    body: "Set realistic goals and KPIs, forecast a test budget without demand data, and map your audience's real conversational language.",
  },
  {
    n: "03",
    title: "Set up Ads Manager",
    body: "Account verification, billing, account name and logo — including the two silent settings that block ads from ever serving.",
  },
  {
    n: "04",
    title: "Launch your first campaign",
    body: "Campaign structure, writing context hints that convert, proof-led ad copy, and the compliance checks to run before launch.",
  },
  {
    n: "05",
    title: "Measure and optimize",
    body: "Install the OpenAI Pixel correctly, read your reports with realistic expectations, and run the 30/60/90-day optimization cycle.",
  },
  {
    n: "06",
    title: "Scale with better decisions",
    body: "Horizontal vs. vertical scaling, a disciplined testing calendar, and how this channel fits into a broader media mix.",
  },
];

export default function Learn() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-lg">
        <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
          What you&apos;ll learn
        </h2>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft/80">
          A curriculum built for people who&apos;ve never touched paid ads —
          and equally useful as a fast, accurate translation for people who
          have.
        </p>
      </div>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.n} className="border-t border-line pt-5">
            <span className="font-display text-sm text-gold-deep">{item.n}</span>
            <h3 className="mt-2 font-display text-lg font-medium text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft/75">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
