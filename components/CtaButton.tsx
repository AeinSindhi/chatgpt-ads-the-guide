"use client";

import { useState } from "react";
import { PAYMENT_URL, paymentUrlConfigured } from "@/lib/config";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function CtaButton({ className = "", children }: Props) {
  const [notice, setNotice] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!paymentUrlConfigured) {
      e.preventDefault();
      setNotice(true);
      window.setTimeout(() => setNotice(false), 4000);
      return;
    }
    window.location.href = PAYMENT_URL;
  };

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        aria-disabled={!paymentUrlConfigured}
        className={
          className ||
          "inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 font-body text-[0.95rem] font-medium tracking-wide text-ivory transition-colors hover:bg-gold-deep"
        }
      >
        {children || "Get This Ebook"}
      </button>
      {notice && (
        <p role="status" className="max-w-xs text-center text-xs text-ink-soft/70">
          Checkout isn&apos;t connected yet. Add your payment link to start
          taking orders.
        </p>
      )}
    </div>
  );
}
