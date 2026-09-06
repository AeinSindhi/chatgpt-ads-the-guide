"use client";

import { useEffect, useState } from "react";
import CtaButton from "./CtaButton";

function getTimeUntilMidnight() {
  const now = new Date();
  const tomorrow = new Date(now);

  tomorrow.setHours(24, 0, 0, 0);

  return Math.max(0, tomorrow.getTime() - now.getTime());
}

function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const time = formatTime(timeLeft);

  return (
    <section className="border-y border-line bg-parchment/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-md border border-line bg-ivory p-8 text-center sm:p-10">
          <p className="font-body text-[0.68rem] font-medium uppercase tracking-[0.1em] text-gold-deep">
            Limited-time launch offer
          </p>

          <h2 className="mt-2 font-display text-2xl font-medium text-ink">
            The Complete Beginner-to-Launch Guide
          </h2>

          <div className="mt-6 rounded-sm border border-gold-deep/20 bg-parchment/50 px-4 py-4">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft/70">
              Offer ends in
            </p>

            <div
              className="mt-2 flex items-center justify-center gap-2 font-display text-3xl font-medium tracking-wide text-ink"
              aria-live="polite"
              aria-label={`${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds remaining`}
            >
              <span>{time.hours}</span>
              <span className="text-gold-deep">:</span>
              <span>{time.minutes}</span>
              <span className="text-gold-deep">:</span>
              <span>{time.seconds}</span>
            </div>
          </div>

          <p className="mt-6 font-display text-4xl font-medium text-ink">
            ₹299{" "}
            <span className="text-2xl text-ink/50 line-through">₹799</span>
          </p>

          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/75">
            One-time purchase. The complete guide, delivered as a PDF you
            keep.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <CtaButton />

            <p className="text-sm text-ink-soft/60">
              Digital product · Access after payment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}