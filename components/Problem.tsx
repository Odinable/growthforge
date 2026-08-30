import { PAIN_CARDS } from "@/lib/content";
import { Eyebrow, Reveal, Section } from "@/components/ui";

export function Problem() {
  return (
    <Section id="problem" className="py-24 sm:py-32">
      <Reveal>
        <Eyebrow>The real problem</Eyebrow>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="display text-[clamp(2rem,4.6vw,3.75rem)]">
            You don&rsquo;t have a marketing problem. You have a coordination
            problem.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:pt-3">
          <p className="text-base leading-relaxed text-muted">
            Your designer doesn&rsquo;t know what the ads manager is testing.
            Your ads manager doesn&rsquo;t know what your CRM does with a lead.
            Your website was built by someone you can&rsquo;t reach anymore.
            Every handoff loses information, and every loss costs you money.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-border bg-border sm:mt-16 md:grid-cols-3">
        {PAIN_CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08} className="bg-bg">
            <article className="group h-full bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 lg:p-10">
              <span className="label text-molten">({card.index})</span>
              <h3 className="display mt-8 text-2xl tracking-[-0.03em]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="display mt-14 text-2xl tracking-[-0.035em] sm:text-3xl">
          We fix the seams, <span className="text-molten">not just the pieces.</span>
        </p>
      </Reveal>
    </Section>
  );
}
