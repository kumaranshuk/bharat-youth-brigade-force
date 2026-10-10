import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ResourcesExplorer } from "@/components/explorers/resources-explorer";
import { resources, resourceTypes } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, reports, articles and documents to help young people participate, lead and build.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Guides, reports & tools"
        description="Practical material to help you start a chapter, run a drive, build a resume, and more."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />
      <div className="container py-14">
        <ResourcesExplorer resources={resources} types={resourceTypes} />
      </div>
    </>
  );
}
