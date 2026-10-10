import type { Resource } from "@/types";

// NOTE: Demo-labeled sample content for development.
export const resources: Resource[] = [
  {
    slug: "starting-a-local-chapter",
    title: "How to Start a Local Chapter",
    type: "guide",
    summary:
      "A practical, step-by-step guide for young people who want to bring the movement to their own city or town.",
    body:
      "Starting a chapter begins with a small, committed group and a clear local purpose. This guide walks through gathering a founding team, identifying a first project, running your first meeting, staying consistent, and connecting with the national network. The most important ingredient is not resources — it is showing up regularly.",
    publishedAt: "2026-07-10",
    readingMinutes: 8,
  },
  {
    slug: "volunteer-handbook",
    title: "Volunteer Handbook",
    type: "document",
    summary: "Everything a new volunteer needs — expectations, safety, roles and how to make the most of your time.",
    body:
      "The Volunteer Handbook covers our shared values, code of conduct, safety guidance, common volunteer roles, and how contribution is recognised. It is designed to help every volunteer feel prepared and supported from day one.",
    publishedAt: "2026-06-22",
    readingMinutes: 12,
  },
  {
    slug: "youth-participation-report",
    title: "Youth Participation: A Working Note",
    type: "report",
    summary:
      "A short working note on why structured platforms matter for translating youth energy into action.",
    body:
      "This working note discusses the gap between youth potential and youth participation, and the role community, access and mentorship play in closing it. It frames the organisation's approach and how impact will be measured over time using real data.",
    publishedAt: "2026-05-30",
    readingMinutes: 10,
  },
  {
    slug: "public-speaking-basics",
    title: "Public Speaking Basics for Young Leaders",
    type: "article",
    summary: "Simple, practical techniques to speak with clarity and confidence — no talent required.",
    body:
      "Public speaking is a skill, not a gift. This article covers structuring a short talk, managing nerves, using your voice, and practising deliberately. It pairs with the Youth Leadership Academy modules.",
    publishedAt: "2026-07-28",
    readingMinutes: 6,
  },
  {
    slug: "resume-that-works",
    title: "Building a Resume That Works",
    type: "guide",
    summary: "How to write a clear, honest one-page resume — especially without formal experience.",
    body:
      "A good resume tells a simple, true story. This guide covers structure, highlighting projects and volunteering, tailoring for roles, and common mistakes to avoid. Ideal for first-time job seekers.",
    publishedAt: "2026-08-05",
    readingMinutes: 7,
  },
  {
    slug: "organising-a-service-drive",
    title: "Organising a Community Service Drive",
    type: "guide",
    summary: "A checklist-driven guide to planning a safe, effective and welcoming service drive.",
    body:
      "From choosing a location and getting permissions to logistics, safety and follow-up, this guide helps chapters run service drives that are impactful and sustainable rather than one-off events.",
    publishedAt: "2026-06-15",
    readingMinutes: 9,
  },
  {
    slug: "digital-safety-basics",
    title: "Digital Safety Basics",
    type: "article",
    summary: "Core habits for staying safe online — passwords, privacy, scams and misinformation.",
    body:
      "Part of the Digital Awareness Campaign, this article covers strong passwords, privacy settings, recognising scams, and thinking critically about what we share and believe online.",
    publishedAt: "2026-08-12",
    readingMinutes: 5,
  },
  {
    slug: "annual-focus-announcement",
    title: "Our Focus for the Year Ahead",
    type: "announcement",
    summary: "An announcement outlining the themes and campaigns the movement will rally around this year.",
    body:
      "This announcement sets out the shared themes for the year — leadership, skills, service and digital awareness — and how chapters can align their local work with national campaigns.",
    publishedAt: "2026-08-01",
    readingMinutes: 4,
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}

export const resourceTypes = Array.from(new Set(resources.map((r) => r.type))).sort();
