import { PageHeader } from "@/components/layout/page-header";

export function LegalLayout({
  title,
  eyebrow = "Legal",
  updated,
  intro,
  children,
}: {
  title: string;
  eyebrow?: string;
  updated: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <div className="container py-14">
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-sm text-muted-foreground">Last updated: {updated}</p>
          <div className="space-y-8 leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
