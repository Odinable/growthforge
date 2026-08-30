import {
  FOOTER_COMPANY,
  FOOTER_SERVICES,
  SITE,
  SOCIALS,
} from "@/lib/content";
import { Section } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-bg pt-20 pb-10">
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-4">
            <p className="display text-2xl tracking-[-0.04em] uppercase">
              Growth<span className="text-molten">forge</span>
            </p>
            <p className="mt-3 text-sm text-molten italic">{SITE.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Full-service marketing, design and automation.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div className="lg:col-span-4">
            <h2 className="label">Services</h2>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2.5">
              {FOOTER_SERVICES.map((service, i) => (
                <li key={service} className="text-sm text-muted">
                  <a
                    href="#services"
                    className="transition-colors hover:text-ink"
                  >
                    {service}
                  </a>
                  {i < FOOTER_SERVICES.length - 1 && (
                    <span aria-hidden className="ml-2 text-border">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="lg:col-span-2">
            <h2 className="label">Company</h2>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Get in touch */}
          <div className="lg:col-span-2">
            <h2 className="label">Get in touch</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-muted transition-colors hover:text-molten"
                >
                  {SITE.email}
                </a>
              </li>
              {SOCIALS.map((social) => (
                <li key={social}>
                  {/* Point these at your real profiles before launch. */}
                  <a
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Growthforge. All rights reserved.
          </p>
          <p className="flex gap-4 text-xs text-muted">
            {/* Copy lives in site-copy/04-pages-legal.md — add the routes before launch. */}
            <a href="#" className="transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Terms
            </a>
          </p>
        </div>
      </Section>
    </footer>
  );
}
