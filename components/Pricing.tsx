import { Check } from "lucide-react";
import { TIERS } from "@/lib/content";
import { Eyebrow, Reveal, Section } from "@/components/ui";

export function Pricing() {
  return (
    <Section id="pricing" className="py-24 sm:py-32">
      <Reveal>
        <Eyebrow>Engagements</Eyebrow>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <h2 className="display display-xl text-[clamp(2.4rem,5.6vw,4.75rem)]">
            Pick the level that fits{" "}
            <span className="text-molten">where you are.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-base leading-relaxed text-muted">
            Every engagement starts with the same free strategy call. Ad spend is
            billed separately and always paid directly by you.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.08} className="h-full">
            <article
              className={`relative flex h-full flex-col rounded-[20px] border p-8 transition-colors duration-300 lg:p-10 ${
                tier.featured
                  ? "border-molten bg-surface"
                  : "border-border bg-surface hover:border-[#33333f]"
              }`}
            >
              {tier.featured && (
                <span className="label absolute -top-3 left-8 rounded-full bg-molten px-3 py-1 text-bg">
                  Most popular
                </span>
              )}

              <div className="flex items-baseline justify-between gap-3">
                <h3 className="display text-3xl tracking-[-0.04em]">
                  {tier.name}
                </h3>
                <span className="label shrink-0">{tier.kicker}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {tier.blurb}
              </p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check
                      aria-hidden
                      size={16}
                      className="mt-0.5 shrink-0 text-molten"
                    />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors duration-300 ${
                  tier.featured
                    ? "bg-molten text-bg hover:bg-glow"
                    : "border border-border text-ink hover:border-molten hover:text-molten"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-12 text-center text-sm text-muted">
          Need something specific instead of a package? We do project work too —
          websites, brand identities, automation builds.{" "}
          <a
            href="#contact"
            className="text-molten underline-offset-4 hover:underline"
          >
            Ask for a custom quote &rarr;
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
