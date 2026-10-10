import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ChapterFinder } from "@/components/explorers/chapter-finder";
import { IndiaNetwork } from "@/components/visuals/india-network";
import { chapters, chapterStates } from "@/data/chapters";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Find your local Bhartiya Yuva Shakti Sangathan chapter by state, district, city or PIN code — or start one where there isn't one yet.",
  alternates: { canonical: "/chapters" },
};

export default function ChaptersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Chapters"
        title="Find your local chapter"
        description="The movement lives locally. Search for a chapter near you — and if there isn't one yet, that's your opening to start it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Chapters" }]}
      />
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <ChapterFinder chapters={chapters} states={chapterStates} />
          <aside className="hidden rounded-2xl border border-border bg-card p-6 lg:block">
            <h2 className="font-display text-lg font-semibold">The network, at a glance</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Highlighted nodes show states with active chapters.
            </p>
            <div className="mt-4">
              <IndiaNetwork compact />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
