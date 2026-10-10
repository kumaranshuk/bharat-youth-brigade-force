"use client";

import * as React from "react";
import type { Program } from "@/types";
import { ProgramCard } from "@/components/cards/program-card";
import { FilterChip } from "@/components/ui/filter-chip";
import { EmptyState } from "@/components/ui/empty-state";

export function ProgramsExplorer({ programs }: { programs: Program[] }) {
  const categories = React.useMemo(
    () => Array.from(new Set(programs.map((p) => p.category))).sort(),
    [programs],
  );
  const [cat, setCat] = React.useState("All");
  const filtered = cat === "All" ? programs : programs.filter((p) => p.category === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
            {c}
          </FilterChip>
        ))}
      </div>
      {filtered.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      ) : (
        <EmptyState className="mt-8" title="No programs in this category yet" />
      )}
    </div>
  );
}
