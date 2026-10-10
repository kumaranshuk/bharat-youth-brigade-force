import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bhartiya Yuva Shakti Sangathan is a national platform bringing young people across India together to connect, participate, lead and build.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A national platform for <span className="text-gradient-saffron">young India</span>
          </>
        }
        description={siteConfig.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="section-label">Who we are</span>
            <h2 className="mt-4 font-display text-display-lg font-semibold leading-tight text-balance">
              Built by young people, for a shared future.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Bhartiya Yuva Shakti Sangathan is a youth-driven movement with a simple belief: India&rsquo;s
                progress depends on young people who participate rather than wait on the sidelines.
              </p>
              <p>
                We bring individuals together into local chapters, connect chapters into a national
                network, and give that network things to actually do — leadership programmes, skilling
                missions, service drives, campaigns and more.
              </p>
              <p>
                We are deliberately non-partisan and mission-first. The platform matters more than any
                single name, and the work matters more than any single event.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ink-soft">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Youth", v: "We start with young people and their potential." },
            { k: "Unity", v: "We connect people across regions, backgrounds and interests." },
            { k: "Action", v: "We turn intentions into visible local initiatives." },
            { k: "Nation Building", v: "We link local action into national momentum." },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-xl font-bold text-saffron">{item.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          label="How the movement works"
          title="From discovering us to leading change"
          description="A philosophy, not a bureaucracy."
        />
        <div className="mt-10">
          <HowItWorks />
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
