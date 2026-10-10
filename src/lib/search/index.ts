import { programs } from "@/data/programs";
import { events } from "@/data/events";
import { chapters } from "@/data/chapters";
import { stories } from "@/data/stories";
import { resources } from "@/data/resources";

export type SearchCategory =
  | "Program"
  | "Event"
  | "Chapter"
  | "Story"
  | "Resource"
  | "Page";

export interface SearchDoc {
  title: string;
  category: SearchCategory;
  href: string;
  description: string;
  keywords: string;
}

const staticPages: SearchDoc[] = [
  { title: "About", category: "Page", href: "/about", description: "Who we are and why we exist.", keywords: "about mission story movement" },
  { title: "Our Mission", category: "Page", href: "/mission", description: "Youth, Unity, Action, Development.", keywords: "mission pillars values" },
  { title: "Impact", category: "Page", href: "/impact", description: "The difference we aim to make.", keywords: "impact data metrics results" },
  { title: "Leadership", category: "Page", href: "/leadership", description: "The people building the movement.", keywords: "leadership team founder council" },
  { title: "Join the Movement", category: "Page", href: "/join", description: "Register your interest to participate.", keywords: "join participate volunteer member" },
  { title: "Contact", category: "Page", href: "/contact", description: "Get in touch with the team.", keywords: "contact email message" },
];

// Build a flat, in-memory index. PostgreSQL/text search is unnecessary at this
// scale — this stays fast, simple and dependency-free per the spec.
export const searchIndex: SearchDoc[] = [
  ...programs.map<SearchDoc>((p) => ({
    title: p.title,
    category: "Program",
    href: `/programs/${p.slug}`,
    description: p.summary,
    keywords: `${p.category} ${p.highlights.join(" ")} ${p.location ?? ""}`,
  })),
  ...events.map<SearchDoc>((e) => ({
    title: e.title,
    category: "Event",
    href: `/events/${e.slug}`,
    description: e.summary,
    keywords: `${e.category} ${e.city} ${e.state} ${e.organiser}`,
  })),
  ...chapters.map<SearchDoc>((c) => ({
    title: c.name,
    category: "Chapter",
    href: `/chapters/${c.slug}`,
    description: c.description,
    keywords: `${c.state} ${c.district} ${c.city} ${c.pincode} ${c.focusAreas.join(" ")}`,
  })),
  ...stories.map<SearchDoc>((s) => ({
    title: `${s.name} — ${s.role}`,
    category: "Story",
    href: `/stories/${s.slug}`,
    description: s.excerpt,
    keywords: `${s.category} ${s.location}`,
  })),
  ...resources.map<SearchDoc>((r) => ({
    title: r.title,
    category: "Resource",
    href: `/resources/${r.slug}`,
    description: r.summary,
    keywords: `${r.type}`,
  })),
  ...staticPages,
];

export function search(query: string, category?: SearchCategory): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return category ? searchIndex.filter((d) => d.category === category) : [];
  const terms = q.split(/\s+/).filter(Boolean);
  return searchIndex
    .map((doc) => {
      const haystack = `${doc.title} ${doc.description} ${doc.keywords} ${doc.category}`.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (doc.title.toLowerCase().includes(term)) score += 5;
        else if (haystack.includes(term)) score += 2;
      }
      return { doc, score };
    })
    .filter((r) => r.score > 0 && (!category || r.doc.category === category))
    .sort((a, b) => b.score - a.score)
    .slice(0, 40)
    .map((r) => r.doc);
}
