"use client";

import { useState } from "react";
import Link from "next/link";
import { EBOOK_DOWNLOAD_URL, downloadUrlConfigured } from "@/lib/config";

export default function ThankYouPage() {
  const [notice, setNotice] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    if (!downloadUrlConfigured) {
      e.preventDefault();
      setNotice(true);
      return;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 py-20">
      <div className="w-full max-w-lg border border-line bg-ivory p-10 text-center sm:p-14">
        <p className="font-body text-[0.68rem] font-medium uppercase tracking-[0.1em] text-gold-deep">
          Order confirmed
        </p>

        <h1 className="mt-4 font-display text-3xl font-medium text-ink text-balance">
          Thank you for your purchase
        </h1>

        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft/80">
          Your copy of <em className="not-italic font-medium">ChatGPT Ads:
          The Complete Beginner-to-Launch Guide</em> is ready. Use the button
          below to download your PDF.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <a
            href={downloadUrlConfigured ? EBOOK_DOWNLOAD_URL : undefined}
            onClick={handleDownload}
            aria-disabled={!downloadUrlConfigured}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 font-body text-[0.95rem] font-medium tracking-wide text-ivory transition-colors hover:bg-gold-deep"
          >
            Download your ebook
          </a>
          {notice && (
            <p role="status" className="max-w-xs text-sm text-ink-soft/70">
              The download link isn&apos;t connected yet. Add your ebook URL
              to enable this button.
            </p>
          )}
        </div>

        <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-ink-soft/60">
          We recommend saving the PDF somewhere you&apos;ll be able to find
          it later — a cloud drive or your device&apos;s downloads folder
          both work well.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium text-gold-deep underline underline-offset-4"
        >
          Back to the sales page
        </Link>
      </div>
    </main>
  );
}
