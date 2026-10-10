"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Search as SearchIcon, ArrowUpRight, SearchX } from "lucide-react";
import { search, searchIndex, type SearchCategory } from "@/lib/search";
import { Input } from "@/components/ui/field";
import { Badge } from "@/components/ui/badge";
import { FilterChip } from "@/components/ui/filter-chip";
import { EmptyState } from "@/components/ui/empty-state";

const categories: (SearchCategory | "All")[] = [
  "All",
  "Program",
  "Event",
  "Chapter",
  "Story",
  "Resource",
  "Page",
];

const suggestions = ["Leadership", "Bengaluru", "Volunteer", "Skills", "Chapter", "Careers"];

export function SearchClient() {
  const params = useSearchParams();
  const router = useRouter();
  const initialQ = params.get("q") ?? "";
  const [q, setQ] = React.useState(initialQ);
  const [cat, setCat] = React.useState<SearchCategory | "All">("All");

  // keep URL in sync (shallow) for shareable searches
  React.useEffect(() => {
    const t = setTimeout(() => {
      const usp = new URLSearchParams();
      if (q) usp.set("q", q);
      router.replace(`/search${usp.toString() ? `?${usp}` : ""}`, { scroll: false });
    }, 250);
    return () => clearTimeout(t);
  }, [q, router]);

  const results = React.useMemo(
    () => search(q, cat === "All" ? undefined : cat),
    [q, cat],
  );

  const hasQuery = q.trim().length > 0;

  return (
    <div>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search programs, events, chapters, stories, resources…"
          className="h-14 pl-12 text-base"
          aria-label="Search the site"
        />
      </div>

      {!hasQuery && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Try:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQ(s)}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-saffron/50 hover:text-saffron"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
            {c}
          </FilterChip>
        ))}
      </div>

      {hasQuery ? (
        <>
          <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
            {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{q}&rdquo;
          </p>
          {results.length ? (
            <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex items-center justify-between gap-4 bg-card px-5 py-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{r.category}</Badge>
                        <span className="truncate font-medium text-foreground">{r.title}</span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                        {r.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-saffron" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              className="mt-4"
              icon={SearchX}
              title="No results found"
              description="Try a broader term, check your spelling, or browse by category above."
            />
          )}
        </>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">
          Search across {searchIndex.length} programs, events, chapters, stories, resources and pages.
        </p>
      )}
    </div>
  );
}
