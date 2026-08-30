# Growthforge — landing page

Single-page marketing site for Growthforge. All copy is taken verbatim from
[`landing-page-copy.md`](./landing-page-copy.md); the multipage copy deck in
[`site-copy/`](./site-copy) is **not** built yet.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react.
Static export-friendly — the whole page prerenders, no runtime data.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Where things live

| Path | What |
|---|---|
| `app/layout.tsx` | Fonts, metadata, the `.js` gate script |
| `app/page.tsx` | Section order |
| `app/globals.css` | Design tokens + animation layer |
| `lib/services.ts` | The 10 services, grouped into 4 pillars |
| `lib/content.ts` | All other page copy |
| `components/` | One component per section |
| `app/opengraph-image.tsx` | OG image, generated at build time |

Adding an eleventh service is one object in `lib/services.ts` — no JSX changes.

## Design notes

Palette and type follow `BUILD-AND-DEPLOY.md` §2 (`#0B0B0F` / `#16161C` /
`#FF6B2C`, Space Grotesk + Inter). The layout language — oversized tight
display type, zero-padded index numbers, uppercase micro-labels, ticker bands,
pill buttons — is drawn from the 8bitenterprise.com reference.

**Animation is deliberately CSS-only.** Every hidden starting state is gated
behind a `.js` class set on `<html>` before first paint, so if the bundle fails
to load the page renders fully visible rather than blank. `Reveal` uses an
IntersectionObserver, not a animation library. `prefers-reduced-motion` disables
all of it.

## Before you launch

- [ ] Point the two CTAs at a real Cal.com / Calendly link (currently `mailto:`)
- [ ] Set the real domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- [ ] Register `wearegrowthforge.com` or change the email in `lib/content.ts`
- [ ] Real URLs for the Instagram / LinkedIn / YouTube footer links (`#` today)
- [ ] Build `/privacy` and `/terms` from `site-copy/04-pages-legal.md` — the
      footer links to `#` until they exist
- [ ] Run Lighthouse and confirm ≥ 90 performance and accessibility
- [ ] Vercel Pro, not Hobby — Hobby is licensed for non-commercial use only
