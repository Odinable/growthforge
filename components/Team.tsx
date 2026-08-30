import {
  FOUNDERS,
  HEADCOUNT,
  LEADERSHIP,
  TEAM,
  initials,
  type TeamMember,
} from "@/lib/team";
import { Eyebrow, Reveal, Section } from "@/components/ui";

/** No headshots yet, so the monogram carries the card. */
function Monogram({
  name,
  size = "sm",
}: {
  name: string;
  size?: "sm" | "lg";
}) {
  return (
    <span
      aria-hidden
      className={`display flex shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 tracking-[-0.04em] text-molten transition-colors duration-300 group-hover:border-molten ${
        size === "lg" ? "h-16 w-16 text-xl" : "h-12 w-12 text-base"
      }`}
    >
      {initials(name)}
    </span>
  );
}

function FounderCard({ member, index }: { member: TeamMember; index: string }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-[20px] border border-border bg-surface p-8 transition-colors duration-300 hover:border-molten lg:p-10">
      <div className="flex items-start justify-between gap-4">
        <Monogram name={member.name} size="lg" />
        <span className="label">({index})</span>
      </div>
      <div className="mt-10">
        <h3 className="display text-2xl tracking-[-0.035em] sm:text-3xl">
          {member.name}
        </h3>
        <p className="label mt-2 text-molten">{member.role}</p>
      </div>
    </article>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex items-center gap-4 border-t border-border py-6 transition-colors duration-300 hover:bg-surface lg:px-4">
      <Monogram name={member.name} />
      <div className="min-w-0">
        <h3 className="display truncate text-base tracking-[-0.02em] sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-0.5 truncate text-xs text-muted">{member.role}</p>
      </div>
    </article>
  );
}

export function Team() {
  return (
    <Section
      id="team"
      className="border-t border-border py-24 sm:py-32"
    >
      <Reveal>
        <Eyebrow>The team</Eyebrow>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <h2 className="display display-xl text-[clamp(2.4rem,5.4vw,4.75rem)]">
            The team you&rsquo;ll{" "}
            <span className="text-molten">actually be working with.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-base leading-relaxed text-muted">
            {HEADCOUNT} people, all in-house. No subcontractors, and no account
            manager relaying your feedback to someone you&rsquo;ll never meet.
          </p>
        </Reveal>
      </div>

      {/* Founders */}
      <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-2">
        {FOUNDERS.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.08} className="h-full">
            <FounderCard
              member={member}
              index={String(i + 1).padStart(2, "0")}
            />
          </Reveal>
        ))}
      </div>

      {/* Leadership */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {LEADERSHIP.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.08}>
            <article className="group flex items-center gap-5 rounded-[20px] border border-border bg-surface p-6 transition-colors duration-300 hover:border-molten">
              <Monogram name={member.name} size="lg" />
              <div>
                <h3 className="display text-xl tracking-[-0.03em]">
                  {member.name}
                </h3>
                <p className="label mt-1.5 text-molten">{member.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Everyone else, grouped by the pillar they deliver */}
      <div className="mt-16">
        <Reveal>
          <p className="label pb-2">The specialists</p>
        </Reveal>
        <div className="grid border-b border-border sm:grid-cols-2">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={(i % 2) * 0.06}>
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <p className="mt-10 text-sm text-muted">
          Every one of the ten services above has a named owner on this list
          &mdash; that&rsquo;s what &ldquo;delivered in-house&rdquo; means.
        </p>
      </Reveal>
    </Section>
  );
}
