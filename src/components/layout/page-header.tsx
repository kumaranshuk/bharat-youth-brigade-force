import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/3 h-72 w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(255,106,26,0.12),transparent)]" />
      <div className="container relative pb-14">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              {breadcrumbs.map((b, i) => (
                <li key={i} className="flex items-center gap-1">
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-foreground">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && <span className="section-label">{eyebrow}</span>}
          <h1 className="mt-4 font-display text-display-lg font-extrabold tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </header>
  );
}
