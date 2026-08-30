# Growthforge — Build & Deploy Guide

Everything needed to take `landing-page-copy.md` from empty folder to a live Vercel URL you can send a client.

---

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | Vercel makes it, so deploy is zero-config |
| Language | TypeScript | Claude Code writes far fewer bugs with types |
| Styling | **Tailwind CSS** | Fastest for one-off marketing layouts |
| Components | **shadcn/ui** | Free, copy-in, no dependency lock |
| Animation | Framer Motion | Scroll reveals only — keep it restrained |
| Icons | lucide-react | Ships with shadcn |
| Booking | **Cal.com** or Calendly embed | Your main CTA is "book a call" — skip building a form |
| Host | **Vercel** | Push to GitHub, auto-deploy |

Do **not** build your own agency site in WordPress. You sell WordPress as a service; your own site should be the fast, custom thing that proves you can build it.

---

## 2. Brand direction

The name is a forge — lean into heat and metal, not another blue SaaS gradient.

```
Background      #0B0B0F   near-black
Surface         #16161C   raised cards
Border          #26262F
Text primary    #F5F5F7
Text muted      #A1A1AA
Accent (molten) #FF6B2C   orange — CTAs, highlights, underlines
Accent glow     #FFA23A   gradient partner for the accent
```

- **Fonts:** headings in a tight geometric sans (Space Grotesk or Satoshi), body in Inter.
- **Motif:** ember/spark particles or a subtle heat-glow behind the hero. One accent colour only — never two competing brights.
- **Dark theme as default.** It suits the name and makes creative work in your portfolio pop.

---

## 3. Scaffold

```bash
npx create-next-app@latest growthforge --typescript --tailwind --app --eslint
```

```bash
cd growthforge && npx shadcn@latest init
```

```bash
npm install framer-motion lucide-react
```

---

## 4. Section build order

Build in this order so you always have something deployable:

1. `components/Nav.tsx` — sticky, blurs on scroll
2. `components/Hero.tsx` — H1, subhead, two CTAs, stats strip
3. `components/Problem.tsx` — three pain cards
4. `components/Services.tsx` — **the main section**, 10 cards in 4 pillar groups
5. `components/Process.tsx` — 5 numbered steps, horizontal on desktop
6. `components/WhyUs.tsx` — 5 bullets, two-column
7. `components/Pricing.tsx` — 3 tiers, middle one highlighted
8. `components/FAQ.tsx` — shadcn Accordion
9. `components/CTA.tsx` — full-width, accent background
10. `components/Footer.tsx` — 4 columns

**Services section structure** — keep copy in a data file, not hardcoded in JSX:

```ts
// lib/services.ts
export const PILLARS = [
  { name: "Brand & Creative",  services: [ /* Brand Management, Graphic Design, Video Editing */ ] },
  { name: "Growth & Media",    services: [ /* Social Media, Paid Ads */ ] },
  { name: "Build",             services: [ /* Website Dev, WordPress */ ] },
  { name: "Systems & AI",      services: [ /* CRM, Automation, AI Agents */ ] },
]
// each service: { title, tagline, description, includes: string[], icon }
```

That way adding an eleventh service is one object, not a new component.

---

## 5. Booking + contact

**Fastest path (recommended for a showcase):** embed Cal.com. Free, no backend, no spam handling.

```bash
npm install @calcom/embed-react
```

**If you want a real contact form:** use a Next.js Route Handler at `app/api/contact/route.ts` plus [Resend](https://resend.com) for delivery. Note Resend requires verifying a sending domain before it will send from your address — so this only works *after* your domain is live. For day one, Formspree or Web3Forms needs no backend at all.

Never commit API keys. Put them in `.env.local` locally and in **Vercel → Settings → Environment Variables** for production.

---

## 6. Deploy to Vercel

### Step 1 — Git
```bash
git init && git add -A && git commit -m "Growthforge landing page"
```
Create an empty repo on GitHub, then:
```bash
git remote add origin https://github.com/YOUR-USERNAME/growthforge.git && git branch -M main && git push -u origin main
```

### Step 2 — Import
1. Go to **vercel.com/new**
2. Sign in with GitHub, authorise access to the repo
3. Select `growthforge` — Vercel auto-detects Next.js, no config needed
4. Add environment variables if you have any
5. **Deploy**

You get a live `growthforge-xxxx.vercel.app` URL in about a minute. Every `git push` to `main` redeploys automatically, and every pull request gets its own preview URL — that's the ideal way to send a client a draft without touching the live site.

### Step 3 — Custom domain
**Project → Settings → Domains → Add**. Enter your domain, then copy the **exact DNS records Vercel displays** into your registrar. Don't use record values from a blog post or from me — Vercel has changed its IPs, and the dashboard always shows the current ones. SSL is issued automatically once DNS propagates (usually minutes, up to 24h).

### ⚠️ One thing to know about pricing
Vercel's **Hobby plan is free but licensed for non-commercial use only.** A live agency site that sells services is commercial use. For a private client demo on a `.vercel.app` URL you're fine; once it's your real business site on your real domain, you should be on **Pro (~$20/month)**. Budget for it — don't get the project pulled later.

### CLI alternative
```bash
npm i -g vercel && vercel
```
Follow the prompts, then `vercel --prod` to promote. The GitHub route is better long-term because of automatic preview deployments.

---

## 7. Pre-launch checklist

- [ ] `metadata` set in `app/layout.tsx` — title and description from copy deck §0
- [ ] OG image at `app/opengraph-image.png` (1200×630) so links preview properly
- [ ] `favicon.ico` + `app/icon.png`
- [ ] Test every breakpoint — 375px, 768px, 1440px
- [ ] All CTAs actually link somewhere (booking embed or `mailto:`)
- [ ] Lighthouse ≥ 90 on Performance and Accessibility
- [ ] `next/image` used for every image — never a raw `<img>`
- [ ] `sitemap.ts` and `robots.ts` in `app/`
- [ ] Vercel Analytics enabled (`npm i @vercel/analytics`)
- [ ] Real email address, not `hello@wearegrowthforge.com`, if that domain isn't registered yet

---

## 8. Ready-to-paste prompt for Claude Code

Open this folder in VS Code, run `claude`, and paste:

> Build a Next.js 15 landing page for my agency **Growthforge** using the App Router, TypeScript, Tailwind and shadcn/ui.
>
> All copy is in `landing-page-copy.md` in this folder — read it first and use that copy verbatim, don't invent your own.
>
> Design direction: dark theme, background `#0B0B0F`, surfaces `#16161C`, molten-orange accent `#FF6B2C` with `#FFA23A` for gradients. Headings in Space Grotesk, body in Inter. Subtle ember-glow effect behind the hero. Restrained scroll-reveal animation via Framer Motion.
>
> Build sections in this order: Nav, Hero, Problem, Services, Process, WhyUs, Pricing, FAQ, CTA, Footer — one component per file in `components/`.
>
> The Services section is the centrepiece: 10 services grouped into 4 pillars. Keep the service data in `lib/services.ts` as a typed array, not hardcoded in JSX. Each card shows title, italic tagline, description and an "Includes" list, with a lucide icon.
>
> Mobile-first and fully responsive. Use `next/image` throughout. Set page metadata from section 0 of the copy deck. Commit when the build passes.

---

## 9. Where the service list came from

- **From your client contract** (the screenshot): Brand Manager, Social Media Executive, Ads Manager, Designer → became services 4.1, 4.4, 4.5, 4.2/4.3
- **From your own list:** marketing, video editing, graphic design, social media, ads, automations, CRM, website development
- **Added by you:** WordPress development
- **Inspired by usmanbuilds.ai:** the AI-agent and automation offerings (voice agents, chat/SMS, n8n, GoHighLevel) — reframed in your own words and structure, with their one-punchy-headline-per-service card pattern. No copy was taken from that site.
