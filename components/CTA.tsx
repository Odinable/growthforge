import { SITE } from "@/lib/content";
import { Reveal, Section } from "@/components/ui";

export function CTA() {
  return (
    <div id="contact" className="relative overflow-hidden bg-molten text-bg">
      {/* Repeating "Let's work together" band, per the reference site */}
      <div className="flex overflow-hidden border-b border-bg/20 py-4 select-none">
        <div className="marquee-track flex shrink-0 items-center gap-6 pr-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              aria-hidden
              className="display flex shrink-0 items-center gap-6 text-lg tracking-[-0.04em] whitespace-nowrap uppercase"
            >
              Let&rsquo;s work together <span>✳</span>
            </span>
          ))}
        </div>
      </div>

      <Section className="py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display display-xl text-[clamp(2.6rem,7vw,6rem)]">
              Let&rsquo;s find out if we&rsquo;re a fit.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-bg/80">
              Thirty minutes. We&rsquo;ll look at what you&rsquo;re running now
              and tell you where the biggest gap is — whether or not you hire us.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              {/* Replace with your Cal.com / Calendly link before launch. */}
              <a
                href={`mailto:${SITE.email}?subject=Strategy%20call`}
                className="inline-flex h-13 shrink-0 items-center justify-center rounded-full bg-bg px-8 py-4 text-sm font-semibold whitespace-nowrap text-ink transition-colors duration-300 hover:bg-[#1c1c24]"
              >
                Book a Free Strategy Call
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm font-medium text-bg/80 underline-offset-4 hover:underline"
              >
                Or email us at {SITE.email}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
