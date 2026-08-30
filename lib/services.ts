import type { LucideIcon } from "lucide-react";
import {
  Compass,
  PenTool,
  Clapperboard,
  CalendarDays,
  Target,
  Code2,
  LayoutTemplate,
  Database,
  Workflow,
  Bot,
} from "lucide-react";

export type Service = {
  /** Zero-padded index rendered as the card's counter, e.g. "001" */
  index: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  icon: LucideIcon;
};

export type Pillar = {
  name: string;
  blurb: string;
  services: Service[];
};

/** Copy is verbatim from landing-page-copy.md §4. */
export const PILLARS: Pillar[] = [
  {
    name: "Brand & Creative",
    blurb:
      "Make everything you publish look like it came from one company.",
    services: [
      {
        index: "001",
        title: "Brand Management",
        tagline:
          "Your brand, actively managed — not designed once and forgotten.",
        description:
          "We own your brand guidelines and make sure every asset that goes out matches them. Monthly content calendars, campaign direction, and a single point of accountability for how your brand looks and sounds everywhere.",
        includes: [
          "Brand guidelines",
          "Monthly content calendar",
          "Campaign planning",
          "Creative direction",
          "Brand consistency audits",
        ],
        icon: Compass,
      },
      {
        index: "002",
        title: "Graphic Design",
        tagline: "Design that's on-brand by default, not by accident.",
        description:
          "Social posts, ad creatives, carousels, thumbnails, packaging, pitch decks and print. Built against your brand guidelines so you're never reviewing something that looks like a different company made it.",
        includes: [
          "Social media creatives",
          "Ad creatives",
          "Carousels & infographics",
          "Brand collateral",
          "Pitch decks",
          "Print-ready files",
        ],
        icon: PenTool,
      },
      {
        index: "003",
        title: "Video Editing & Motion",
        tagline: "Video that stops the scroll and survives the algorithm.",
        description:
          "Short-form edits for Reels, Shorts and TikTok, long-form YouTube edits, ad cutdowns, motion graphics and animation. Colour grading is included, not billed as an extra.",
        includes: [
          "Short-form editing",
          "Long-form / YouTube edits",
          "Ad video cutdowns",
          "Motion graphics & animation",
          "Colour grading",
          "Subtitles & captions",
        ],
        icon: Clapperboard,
      },
    ],
  },
  {
    name: "Growth & Media",
    blurb:
      "Ship consistently, and make every unit of ad spend answer to a number.",
    services: [
      {
        index: "004",
        title: "Social Media Management",
        tagline: "Consistent presence, handled end to end.",
        description:
          "We plan it, make it, schedule it, and answer the comments. You approve the calendar once a month and get on with running your business.",
        includes: [
          "Monthly content calendar",
          "Scheduling across all channels",
          "Community management — comments, DMs and mentions",
          "Trend monitoring",
          "Monthly performance reporting",
        ],
        icon: CalendarDays,
      },
      {
        index: "005",
        title: "Paid Ads Management",
        tagline: "Spend that's accountable to a number.",
        description:
          "Campaigns across Meta, Google, YouTube and LinkedIn. We run structured A/B tests, manage budget against agreed targets, and tell you honestly when an ad deserves more spend — or when it should be killed.",
        includes: [
          "Campaign setup & management",
          "Creative and copy testing",
          "A/B testing frameworks",
          "Budget management & pacing",
          "Conversion tracking setup",
          "Transparent monthly reporting",
        ],
        icon: Target,
      },
    ],
  },
  {
    name: "Build",
    blurb: "The asset you actually own, built properly.",
    services: [
      {
        index: "006",
        title: "Website Development",
        tagline: "Fast, modern sites built to convert.",
        description:
          "Custom marketing sites and landing pages on a modern stack. Fast by default, mobile-first, SEO-ready, and easy for your team to update.",
        includes: [
          "Custom design & build",
          "Landing pages & funnels",
          "Mobile-first responsive",
          "Core Web Vitals optimisation",
          "On-page SEO setup",
          "Analytics & tracking",
        ],
        icon: Code2,
      },
      {
        index: "007",
        title: "WordPress Development",
        tagline: "The flexibility of WordPress, without the bloat.",
        description:
          "Custom themes, WooCommerce stores, plugin work, migrations, speed optimisation and ongoing maintenance — for teams who want to own and edit their own content.",
        includes: [
          "Custom theme development",
          "WooCommerce stores",
          "Plugin integration & custom fields",
          "Site migrations",
          "Speed & security hardening",
          "Ongoing maintenance",
        ],
        icon: LayoutTemplate,
      },
    ],
  },
  {
    name: "Systems & AI",
    blurb: "The machinery that stops leads leaking out of the funnel.",
    services: [
      {
        index: "008",
        title: "CRM Setup & Management",
        tagline: "Stop losing leads in a spreadsheet.",
        description:
          "We build your pipeline properly — stages, fields, lead sources, automated follow-up, and dashboards that show where deals actually die. GoHighLevel, HubSpot, or whatever you already run.",
        includes: [
          "CRM setup & migration",
          "Pipeline & stage design",
          "Lead capture integration",
          "Automated follow-up sequences",
          "Reporting dashboards",
          "Team training",
        ],
        icon: Database,
      },
      {
        index: "009",
        title: "Business Automation",
        tagline: "Kill the manual work that's eating your week.",
        description:
          "We connect the tools you already pay for so they talk to each other. Lead routing, onboarding, invoicing, reporting and internal notifications — built on n8n, Make or Zapier, and documented so it isn't a black box.",
        includes: [
          "Workflow automation",
          "Tool & API integrations",
          "Lead routing",
          "Automated onboarding & fulfilment",
          "Reporting automation",
          "Full documentation & handover",
        ],
        icon: Workflow,
      },
      {
        index: "010",
        title: "AI Agents",
        tagline: "Answer every lead in seconds, at 2am, every time.",
        description:
          "AI chat, SMS and WhatsApp agents that qualify enquiries and book them straight into your calendar. Voice agents that pick up the phone when you can't. Connected to your CRM so the conversation is never lost.",
        includes: [
          "Website chat agents",
          "SMS & WhatsApp agents",
          "AI voice agents",
          "Lead qualification logic",
          "Calendar booking integration",
          "CRM sync",
        ],
        icon: Bot,
      },
    ],
  },
];

export const ALL_SERVICES: Service[] = PILLARS.flatMap((p) => p.services);
