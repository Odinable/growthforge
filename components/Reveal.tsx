"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in seconds. */
  delay?: number;
  className?: string;
  /** Render as <li> when the parent is a list, to keep the HTML valid. */
  as?: "div" | "li";
};

/**
 * Scroll reveal.
 *
 * The hidden state lives in CSS behind the `.js` class (set on <html> before
 * first paint), so if the bundle fails to load or hydration never happens the
 * content is simply visible rather than stuck at opacity 0.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = delay
    ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag
      // One ref type covers both tags we render.
      ref={ref as React.Ref<HTMLDivElement> & React.Ref<HTMLLIElement>}
      data-reveal=""
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
