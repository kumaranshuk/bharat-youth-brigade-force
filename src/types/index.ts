export type ProgramStatus = "active" | "upcoming" | "ongoing";

export interface Program {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  status: ProgramStatus;
  location?: string;
  image: string;
  highlights: string[];
  outcomes: string[];
}

export type EventMode = "in-person" | "online" | "hybrid";

export interface OrgEvent {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  date: string; // ISO
  endDate?: string;
  mode: EventMode;
  city: string;
  state: string;
  venue?: string;
  organiser: string;
  image: string;
  registrationOpen: boolean;
}

export interface Chapter {
  slug: string;
  name: string;
  state: string;
  district: string;
  city: string;
  pincode: string;
  coordinator: string;
  contactPublic: string;
  established: string;
  description: string;
  focusAreas: string[];
  memberCount: number;
  image: string;
}

export interface Story {
  slug: string;
  name: string;
  role: string;
  location: string;
  category: string;
  excerpt: string;
  image: string;
  quote: string;
  body: { started: string; did: string; changed: string };
}

export type ResourceType = "guide" | "report" | "article" | "document" | "announcement";

export interface Resource {
  slug: string;
  title: string;
  type: ResourceType;
  summary: string;
  body: string;
  publishedAt: string;
  fileUrl?: string;
  readingMinutes?: number;
}

export interface StateNode {
  code: string;
  name: string;
  x: number; // 0-100 relative coords on stylised India map
  y: number;
  chapters: number | null;
  events: number | null;
}

export interface ImpactMetric {
  label: string;
  value: number | null;
  suffix?: string;
  note: string;
}
