import CtaButton from "./CtaButton";
import CoverMockup from "./CoverMockup";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-20">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
            The Complete Beginner-to-Launch Guide
          </p>

          <h1 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.08] text-ink text-balance sm:text-5xl">
            Understand ChatGPT Ads. Then actually launch a campaign.
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft/85">
            What ChatGPT advertising is, why it matters, how OpenAI Ads
            Manager actually works, and the exact steps to plan, set up, and
            launch your first campaign — written for people who have never
            run an ad in their life.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3">
            <CtaButton />
            <p className="text-sm text-ink-soft/60">
              Instant digital access · PDF guide · Beginner-friendly
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-line pt-6 text-sm text-ink-soft/70">
            <span className="font-medium text-ink">32 chapters</span>
            <span aria-hidden className="text-line">
              /
            </span>
            <span>Strategy · Setup &amp; Launch · Optimization</span>
          </div>
        </div>

        <CoverMockup />
      </div>
    </section>
  );
}
