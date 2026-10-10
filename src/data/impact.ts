import type { ImpactMetric } from "@/types";

// IMPORTANT: These are DEMO placeholders for development only.
// Production metrics must come from real, verified organisational data
// (connect Neon and compute from live tables). Never publish invented numbers.
export const DEMO_IMPACT = true;

export const impactMetrics: ImpactMetric[] = [
  { label: "Active Chapters", value: 10, note: "Demo figure — replace with verified count." },
  { label: "States & UTs Reached", value: 9, note: "Demo figure — replace with verified count." },
  { label: "Programs Running", value: 9, note: "Demo figure — replace with verified count." },
  { label: "Events This Quarter", value: 8, note: "Demo figure — replace with verified count." },
  { label: "Registered Interest", value: null, suffix: "", note: "Will reflect real join submissions." },
  { label: "Volunteers Mobilised", value: null, note: "Will reflect verified volunteer data." },
];
