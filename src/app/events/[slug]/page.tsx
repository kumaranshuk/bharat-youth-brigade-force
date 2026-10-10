import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { events, getEvent } from "@/data/events";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { EventCard } from "@/components/cards/event-card";
import { PageHeader } from "@/components/layout/page-header";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = getEvent(params.slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.summary,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: { title: event.title, description: event.summary, images: [event.image] },
  };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug);
  if (!event) notFound();

  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);
  const time = new Date(event.date).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    endDate: event.endDate ?? event.date,
    eventAttendanceMode:
      event.mode === "online"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
    location:
      event.mode === "online"
        ? { "@type": "VirtualLocation", url: "/events/" + event.slug }
        : { "@type": "Place", name: event.venue, address: `${event.city}, ${event.state}` },
    description: event.summary,
    organizer: { "@type": "Organization", name: event.organiser },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        eyebrow={event.category}
        title={event.title}
        description={event.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />

      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <article>
            <SmartImage
              src={event.image}
              alt={event.title}
              width={1000}
              height={560}
              wrapperClassName="aspect-[16/9] rounded-2xl"
            />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{event.description}</p>
          </article>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="space-y-4">
                <Detail icon={CalendarDays} label="Date">
                  {formatDate(event.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </Detail>
                <Detail icon={Clock} label="Time">{time} IST</Detail>
                <Detail icon={MapPin} label="Location">
                  {event.venue ? `${event.venue}, ` : ""}
                  {event.city}, {event.state}
                </Detail>
                <Detail icon={Users} label="Organiser">{event.organiser}</Detail>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                {event.registrationOpen ? (
                  <>
                    <Badge variant="green" className="mb-3">Registration open</Badge>
                    <ButtonLink href="/join" className="w-full">
                      Register interest <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                  </>
                ) : (
                  <>
                    <Badge variant="outline" className="mb-3">Registration opening soon</Badge>
                    <ButtonLink href="/join" variant="outline" className="w-full">
                      Get notified
                    </ButtonLink>
                  </>
                )}
                <p className="mt-3 text-center text-xs text-muted-foreground">No login required.</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold">More events</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function Detail({
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
