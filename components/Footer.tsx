export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-medium text-ink">
              ChatGPT Ads: The Complete Beginner-to-Launch Guide
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft/65">
              {/* Replace with your own short brand description. */}
              [Add a short brand or author description here.]
            </p>
          </div>

          <div>
            <p className="font-body text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ink-soft/50">
              Contact
            </p>
            <p className="mt-3 text-sm text-ink-soft/70">
              {/* Replace with your support contact. */}
              [Add a support/contact email here.]
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-body text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ink-soft/50">
              Policies
            </p>
            <p className="text-sm text-ink-soft/70">
              [Privacy Policy link]
            </p>
            <p className="text-sm text-ink-soft/70">
              [Terms &amp; Conditions link]
            </p>
            <p className="text-sm text-ink-soft/70">
              [Refund Policy link]
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-sm text-ink-soft/50">
          {/* Replace with your own copyright line. */}
          [© Year, your name or business]
        </div>
      </div>
    </footer>
  );
}
