/**
 * The canonical origin for this site.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this in Vercel once a real domain is live
 *   2. VERCEL_PROJECT_PRODUCTION_URL — injected by Vercel, the production alias
 *   3. localhost for `next dev`
 *
 * Everything that needs an absolute URL (canonical, OG image, sitemap,
 * robots) reads from here, so moving to a real domain is one environment
 * variable and no code change.
 */
/** Last-resort production origin. Never let a build emit a localhost
 *  canonical, which would be worse than a wrong domain. */
const PRODUCTION_FALLBACK = "https://growthforge-solutions.vercel.app";

function resolve(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  return PRODUCTION_FALLBACK;
}

export const SITE_URL = resolve();
