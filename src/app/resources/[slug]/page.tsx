import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, ArrowLeft, Clock } from "lucide-react";
import { resources, getResource } from "@/data/resources";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const resource = getResource(params.slug);
  if (!resource) return { title: "Resource not found" };
  return {
    title: resource.title,
    description: resource.summary,
    alternates: { canonical: `/resources/${resource.slug}` },
  };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = getResource(params.slug);
  if (!resource) notFound();

  return (
    <>
      <PageHeader
        eyebrow={resource.type}
        title={resource.title}
        description={resource.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: resource.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="outline" className="capitalize">{resource.type}</Badge>
          <span>{formatDate(resource.publishedAt)}</span>
          {resource.readingMinutes && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {resource.readingMinutes} min read
            </span>
          )}
        </div>
      </PageHeader>

      <div className="container py-14">
        <div className="mx-auto max-w-2xl">
          <div className="text-lg leading-relaxed text-muted-foreground">
            <p>{resource.body}</p>
          </div>

          {resource.fileUrl ? (
            <div className="mt-10 flex items-center justify-between rounded-2xl border border-border bg-card p-5">
              <div>
                <p className="font-medium text-foreground">Download this resource</p>
                <p className="text-sm text-muted-foreground">Stored securely on our media CDN.</p>
              </div>
              <ButtonLink href={resource.fileUrl}>
                <Download className="h-4 w-4" /> Download
              </ButtonLink>
            </div>
          ) : null}

          <div className="mt-10 border-t border-border pt-6">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-saffron hover:text-saffron-soft"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all resources
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
