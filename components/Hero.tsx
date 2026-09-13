import { SITE, TRUST_STATS } from "@/lib/content";
import { ButtonLink, Section } from "@/components/ui";

/** Headline split by line so each can rise independently. */
const H1_LINES = [
  "Everything your brand",
  "needs to grow.",
  "Under one roof.",
];

/**
 * Server component. The entrance animation is CSS-only (see globals.css),
 * so the hero paints with the first byte and ships no JavaScript.
 */
export function Hero() {
  return (
    <div
      id="top"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 lg:pt-52"
    >
      {/* Ember glow — the one decorative flourish behind the hero */}
      <div
        aria-hidden
        className="ember pointer-events-none absolute top-[38%] left-1/2 -z-10 h-[36rem] w-[72rem] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,107,44,0.42), rgba(255,162,58,0.14) 55%, transparent 100%)",
        }}
      />
      {/* Faint grid, echoing the reference site's structured feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #26262f 1px, transparent 1px), linear-gradient(to bottom, #26262f 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent 100%)",
        }}
      />

      <Section>
        <p className="label fade-up">Full-service growth partner</p>

        <h1 className="display display-xl mt-7 text-[clamp(2.6rem,8.2vw,7.5rem)]">
          {H1_LINES.map((text, i) => (
            <span key={text} className="block overflow-hidden pb-[0.06em]">
              <span
                className={`rise block ${i === 2 ? "text-molten" : ""}`}
                style={{ "--d": `${150 + i * 90}ms` } as React.CSSProperties}
              >
                {text}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p
            className="fade-up max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ "--d": "500ms" } as React.CSSProperties}
          >
            Most businesses juggle a designer, a video editor, an ads guy and a
            developer who never talk to each other. Growthforge replaces all of
            them with one team that builds your brand, runs your campaigns, and
            automates the follow-up — so nothing falls through the cracks.
          </p>

          <div
            className="fade-up shrink-0"
            style={{ "--d": "620ms" } as React.CSSProperties}
          >
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={SITE.bookingUrl}>Book a Free Strategy Call</ButtonLink>
              <ButtonLink href="#services" variant="ghost">
                See What We Do
              </ButtonLink>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              No retainers until you&rsquo;ve seen the plan. The first call is
              strategy, not a pitch.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <dl
          className="fade-up mt-16 grid grid-cols-1 border-t border-border sm:mt-20 sm:grid-cols-3"
          style={{ "--d": "760ms" } as React.CSSProperties}
        >
          {TRUST_STATS.map((stat, i) => (
            <div
              key={stat}
              className="flex items-baseline gap-4 border-b border-border py-6 sm:border-b-0 sm:py-8 sm:pr-6 sm:not-first:border-l sm:not-first:border-l-border sm:not-first:pl-8"
            >
              <dt className="label shrink-0">
                ({String(i + 1).padStart(2, "0")})
              </dt>
              <dd className="display text-lg tracking-[-0.03em] sm:text-xl">
                {stat}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}
