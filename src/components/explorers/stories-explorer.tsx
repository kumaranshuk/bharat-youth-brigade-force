"use client";

import * as React from "react";
import type { Story } from "@/types";
import { StoryCard } from "@/components/cards/story-card";
import { FilterChip } from "@/components/ui/filter-chip";
import { EmptyState } from "@/components/ui/empty-state";

export function StoriesExplorer({ stories }: { stories: Story[] }) {
  const categories = React.useMemo(
    () => Array.from(new Set(stories.map((s) => s.category))).sort(),
    [stories],
  );
  const [cat, setCat] = React.useState("All");
  const filtered = cat === "All" ? stories : stories.filter((s) => s.category === cat);

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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>
      ) : (
        <EmptyState className="mt-8" title="No stories in this category yet" />
      )}
    </div>
  );
}
