import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)} {...props}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? <span className="section-label">{label}</span> : null}
      <h2 className="mt-4 font-display text-display-lg font-semibold text-balance text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}
