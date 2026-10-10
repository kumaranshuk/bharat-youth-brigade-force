import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Mail, Calendar, ArrowRight, Users } from "lucide-react";
import { chapters, getChapter } from "@/data/chapters";
import { events } from "@/data/events";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { EventCard } from "@/components/cards/event-card";
import { PageHeader } from "@/components/layout/page-header";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const chapter = getChapter(params.slug);
  if (!chapter) return { title: "Chapter not found" };
  return {
    title: chapter.name,
    description: chapter.description,
    alternates: { canonical: `/chapters/${chapter.slug}` },
  };
}

export default function ChapterDetailPage({ params }: { params: { slug: string } }) {
  const chapter = getChapter(params.slug);
  if (!chapter) notFound();

  const localEvents = events.filter((e) => e.state === chapter.state).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`${chapter.city}, ${chapter.state}`}
        title={chapter.name}
        description={chapter.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Chapters", href: "/chapters" },
          { label: chapter.name },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          {chapter.focusAreas.map((f) => (
            <Badge key={f} variant="saffron">{f}</Badge>
          ))}
        </div>
      </PageHeader>

      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <article>
            <SmartImage
              src={chapter.image}
              alt={chapter.name}
              width={1000}
              height={560}
              wrapperClassName="aspect-[16/9] rounded-2xl"
            />
            <h2 className="mt-8 font-display text-2xl font-semibold">About this chapter</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{chapter.description}</p>
            <p className="mt-3 text-muted-foreground">
              The {chapter.name} focuses on {chapter.focusAreas.join(", ").toLowerCase()}, running
              regular activities across {chapter.district} district and welcoming new participants
              throughout the year.
            </p>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Chapter details</h2>
              <div className="mt-4 space-y-4">
                <Row icon={MapPin} label="Location">
                  {chapter.city}, {chapter.district}, {chapter.state} — {chapter.pincode}
                </Row>
                <Row icon={Calendar} label="Established">{chapter.established}</Row>
                <Row icon={Users} label="Coordination">{chapter.coordinator}</Row>
                <Row icon={Mail} label="Public contact">
                  <a href={`mailto:${chapter.contactPublic}`} className="text-saffron hover:underline">
                    {chapter.contactPublic}
                  </a>
                </Row>
              </div>
              <ButtonLink href="/join" className="mt-6 w-full">
                Join this chapter <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </aside>
        </div>

        {localEvents.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-semibold">Events in {chapter.state}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {localEvents.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function Row({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground/70">{label}</p>
        <p className="text-sm text-foreground">{children}</p>
      </div>
    </div>
  );
}
