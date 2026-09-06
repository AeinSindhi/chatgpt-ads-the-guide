import CtaButton from "./CtaButton";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/97 p-3 backdrop-blur sm:hidden">
      <CtaButton className="flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3.5 font-body text-sm font-medium text-ivory transition-colors hover:bg-gold-deep" />
    </div>
  );
}
