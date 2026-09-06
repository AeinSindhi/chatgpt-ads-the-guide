import CtaButton from "./CtaButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-[1.05rem] font-medium text-ink">
          ChatGPT Ads <span className="text-ink/40">— The Guide</span>
        </a>
        <CtaButton className="hidden items-center justify-center rounded-sm bg-ink px-5 py-2.5 font-body text-sm font-medium text-ivory transition-colors hover:bg-gold-deep sm:inline-flex">
          Get This Ebook
        </CtaButton>
      </div>
    </header>
  );
}
