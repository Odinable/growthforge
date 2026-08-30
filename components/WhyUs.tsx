import { WHY_US } from "@/lib/content";
import { Eyebrow, Reveal, Section } from "@/components/ui";

export function WhyUs() {
  return (
    <Section id="why-us" className="py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Sticky left column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Why us</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="display display-xl mt-8 text-[clamp(2.4rem,5.2vw,4.5rem)]">
                Why clients{" "}
                <span className="text-molten">consolidate</span> with us.
              </h2>
            </Reveal>
          </div>
        </div>

        <ul className="lg:col-span-7">
          {WHY_US.map((item, i) => (
            <Reveal
              key={item.lead}
              as="li"
              delay={i * 0.06}
              className="group flex gap-6 border-b border-border py-7 first:border-t first:pt-0 lg:gap-8 lg:py-8 lg:first:pt-8"
          >
              <span className="label shrink-0 pt-1.5 transition-colors duration-300 group-hover:text-molten">
                ({String(i + 1).padStart(2, "0")})
              </span>
              <div>
                <h3 className="display text-xl tracking-[-0.03em] sm:text-2xl">
                  {item.lead}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
