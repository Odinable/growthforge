# Growthforge — Multipage Site Structure

The single-page version lives in `../landing-page-copy.md`. This folder replaces it with a full site. The home page here is shorter than the landing page on purpose — its job is to route people to the deep pages, not to say everything at once.

---

## URL map

| Route | Page | File |
|---|---|---|
| `/` | Home | `01-pages-core.md` |
| `/about` | About | `01-pages-core.md` |
| `/process` | How We Work | `01-pages-core.md` |
| `/services` | Services index | `02-pages-services.md` |
| `/services/brand-management` | Brand Management | `02-pages-services.md` |
| `/services/graphic-design` | Graphic Design | `02-pages-services.md` |
| `/services/video-editing` | Video Editing & Motion | `02-pages-services.md` |
| `/services/social-media-management` | Social Media Management | `02-pages-services.md` |
| `/services/paid-ads` | Paid Ads Management | `02-pages-services.md` |
| `/services/website-development` | Website Development | `02-pages-services.md` |
| `/services/wordpress-development` | WordPress Development | `02-pages-services.md` |
| `/services/crm` | CRM Setup & Management | `02-pages-services.md` |
| `/services/automation` | Business Automation | `02-pages-services.md` |
| `/services/ai-agents` | AI Agents | `02-pages-services.md` |
| `/work` | Work / Case studies | `03-pages-conversion.md` |
| `/pricing` | Pricing | `03-pages-conversion.md` |
| `/contact` | Contact | `03-pages-conversion.md` |
| `/privacy` | Privacy Policy | `04-pages-legal.md` |
| `/terms` | Terms of Service | `04-pages-legal.md` |

**Implementation note:** build the 10 service pages as one dynamic route `app/services/[slug]/page.tsx` driven by `lib/services.ts`. Do not create ten hand-written page files.

---

## Shared: Navigation

Logo: **GROWTHFORGE**

| Label | Link | Behaviour |
|---|---|---|
| Services | `/services` | Mega-dropdown on desktop, grouped by the 4 pillars |
| Work | `/work` | |
| How We Work | `/process` | |
| Pricing | `/pricing` | |
| About | `/about` | |

Button: **Book a Free Call** → `/contact`

Mobile: full-screen overlay menu, services collapsed into an accordion by pillar.

---

## Shared: Footer

**Column 1 — Brand**
GROWTHFORGE
*Where growth gets built.*
Full-service marketing, design and automation. One team for your brand, your campaigns and the systems behind them.

**Column 2 — Brand & Creative**
Brand Management · Graphic Design · Video Editing

**Column 3 — Growth & Build**
Social Media · Paid Ads · Website Development · WordPress

**Column 4 — Systems & AI**
CRM Setup · Business Automation · AI Agents

**Column 5 — Company**
About · How We Work · Work · Pricing · Contact

**Contact block**
hello@wearegrowthforge.com
Instagram · LinkedIn · YouTube

**Bottom bar:** © 2026 Growthforge. All rights reserved. · Privacy Policy · Terms

---

## Shared: CTA band

Reused at the bottom of every page except `/contact`.

**H2:** Let's find out if we're a fit.
**Body:** Thirty minutes. We'll look at what you're running now and tell you where the biggest gap is — whether or not you hire us.
**Primary CTA:** Book a Free Strategy Call
**Secondary:** hello@wearegrowthforge.com

---

## Shared: Trust strip

Sits under the hero on `/`, `/services` and `/pricing`.

- 10 services, 1 accountable team
- 48-hour average creative turnaround
- You own every account, asset and workflow

---

## Page metadata

Paste these into each route's `metadata` export.

| Route | Title | Description |
|---|---|---|
| `/` | Growthforge — Full-Service Marketing, Design & Automation Agency | One team for your brand, content, ads, websites, CRM and AI automations. Growthforge builds the systems that turn attention into revenue. |
| `/about` | About Growthforge — One Team, Ten Services | Why we built an agency that handles creative and systems under one roof, and how we work with the clients we take on. |
| `/process` | How We Work — Growthforge | Our five-step process: strategy call, audit and plan, build, run and report, scale. Built to remove surprises. |
| `/services` | Services — Growthforge | Brand, design, video, social, paid ads, websites, WordPress, CRM, automation and AI agents. Delivered in-house by one team. |
| `/services/brand-management` | Brand Management Services — Growthforge | Brand guidelines, content calendars and creative direction, actively managed month to month. |
| `/services/graphic-design` | Graphic Design Services — Growthforge | Social creatives, ad creatives, carousels, decks and print — on-brand by default. |
| `/services/video-editing` | Video Editing & Motion Graphics — Growthforge | Short-form, long-form, ad cutdowns, motion graphics and colour grading. |
| `/services/social-media-management` | Social Media Management — Growthforge | Content calendars, scheduling, community management and monthly reporting. |
| `/services/paid-ads` | Paid Ads Management — Growthforge | Meta, Google, YouTube and LinkedIn campaigns managed against a number you agreed to. |
| `/services/website-development` | Website Development — Growthforge | Fast, modern, conversion-focused websites and landing pages. |
| `/services/wordpress-development` | WordPress Development — Growthforge | Custom themes, WooCommerce, migrations, speed and security work. |
| `/services/crm` | CRM Setup & Management — Growthforge | Pipelines, automated follow-up and dashboards that show where deals die. |
| `/services/automation` | Business Automation — Growthforge | n8n, Make and Zapier workflows that remove the manual work eating your week. |
| `/services/ai-agents` | AI Chat, SMS & Voice Agents — Growthforge | Agents that qualify leads and book them into your calendar, day or night. |
| `/work` | Our Work — Growthforge | Selected projects across brand, content, paid media and automation. |
| `/pricing` | Pricing & Engagements — Growthforge | Three retainer levels plus project work. Transparent scope, no marked-up ad spend. |
| `/contact` | Contact Growthforge | Book a free 30-minute strategy call, or send us a message. |

---

## Service page template

Every one of the ten detail pages in `02-pages-services.md` follows this shape, so the dynamic route only needs building once:

1. **Breadcrumb** — Services / [Name]
2. **Hero** — eyebrow (pillar), H1, subhead, CTA
3. **The problem** — two or three short paragraphs
4. **What's included** — 6 bullets
5. **Deliverables** — what physically lands in your inbox
6. **How it works** — 3 or 4 steps specific to this service
7. **Good fit / not a fit** — two columns, builds trust by disqualifying
8. **FAQ** — 3 questions
9. **Related services** — 3 cross-links
10. **Shared CTA band**
