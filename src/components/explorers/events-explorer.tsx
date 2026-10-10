"use client";

import * as React from "react";
import { Search, CalendarX } from "lucide-react";
import type { OrgEvent } from "@/types";
import { EventCard } from "@/components/cards/event-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export function EventsExplorer({
  events,
  categories,
}: {
  events: OrgEvent[];
  categories: string[];
}) {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<string>("All");
  const [mode, setMode] = React.useState<string>("All");

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return events
      .filter((e) => (cat === "All" ? true : e.category === cat))
      .filter((e) => (mode === "All" ? true : e.mode === mode))
      .filter((e) =>
        !query
          ? true
          : `${e.title} ${e.city} ${e.state} ${e.organiser} ${e.summary}`
              .toLowerCase()
              .includes(query),
      )
      .sort((a, b) => +new Date(a.date) - +new Date(b.date));
  }, [events, q, cat, mode]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search events, cities, organisers…"
            className="pl-10"
            aria-label="Search events"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", "in-person", "online", "hybrid"].map((m) => (
            <Chip key={m} active={mode === m} onClick={() => setMode(m)}>
              {m === "All" ? "All modes" : m === "in-person" ? "In person" : m[0].toUpperCase() + m.slice(1)}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
            {c}
          </Chip>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "event" : "events"}
      </p>

      {filtered.length ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-4"
          icon={CalendarX}
          title="No events match your filters"
          description="Try clearing filters or searching a different city or category."
        />
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-saffron/60 bg-saffron/10 text-saffron"
          : "border-border text-muted-foreground hover:border-border/80 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
