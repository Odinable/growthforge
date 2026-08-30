import { ArrowUpRight } from "lucide-react";
import { PILLARS, type Service } from "@/lib/services";
import { Eyebrow, Reveal, Section } from "@/components/ui";

function ServiceRow({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group relative border-t border-border transition-colors duration-300 hover:bg-surface">
      {/* Molten wipe on hover, drawn behind the content */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-molten transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />

      <div className="grid gap-6 px-0 py-9 lg:grid-cols-12 lg:gap-8 lg:px-6 lg:py-11">
        {/* Index */}
        <div className="lg:col-span-1">
          <span className="label text-muted transition-colors duration-300 group-hover:text-molten">
            {service.index}
          </span>
        </div>

        {/* Title + tagline */}
        <div className="lg:col-span-4">
          <h3 className="display flex items-start gap-3 text-[clamp(1.6rem,2.9vw,2.5rem)]">
            <span>{service.title}</span>
            <ArrowUpRight
              aria-hidden
              className="mt-1 shrink-0 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-molten group-hover:opacity-100"
              size={22}
            />
          </h3>
          <p className="mt-3 max-w-md text-sm text-molten italic">
            {service.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="lg:col-span-4">
          <p className="text-sm leading-relaxed text-muted">
            {service.description}
          </p>
        </div>

        {/* Includes */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2">
            <Icon aria-hidden size={15} className="text-molten" />
            <span className="label">Includes</span>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.includes.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted transition-colors duration-300 group-hover:border-[#33333f]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <Section id="services" className="py-24 sm:py-32">
      <Reveal>
        <Eyebrow>What we do</Eyebrow>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2 className="display display-xl text-[clamp(2.4rem,6.4vw,5.5rem)]">
            Ten services.
            <br />
            <span className="text-molten">One accountable team.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4">
          <p className="text-base leading-relaxed text-muted">
            Take the whole stack or just the part you&rsquo;re missing.
            Everything below is delivered in-house.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-20">
        {PILLARS.map((pillar, pi) => (
          <div key={pillar.name} className={pi > 0 ? "mt-16" : ""}>
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5">
                <h3 className="display text-xl tracking-[-0.03em] sm:text-2xl">
                  <span className="text-molten">
                    ({String(pi + 1).padStart(2, "0")})
                  </span>{" "}
                  {pillar.name}
                </h3>
                <p className="text-sm text-muted italic">{pillar.blurb}</p>
              </div>
            </Reveal>

            <div className="border-b border-border">
              {pillar.services.map((service) => (
                <Reveal key={service.index}>
                  <ServiceRow service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
