import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { programs, getProgram } from "@/data/programs";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ProgramCard } from "@/components/cards/program-card";
import { PageHeader } from "@/components/layout/page-header";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const program = getProgram(params.slug);
  if (!program) return { title: "Program not found" };
  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: { title: program.title, description: program.summary, images: [program.image] },
  };
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={program.category}
        title={program.title}
        description={program.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: program.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="green" className="capitalize">{program.status}</Badge>
          {program.location && (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-saffron" /> {program.location}
            </span>
          )}
        </div>
      </PageHeader>

      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <article>
            <SmartImage
              src={program.image}
              alt={program.title}
              width={1000}
              height={560}
              wrapperClassName="aspect-[16/9] rounded-2xl"
            />
            <div className="prose-invert mt-8 max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">{program.description}</p>
            </div>

            <h2 className="mt-10 font-display text-2xl font-semibold">What to expect</h2>
            <ul className="mt-4 space-y-3">
              {program.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted-foreground">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-semibold">Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {program.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-bharat-green" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Get involved</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Interested in {program.title}? Register your interest and we&rsquo;ll connect you
                with the nearest opportunity.
              </p>
              <ButtonLink href="/join" className="mt-5 w-full">
                Join the Movement <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <Link
                href="/events"
                className="mt-3 inline-flex w-full items-center justify-center text-sm font-medium text-saffron hover:text-saffron-soft"
              >
                See related events
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold">More programs</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
