/** All copy verbatim from landing-page-copy.md. */

export const SITE = {
  name: "Growthforge",
  tagline: "Where growth gets built.",
  taglineAlt: "We build the machine, not just the campaign.",
  email: "growthforge.cloud@gmail.com",
  /** Every "book a call" button resolves from here. */
  bookingUrl: "https://cal.com/growthforge-basczx/30min",
  metaTitle:
    "Growthforge — Full-Service Marketing, Design & Automation Agency",
  metaDescription:
    "One team for your brand, content, ads, websites, CRM and AI automations. Growthforge builds the systems that turn attention into revenue.",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const TRUST_STATS = [
  "10 services, 1 team",
  "48-hour average creative turnaround",
  "Reporting you can actually read",
] as const;

export const PAIN_CARDS = [
  {
    index: "01",
    title: "Scattered vendors",
    body: "Five freelancers, five invoices, five different versions of your brand. Nobody owns the result.",
  },
  {
    index: "02",
    title: "Leads that go cold",
    body: "You spend to generate enquiries, then reply nine hours later. The lead already booked someone else.",
  },
  {
    index: "03",
    title: "No visibility",
    body: 'You\u2019re told the campaign "did well." Nobody can show you what that means in revenue.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Strategy Call",
    body: "Thirty minutes. We ask what you sell, who buys it, and what's currently broken. No deck, no pitch.",
  },
  {
    index: "02",
    title: "Audit & Plan",
    body: "We review your brand, channels, site and pipeline, then come back with a written plan: what we'd do, in what order, and what it costs. Yours to keep either way.",
  },
  {
    index: "03",
    title: "Build",
    body: "Brand guidelines locked, systems set up, first creative batch produced. You approve once — then we run.",
  },
  {
    index: "04",
    title: "Run & Report",
    body: "Content ships, campaigns run, automations handle follow-up. You get one clear monthly report: what we did, what it cost, what it returned.",
  },
  {
    index: "05",
    title: "Scale",
    body: "We double down on what's working and cut what isn't. Every quarter we revisit the plan together.",
  },
] as const;

export const WHY_US = [
  {
    lead: "One team, one invoice.",
    body: "No chasing five freelancers across three time zones for one campaign.",
  },
  {
    lead: "Creative connected to systems.",
    body: "The people making your ads and the people building your automations sit in the same meeting.",
  },
  {
    lead: "We tell you when to stop spending.",
    body: "If a campaign isn't working, you'll hear it from us before you see it in your bank account.",
  },
  {
    lead: "You own everything.",
    body: "Accounts, assets, workflows and documentation. If we ever part ways, you keep the machine.",
  },
  {
    lead: "Reporting in plain English.",
    body: "Not a forty-tab dashboard nobody opens.",
  },
] as const;

export const TIERS = [
  {
    name: "The Spark",
    kicker: "Starter",
    blurb: "For businesses that need presence and consistency.",
    features: [
      "Social media management (2 channels)",
      "12 designed posts / month",
      "4 short-form video edits / month",
      "Monthly reporting",
    ],
    cta: "Start with Spark",
    featured: false,
  },
  {
    name: "The Anvil",
    kicker: "Growth",
    blurb: "For businesses ready to spend on acquisition.",
    features: [
      "Everything in Spark",
      "Paid ads management (up to 2 platforms)",
      "20 designed posts + 8 video edits / month",
      "CRM setup & automated follow-up",
      "Landing page builds",
      "Bi-weekly strategy calls",
    ],
    cta: "Start with Anvil",
    featured: true,
  },
  {
    name: "The Furnace",
    kicker: "Full-service",
    blurb: "For businesses that want the whole machine.",
    features: [
      "Everything in Anvil",
      "Full brand management",
      "Website or WordPress build included",
      "AI chat / SMS / voice agents",
      "Custom automation workflows",
      "Dedicated account lead + weekly calls",
    ],
    cta: "Talk to us about Furnace",
    featured: false,
  },
] as const;

export const FAQS = [
  {
    q: "Do I have to take all ten services?",
    a: "No. Most clients start with two or three and add as they grow. The advantage is that when you do add one, the team already knows your brand.",
  },
  {
    q: "Who pays for ad spend?",
    a: "You do, directly to the platform. We never mark it up. Our fee is for managing it.",
  },
  {
    q: "How fast is creative turnaround?",
    a: "Standard design and short-form video requests come back within 48 hours. Larger builds get a scheduled timeline up front.",
  },
  {
    q: "Do I own the accounts and assets?",
    a: "Yes, always. Ad accounts, CRM, source files, automation workflows and documentation are yours from day one.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "Retainers run month to month after an initial three-month period — the minimum honest window to judge whether the work is landing.",
  },
  {
    q: "Do you work with businesses outside my industry?",
    a: "We work across industries. On the strategy call we'll tell you plainly if we're not the right fit.",
  },
] as const;

export const FOOTER_SERVICES = [
  "Brand Management",
  "Graphic Design",
  "Video Editing",
  "Social Media",
  "Paid Ads",
  "Web Development",
  "WordPress",
  "CRM",
  "Automation",
  "AI Agents",
] as const;

export const FOOTER_COMPANY = [
  { label: "How We Work", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIALS = ["Instagram", "LinkedIn", "YouTube"] as const;
