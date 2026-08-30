import { SITE } from "@/lib/content";

/**
 * Scrolling ticker band — the signature device on the reference site.
 * The track holds the phrase list twice so the -50% translate loops seamlessly.
 */
export function Marquee() {
  const items = [
    SITE.tagline,
    "We build the machine, not just the campaign.",
    "Ten services. One accountable team.",
    "You own everything.",
  ];

  const track = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden border-y border-border bg-surface py-5 select-none">
      <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="display flex shrink-0 items-center gap-8 text-xl tracking-[-0.04em] whitespace-nowrap sm:text-2xl"
          >
            {item}
            <span className="text-molten" aria-hidden>
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
