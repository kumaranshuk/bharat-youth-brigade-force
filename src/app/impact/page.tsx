import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { ImpactStats } from "@/components/sections/impact-stats";
import { IndiaNetwork } from "@/components/visuals/india-network";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The impact of Bhartiya Yuva Shakti Sangathan — measured with real, verified data. No invented numbers.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="Momentum we can measure"
        description="We believe impact should be honest. We only ever publish real, verified numbers — never inflated claims."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact" }]}
      />

      <Section>
        <ImpactStats />
        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
          <p>
            During development these figures are clearly marked demo data. In production, every metric
            here is computed from live organisational records (chapters, events and verified
            participation) — the architecture is already wired to connect to a database when ready.
          </p>
        </div>
      </Section>

      <Section className="bg-ink-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              label="The living network"
              title="Local action, national scale"
              description="Each node is a place where young people are organising. As chapters grow, the network lights up — and so does the map."
            />
          </div>
          <div className="mx-auto max-w-sm">
            <IndiaNetwork />
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
