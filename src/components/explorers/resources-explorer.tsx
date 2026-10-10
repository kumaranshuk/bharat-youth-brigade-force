"use client";

import * as React from "react";
import Link from "next/link";
import { Search, FileText, FileX, ArrowUpRight, Download } from "lucide-react";
import type { Resource } from "@/types";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/field";
import { FilterChip } from "@/components/ui/filter-chip";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function ResourcesExplorer({
  resources,
  types,
}: {
  resources: Resource[];
  types: string[];
}) {
  const [q, setQ] = React.useState("");
  const [type, setType] = React.useState("All");

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return resources
      .filter((r) => (type === "All" ? true : r.type === type))
      .filter((r) =>
        !query ? true : `${r.title} ${r.summary} ${r.type}`.toLowerCase().includes(query),
      )
      .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  }, [resources, q, type]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search resources…"
          className="pl-10"
          aria-label="Search resources"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["All", ...types].map((t) => (
          <FilterChip key={t} active={type === t} onClick={() => setType(t)}>
            <span className="capitalize">{t}</span>
          </FilterChip>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
      </p>

      {filtered.length ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {filtered.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/resources/${r.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-saffron/40"
              >
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="outline" className="capitalize">
                    <FileText className="h-3 w-3" /> {r.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(r.publishedAt)}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron">
                  {r.fileUrl ? (
                    <>
                      Download <Download className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                  {r.readingMinutes ? <span className="text-muted-foreground"> · {r.readingMinutes} min</span> : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          className="mt-4"
          icon={FileX}
          title="No resources found"
          description="Try a different search term or category."
        />
      )}
    </div>
  );
}
