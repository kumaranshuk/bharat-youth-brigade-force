import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { EventsExplorer } from "@/components/explorers/events-explorer";
import { events, eventCategories } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse upcoming Bhartiya Yuva Shakti Sangathan events — workshops, service drives, meetups and campaigns across India.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Show up. Take part."
        description="Find workshops, drives, meetups and campaigns near you. No login needed to explore or register interest."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />
      <div className="container py-14">
        <EventsExplorer events={events} categories={eventCategories} />
      </div>
    </>
  );
}
