// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH — replace these two placeholders before going live.
// ---------------------------------------------------------------------------

// 1. Your payment gateway checkout URL (Stripe Payment Link, Gumroad, Lemon
//    Squeezy, Paddle, etc.). Every "Get This Ebook" button reads from here.
export const PAYMENT_URL = "https://rzp.io/rzp/chatgpt-ads-the-guide";

// 2. The direct URL to the ebook PDF (or a page that lets the buyer download
//    it). Used only on /thank-you, which your payment gateway should use as
//    its post-purchase redirect.
export const EBOOK_DOWNLOAD_URL = "/chatgpt-ads-the-guide/downloads/chatgpt-ads-guide.pdf"

// Simple helpers so every button behaves consistently if a placeholder is
// still in place — no broken links, no fake success states.
export const isConfigured = (url: string) => Boolean(url) && !url.includes("PASTE_YOUR");

export const paymentUrlConfigured = isConfigured(PAYMENT_URL);
export const downloadUrlConfigured = isConfigured(EBOOK_DOWNLOAD_URL);
