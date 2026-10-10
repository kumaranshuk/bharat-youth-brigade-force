import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { SearchClient } from "@/components/search/search-client";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across programs, events, chapters, stories and resources.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Find your way in"
        description="Look across everything — programs, events, chapters, stories and resources."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <div className="container py-14">
        <div className="mx-auto max-w-3xl">
          <Suspense fallback={<div className="h-14 animate-pulse rounded-xl bg-muted" />}>
            <SearchClient />
          </Suspense>
        </div>
      </div>
    </>
  );
}
