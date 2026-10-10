"use client";

import * as React from "react";
import { stateNodes, networkEdges } from "@/data/india";
import { chapters } from "@/data/chapters";
import { events as allEvents } from "@/data/events";

// Derive verified counts from live data (never fabricate).
const chapterCountByState = chapters.reduce<Record<string, number>>((acc, c) => {
  acc[c.state] = (acc[c.state] ?? 0) + 1;
  return acc;
}, {});
const eventCountByState = allEvents.reduce<Record<string, number>>((acc, e) => {
  acc[e.state] = (acc[e.state] ?? 0) + 1;
  return acc;
}, {});

type Hover = { i: number; x: number; y: number } | null;

export function IndiaNetwork({ compact = false }: { compact?: boolean }) {
  const [hover, setHover] = React.useState<Hover>(null);
  const [parallax, setParallax] = React.useState({ x: 0, y: 0 });
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const reduce = usePrefersReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: px * 10, y: py * 10 });
  };

  const active = hover?.i ?? null;
  const neighbours = React.useMemo(() => {
    if (active === null) return new Set<number>();
    const s = new Set<number>();
    networkEdges.forEach(([a, b]) => {
      if (a === active) s.add(b);
      if (b === active) s.add(a);
    });
    return s;
  }, [active]);

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={() => {
        setHover(null);
        setParallax({ x: 0, y: 0 });
      }}
      className="relative aspect-square w-full select-none"
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="Interactive map of India showing the youth network across states"
        style={{
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <defs>
          <radialGradient id="net-glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="rgba(255,106,26,0.12)" />
            <stop offset="100%" stopColor="rgba(255,106,26,0)" />
          </radialGradient>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6A1A" />
            <stop offset="100%" stopColor="#0E8A57" />
          </linearGradient>
        </defs>

        <circle cx="45" cy="45" r="55" fill="url(#net-glow)" />

        {/* edges */}
        <g stroke="url(#edge-grad)" strokeLinecap="round">
          {networkEdges.map(([a, b], idx) => {
            const na = stateNodes[a];
            const nb = stateNodes[b];
            const isActive =
              active !== null && (a === active || b === active);
            return (
              <line
                key={idx}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                strokeWidth={isActive ? 0.7 : 0.28}
                opacity={active === null ? 0.35 : isActive ? 0.9 : 0.12}
                style={{ transition: "opacity 0.3s, stroke-width 0.3s" }}
              />
            );
          })}
        </g>

        {/* nodes */}
        <g>
          {stateNodes.map((n, i) => {
            const hasChapter = Boolean(chapterCountByState[n.name]);
            const isActive = active === i;
            const isNeighbour = neighbours.has(i);
            const dim = active !== null && !isActive && !isNeighbour;
            const r = hasChapter ? 1.5 : 1.0;
            return (
              <g
                key={n.code}
                transform={`translate(${n.x} ${n.y})`}
                onMouseEnter={() => setHover({ i, x: n.x, y: n.y })}
                onFocus={() => setHover({ i, x: n.x, y: n.y })}
                tabIndex={0}
                role="button"
                aria-label={`${n.name}: ${chapterCountByState[n.name] ?? 0} chapters`}
                className="cursor-pointer outline-none"
                style={{ opacity: dim ? 0.3 : 1, transition: "opacity 0.3s" }}
              >
                {hasChapter && !reduce && (
                  <circle
                    r={r + 1.4}
                    fill="none"
                    stroke="#FF6A1A"
                    strokeWidth="0.3"
                    opacity="0.5"
                    className="animate-pulse-node"
                    style={{ animationDelay: `${(i % 6) * 0.4}s` }}
                  />
                )}
                <circle
                  r={isActive ? r + 1 : r}
                  fill={hasChapter ? "#FF6A1A" : "#5b5b66"}
                  style={{ transition: "r 0.2s" }}
                />
                <circle r={r * 0.4} fill="#0A0A0D" opacity="0.4" />
              </g>
            );
          })}
        </g>
      </svg>

      {/* tooltip */}
      {hover !== null && (
        <Tooltip node={hover} />
      )}

      <p className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
        {compact ? "" : "Hover a node · schematic network"}
      </p>
    </div>
  );
}

function Tooltip({ node }: { node: { i: number; x: number; y: number } }) {
  const n = stateNodes[node.i];
  const chapters = chapterCountByState[n.name];
  const events = eventCountByState[n.name];
  return (
    <div
      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg border border-border bg-ink-raised/95 px-3 py-2 text-left shadow-xl backdrop-blur"
      style={{ left: `${node.x}%`, top: `${node.y - 2}%` }}
    >
      <p className="whitespace-nowrap text-xs font-semibold text-foreground">{n.name}</p>
      <p className="whitespace-nowrap text-[11px] text-muted-foreground">
        {chapters ? `${chapters} chapter${chapters > 1 ? "s" : ""}` : "Chapters forming"}
        {events ? ` · ${events} event${events > 1 ? "s" : ""}` : ""}
      </p>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const on = () => setReduce(mq.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return reduce;
}
