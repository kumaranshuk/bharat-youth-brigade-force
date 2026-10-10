import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/ui/reveal";
import { FinalCTA } from "@/components/sections/final-cta";
import { leadership } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The people and councils building Bhartiya Yuva Shakti Sangathan. Mission over individual.",
  alternates: { canonical: "/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="The people building the movement"
        description="We keep this page humble on purpose. Leadership here is a responsibility, not a spotlight — the mission is always bigger than any single person."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader, i) => (
            <Reveal key={leader.role} delay={i * 80}>
              <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <SmartImage
                  src={leader.image}
                  alt={leader.role}
                  width={480}
                  height={480}
                  wrapperClassName="aspect-square"
                  className="grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="p-5">
                  <p className="font-display text-lg font-semibold text-foreground">{leader.name}</p>
                  <p className="text-sm font-medium text-saffron">{leader.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{leader.location}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{leader.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
          Profiles shown are demo placeholders. Real, consented leadership profiles will replace these
          before production — always with the movement, not the individual, at the centre.
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
