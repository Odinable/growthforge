import { PROCESS_STEPS } from "@/lib/content";
import { Eyebrow, Reveal, Section } from "@/components/ui";

export function Process() {
  return (
    <Section id="process" className="border-y border-border bg-surface py-24 sm:py-32">
      <Reveal>
        <Eyebrow>How we work</Eyebrow>
      </Reveal>

      <Reveal>
        <h2 className="display display-xl mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5rem)]">
          A process built to <span className="text-molten">remove surprises.</span>
        </h2>
      </Reveal>

      {/* Horizontal on desktop, stacked on mobile */}
      <ol className="mt-16 grid gap-px bg-border sm:mt-20 md:grid-cols-2 xl:grid-cols-5">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal
            key={step.index}
            as="li"
            delay={i * 0.07}
            className="group relative h-full bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
        >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-molten transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />
            <span className="display block text-5xl tracking-[-0.06em] text-[#6b6b78] transition-colors duration-300 group-hover:text-molten">
              {step.index}
            </span>
            <h3 className="display mt-6 text-xl tracking-[-0.03em]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
