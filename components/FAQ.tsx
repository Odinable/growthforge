import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";
import { Eyebrow, Reveal, Section } from "@/components/ui";

/**
 * Native <details> accordion — keyboard accessible and functional without JS,
 * so it needs no client bundle.
 */
export function FAQ() {
  return (
    <Section id="faq" className="border-t border-border py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="display display-xl mt-8 text-[clamp(2.2rem,4.4vw,3.75rem)]">
                Questions,
                <br />
                <span className="text-molten">answered straight.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details className="group border-b border-border first:border-t">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="display text-lg tracking-[-0.025em] transition-colors duration-300 group-hover:text-molten sm:text-xl">
                    {faq.q}
                  </h3>
                  <Plus
                    aria-hidden
                    size={20}
                    className="mt-1 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45 group-open:text-molten"
                  />
                </summary>
                <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted sm:text-base">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
