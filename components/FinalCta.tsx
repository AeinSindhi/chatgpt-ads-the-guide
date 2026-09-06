import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-medium leading-[1.15] text-ivory text-balance sm:text-4xl">
          Start building your ChatGPT Ads knowledge today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ivory/70">
          Get the practical guide that takes you from understanding the
          platform to planning, launching, and optimizing your first
          campaign.
        </p>
        <div className="mt-9 flex justify-center">
          <CtaButton className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-9 py-4 font-body text-[0.95rem] font-medium tracking-wide text-ink transition-colors hover:bg-ivory" />
        </div>
      </div>
    </section>
  );
}
