# ChatGPT Ads — Ebook Sales Site

A two-page sales site for **ChatGPT Ads: The Complete Beginner-to-Launch
Guide**, built with Next.js (App Router), React, TypeScript, and Tailwind
CSS. All copy, chapter titles, and the part/appendix structure are pulled
directly from the actual ebook PDF — nothing about the product itself is
invented.

## Pages

- `/` — the sales page (hero, curriculum, chapter breakdown, audience,
  preview, pricing, FAQ, final CTA)
- `/thank-you` — the post-purchase page. Point your payment gateway's
  redirect URL here.

## Before you launch: two placeholders to fill in

Everything routes through one file: **`lib/config.ts`**

```ts
export const PAYMENT_URL = "PASTE_YOUR_PAYMENT_GATEWAY_URL_HERE";
export const EBOOK_DOWNLOAD_URL = "PASTE_YOUR_EBOOK_DOWNLOAD_URL_HERE";
```

- `PAYMENT_URL` — every "Get This Ebook" button on the sales page and the
  sticky mobile bar sends the visitor here. Point it at your Stripe Payment
  Link, Gumroad, Lemon Squeezy, Paddle checkout, or similar.
- `EBOOK_DOWNLOAD_URL` — the "Download your ebook" button on `/thank-you`
  uses this. Point it at the actual PDF (or a page that serves it).

Until you fill these in, the buttons detect the placeholder and show a
short inline message instead of navigating anywhere broken — no fake
checkout, no fake success state.

There are also a handful of plain-text placeholders you should fill in with
your own business details before launch:

- `components/Footer.tsx` — brand description, contact email, privacy /
  terms / refund policy links, copyright line
- `components/Faq.tsx` — exact delivery format, access process, update
  policy, and refund policy answers
- `components/Pricing.tsx` — your actual price
- `app/thank-you/page.tsx` — support contact email

Search the project for `[Add` to find every remaining placeholder at once.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Building for production

```bash
npm run build
npm run start
```

This project deploys cleanly to Vercel, Netlify, or any host that supports
Next.js. If you're using Vercel, just connect the repository — no extra
configuration is required.

## Project structure

```
app/
  layout.tsx        — fonts, metadata
  page.tsx           — assembles the sales page from components/
  thank-you/page.tsx — post-purchase page
  globals.css
components/          — one file per section (Hero, Learn, InsideGuide, …)
lib/config.ts        — PAYMENT_URL and EBOOK_DOWNLOAD_URL
```

## Notes on content accuracy

- Chapter titles, part groupings, and appendix list are copied from the
  ebook's actual table of contents (32 chapters, 5 parts, appendices A–G).
- The "Preview the guide" section shows real excerpts from Chapters 4 and
  22 and the real table of contents — not placeholder screenshots.
- No testimonials, review counts, customer numbers, or results are used
  anywhere, since none exist for this product yet.
- Price, refund policy, delivery format, and contact details are left as
  clearly marked placeholders for you to fill in — they weren't stated in
  the source material.
