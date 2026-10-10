import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { MissionPillars } from "@/components/sections/mission-pillars";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ImpactStats } from "@/components/sections/impact-stats";
import { FinalCTA } from "@/components/sections/final-cta";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ProgramCard } from "@/components/cards/program-card";
import { EventCard } from "@/components/cards/event-card";
import { StoryCard } from "@/components/cards/story-card";
import { ChapterCard } from "@/components/cards/chapter-card";
import { programs } from "@/data/programs";
import { events } from "@/data/events";
import { stories } from "@/data/stories";
import { chapters } from "@/data/chapters";

function SeeAll({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron transition-colors hover:text-saffron-soft"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export default function HomePage() {
  const upcoming = [...events]
    .filter((e) => new Date(e.date) >= new Date("2026-08-18"))
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))
    .slice(0, 3);

  return (
    <>
      <Hero />

      {/* WHY WE EXIST */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="section-label">Why we exist</span>
            <h2 className="mt-4 font-display text-display-lg font-semibold leading-[1.05] text-balance">
              India doesn&rsquo;t need more spectators.
              <span className="text-gradient-saffron"> It needs participants.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              <p>
                Young people across India already have the talent, energy, ideas, ambition
                and skills to change things. What&rsquo;s often missing isn&rsquo;t
                capability — it&rsquo;s community, access, opportunity, mentorship and a
                platform to act on.
              </p>
              <p>
                Bhartiya Yuva Shakti Sangathan exists to connect those missing pieces: to turn
                scattered individual potential into organised, visible, local action — and
                to link that action into one national network.
              </p>
              <p className="font-display text-xl font-semibold text-foreground">
                Youth → Unity → Action → Development → Nation Building.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* MISSION */}
      <Section className="bg-ink-soft">
        <SectionHeading
          label="Our mission"
          title="Four pillars, one movement"
          description="Everything we do rests on four simple commitments. Hover or tap to explore each."
        />
        <div className="mt-10">
          <MissionPillars />
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <SectionHeading
          label="How it works"
          title="From discovering us to leading change"
          description="A simple journey that reflects our philosophy — not a complicated sign-up process."
        />
        <div className="mt-10">
          <HowItWorks />
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section className="bg-ink-soft">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            label="Programs"
            title="Ways to get involved"
            description="Structured programmes that channel youth energy into real skills, service and leadership."
          />
          <div className="hidden shrink-0 pb-2 sm:block">
            <SeeAll href="/programs" label="All programs" />
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <ButtonLink href="/programs" variant="outline" className="w-full">
            All programs
          </ButtonLink>
        </div>
      </Section>

      {/* EVENTS */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            label="Events"
            title="Upcoming opportunities"
            description="Workshops, drives and gatherings happening across the network."
          />
          <div className="hidden shrink-0 pb-2 sm:block">
            <SeeAll href="/events" label="All events" />
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(upcoming.length ? upcoming : events.slice(0, 3)).map((e, i) => (
            <Reveal key={e.slug} delay={(i % 3) * 80}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* STORIES */}
      <Section className="bg-ink-soft">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            label="Stories"
            title="Real people. Real change."
            description="Where they started, what they did, and what changed."
          />
          <div className="hidden shrink-0 pb-2 sm:block">
            <SeeAll href="/stories" label="All stories" />
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.slice(0, 4).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section>
        <SectionHeading
          label="Impact"
          title="Momentum we can measure"
          description="We only ever publish real, verified numbers. During development these are clearly marked demo figures."
          align="center"
        />
        <div className="mt-10">
          <ImpactStats />
        </div>
      </Section>

      {/* CHAPTERS */}
      <Section className="bg-ink-soft">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            label="Chapters"
            title="Find your local chapter"
            description="The movement lives locally. Discover a chapter near you — or start one."
          />
          <div className="hidden shrink-0 pb-2 sm:block">
            <SeeAll href="/chapters" label="All chapters" />
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 80}>
              <ChapterCard chapter={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
