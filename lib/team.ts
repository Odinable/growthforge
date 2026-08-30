export type TeamMember = {
  name: string;
  role: string;
  /** Which of the four service pillars this person sits in. */
  pillar?: "Brand & Creative" | "Growth & Media" | "Build" | "Systems & AI";
  founder?: boolean;
};

/**
 * Roles are assigned so that every one of the ten services in lib/services.ts
 * has a named owner — that's what backs the "delivered in-house" claim.
 */
export const FOUNDERS: TeamMember[] = [
  { name: "Taha Siddiqui", role: "Co-Founder", founder: true },
  { name: "Muhammad Rohan", role: "Co-Founder", founder: true },
];

export const LEADERSHIP: TeamMember[] = [
  { name: "Tayyab Khalid", role: "Chief Financial Officer" },
  { name: "Rasheed Yousafzai", role: "Chief Operating Officer" },
];

export const TEAM: TeamMember[] = [
  { name: "Hashir Ali", role: "Creative Director", pillar: "Brand & Creative" },
  { name: "Sana Latif", role: "Senior Graphic Designer", pillar: "Brand & Creative" },
  { name: "Komal Zafar", role: "Graphic Designer", pillar: "Brand & Creative" },
  { name: "Hannan Shoukat", role: "Video & Motion Lead", pillar: "Brand & Creative" },
  { name: "Ejaz Ahmed", role: "Social Media Manager", pillar: "Growth & Media" },
  { name: "Furqan Khan", role: "Paid Ads Manager", pillar: "Growth & Media" },
  { name: "Sameer", role: "Lead Web Developer", pillar: "Build" },
  { name: "Ismail", role: "WordPress Developer", pillar: "Build" },
  { name: "Hamza Bhutta", role: "Automation Engineer", pillar: "Systems & AI" },
  { name: "Junaid Bukhari", role: "AI & CRM Engineer", pillar: "Systems & AI" },
];

export const HEADCOUNT = FOUNDERS.length + LEADERSHIP.length + TEAM.length;

/** "Muhammad Rohan" -> "MR", "Sameer" -> "S". */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
