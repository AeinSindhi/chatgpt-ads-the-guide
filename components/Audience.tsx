const groups = [
  {
    title: "Total beginners",
    body: "Every step assumes zero prior knowledge — you've never bought a digital ad and this guide doesn't assume you have.",
  },
  {
    title: "Google Ads & Meta Ads marketers",
    body: "A fast, accurate translation of skills you already have, plus an honest chapter-by-chapter comparison of where the platforms diverge.",
  },
  {
    title: "Founders & marketing leads",
    body: "Enough context on cost structure, reach, and realistic pros and cons to decide whether this channel deserves a place in next year's budget.",
  },
  {
    title: "Agencies & freelancers",
    body: "A structured internal reference for building a ChatGPT Ads service offering, including notes on managing multiple client accounts.",
  },
];

export default function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-lg">
        <h2 className="font-display text-3xl font-medium leading-[1.15] text-ink text-balance">
          Who this guide is for
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="border border-line bg-ivory p-7"
          >
            <h3 className="font-display text-lg font-medium text-ink">
              {g.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft/75">
              {g.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
