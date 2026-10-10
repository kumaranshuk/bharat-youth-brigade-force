"use client";

import * as React from "react";
import { Users, Handshake, Zap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    key: "youth",
    title: "Youth",
    hindi: "युवा",
    icon: Users,
    line: "Empower young people.",
    body: "Give every young person the confidence, skills and platform to step forward — wherever they start from.",
  },
  {
    key: "unity",
    title: "Unity",
    hindi: "एकता",
    icon: Handshake,
    line: "Bring communities together.",
    body: "Connect individuals into groups, groups into chapters, and chapters into one national network.",
  },
  {
    key: "action",
    title: "Action",
    hindi: "कर्म",
    icon: Zap,
    line: "Turn ideas into initiatives.",
    body: "Move from intention to impact with real local projects, drives and campaigns that people can see.",
  },
  {
    key: "development",
    title: "Development",
    hindi: "विकास",
    icon: TrendingUp,
    line: "Create meaningful outcomes.",
    body: "Build lasting change — in individuals, communities and the country — measured by real results.",
  },
];

export function MissionPillars() {
  const [active, setActive] = React.useState(0);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p, i) => {
        const Icon = p.icon;
        const isActive = active === i;
        return (
          <button
            key={p.key}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={isActive}
            className={cn(
              "group relative flex flex-col items-start overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300",
              isActive
                ? "border-saffron/50 bg-gradient-to-b from-saffron/10 to-transparent"
                : "border-border bg-card hover:border-border/80",
            )}
          >
            <span
              className={cn(
                "absolute right-4 top-4 font-display text-3xl font-bold transition-colors",
                isActive ? "text-saffron/30" : "text-muted-foreground/15",
              )}
            >
              0{i + 1}
            </span>
            <div
              className={cn(
                "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                isActive ? "bg-saffron text-ink" : "bg-muted text-saffron",
              )}
            >
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              {p.title}
              <span className="ml-2 font-hindi text-base font-medium text-muted-foreground">
                {p.hindi}
              </span>
            </h3>
            <p className="mt-1 text-sm font-medium text-saffron">{p.line}</p>
            <p
              className={cn(
                "grid text-sm text-muted-foreground transition-all duration-300",
                isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <span className="overflow-hidden">{p.body}</span>
            </p>
          </button>
        );
      })}
    </div>
  );
}
