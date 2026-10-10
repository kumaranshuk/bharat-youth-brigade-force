import type { StateNode } from "@/types";

// Stylised relative coordinates (0–100) for an abstract India network map.
// These are intentionally schematic — this is a network visualisation, not a
// survey-accurate map. Chapter/event counts are derived from live data
// elsewhere; nulls here mean "no verified data yet" (never fabricate numbers).
export const stateNodes: StateNode[] = [
  { code: "JK", name: "Jammu & Kashmir", x: 27, y: 6, chapters: null, events: null },
  { code: "PB", name: "Punjab", x: 25, y: 15, chapters: null, events: null },
  { code: "HR", name: "Haryana", x: 30, y: 19, chapters: null, events: null },
  { code: "DL", name: "Delhi", x: 33, y: 22, chapters: null, events: null },
  { code: "RJ", name: "Rajasthan", x: 19, y: 29, chapters: null, events: null },
  { code: "UP", name: "Uttar Pradesh", x: 43, y: 27, chapters: null, events: null },
  { code: "BR", name: "Bihar", x: 56, y: 31, chapters: null, events: null },
  { code: "GJ", name: "Gujarat", x: 13, y: 41, chapters: null, events: null },
  { code: "MP", name: "Madhya Pradesh", x: 35, y: 39, chapters: null, events: null },
  { code: "JH", name: "Jharkhand", x: 54, y: 39, chapters: null, events: null },
  { code: "WB", name: "West Bengal", x: 62, y: 40, chapters: null, events: null },
  { code: "AS", name: "Assam", x: 76, y: 30, chapters: null, events: null },
  { code: "MH", name: "Maharashtra", x: 27, y: 51, chapters: null, events: null },
  { code: "OD", name: "Odisha", x: 53, y: 48, chapters: null, events: null },
  { code: "TG", name: "Telangana", x: 38, y: 55, chapters: null, events: null },
  { code: "AP", name: "Andhra Pradesh", x: 43, y: 63, chapters: null, events: null },
  { code: "KA", name: "Karnataka", x: 32, y: 65, chapters: null, events: null },
  { code: "KL", name: "Kerala", x: 31, y: 80, chapters: null, events: null },
  { code: "TN", name: "Tamil Nadu", x: 39, y: 79, chapters: null, events: null },
];

// Edges between nodes to draw the "network". Index pairs into stateNodes.
export const networkEdges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [4, 8], [5, 6], [6, 10],
  [6, 9], [5, 8], [8, 9], [9, 10], [10, 11], [5, 12], [8, 13],
  [12, 14], [14, 15], [14, 16], [16, 17], [16, 18], [15, 18],
  [12, 16], [9, 13], [4, 12], [3, 4], [13, 15],
];
