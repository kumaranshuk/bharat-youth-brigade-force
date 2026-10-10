import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { programs } from "@/data/programs";
import { events } from "@/data/events";
import { chapters } from "@/data/chapters";
import { stories } from "@/data/stories";
import { resources } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/mission",
    "/programs",
    "/events",
    "/chapters",
    "/stories",
    "/impact",
    "/leadership",
    "/resources",
    "/join",
    "/contact",
    "/privacy",
    "/terms",
    "/code-of-conduct",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const dynamicRoutes = [
    ...programs.map((p) => `/programs/${p.slug}`),
    ...events.map((e) => `/events/${e.slug}`),
    ...chapters.map((c) => `/chapters/${c.slug}`),
    ...stories.map((s) => `/stories/${s.slug}`),
    ...resources.map((r) => `/resources/${r.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
