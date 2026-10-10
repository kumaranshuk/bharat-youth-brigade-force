import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ProgramsExplorer } from "@/components/explorers/programs-explorer";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Bhartiya Yuva Shakti Sangathan programs — leadership, skills, careers, entrepreneurship, service, education and national campaigns.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Ways to participate, grow and lead"
        description="Structured programmes that turn youth energy into real skills, service and leadership across India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]}
      />
      <div className="container py-14">
        <ProgramsExplorer programs={programs} />
      </div>
    </>
  );
}
