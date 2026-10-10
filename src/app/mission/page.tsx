import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { MissionPillars } from "@/components/sections/mission-pillars";
import { Reveal } from "@/components/ui/reveal";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Four pillars — Youth, Unity, Action, Development — guide everything Bhartiya Yuva Shakti Sangathan does.",
  alternates: { canonical: "/mission" },
};

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our mission"
        title={
          <>
            Youth. Unity. Action. <span className="text-gradient-saffron">Development.</span>
          </>
        }
        description="Four simple commitments that turn scattered potential into organised, national impact."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Mission" }]}
      />

      <Section>
        <SectionHeading
          label="The four pillars"
          title="What we stand on"
          description="Explore each pillar — they build on one another, from the individual to the nation."
        />
        <div className="mt-10">
          <MissionPillars />
        </div>
      </Section>

      <Section className="bg-ink-soft">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-relaxed text-balance sm:text-3xl">
              &ldquo;India doesn&rsquo;t need more spectators.
              <span className="text-gradient-saffron"> It needs participants.&rdquo;</span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Our mission is not to speak on behalf of young people, but to give them the community,
              access, opportunity and mentorship to act for themselves — together.
            </p>
          </Reveal>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
