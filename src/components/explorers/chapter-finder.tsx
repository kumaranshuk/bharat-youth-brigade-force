"use client";

import * as React from "react";
import { Search, MapPinOff } from "lucide-react";
import type { Chapter } from "@/types";
import { ChapterCard } from "@/components/cards/chapter-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Input, Select } from "@/components/ui/field";
import { ButtonLink } from "@/components/ui/button";

export function ChapterFinder({
  chapters,
  states,
}: {
  chapters: Chapter[];
  states: string[];
}) {
  const [q, setQ] = React.useState("");
  const [state, setState] = React.useState("All");

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return chapters
      .filter((c) => (state === "All" ? true : c.state === state))
      .filter((c) =>
        !query
          ? true
          : `${c.name} ${c.city} ${c.district} ${c.state} ${c.pincode}`
              .toLowerCase()
              .includes(query),
      );
  }, [chapters, q, state]);

  return (
    <div>
      <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by city, district or PIN code…"
            className="pl-10"
            aria-label="Search chapters"
          />
        </div>
        <Select
          value={state}
          onChange={(e) => setState(e.target.value)}
          aria-label="Filter by state"
          className="sm:w-56"
        >
          <option value="All">All states</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "chapter" : "chapters"} found
      </p>

      {filtered.length ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <ChapterCard key={c.slug} chapter={c} />
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-4"
          icon={MapPinOff}
          title="No chapter here yet"
          description="There isn't a chapter matching your search yet — which means there's room for one. You could be the person who starts it."
          action={<ButtonLink href="/join">Start a chapter</ButtonLink>}
        />
      )}
    </div>
  );
}
