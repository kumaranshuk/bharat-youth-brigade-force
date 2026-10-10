import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { StoriesExplorer } from "@/components/explorers/stories-explorer";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Real stories from young people across India — where they started, what they did, and what changed.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stories"
        title="Real people. Real change."
        description="Every number in a movement is a person. These are a few of them — where they started, what they did, and what changed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Stories" }]}
      />
      <div className="container py-14">
        <StoriesExplorer stories={stories} />
      </div>
    </>
  );
}
