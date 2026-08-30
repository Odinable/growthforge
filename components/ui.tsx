import type { ReactNode } from "react";

export { Reveal } from "@/components/Reveal";

/* Section wrapper -------------------------------------------------- */

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto w-full max-w-[86rem]">{children}</div>
    </section>
  );
}

/* Eyebrow label ---------------------------------------------------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="label flex items-center gap-3">
      <span aria-hidden className="h-px w-8 bg-molten" />
      {children}
    </p>
  );
}

/* Buttons ---------------------------------------------------------- */
/* Pill shape + hover label-swap, both taken from the reference site. */

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-7 text-sm font-semibold transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "bg-molten text-bg hover:bg-glow"
      : "border border-border text-ink hover:border-molten hover:text-molten";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {/* Two stacked copies of the label; the pair slides up on hover. */}
      <span className="relative block overflow-hidden" aria-hidden>
        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
      <span className="sr-only">{children}</span>
    </a>
  );
}
