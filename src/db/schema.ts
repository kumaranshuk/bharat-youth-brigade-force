import { sql } from "drizzle-orm";
import {
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// Only the small amount of persistent data the site actually needs:
// public form submissions. Structured content (programs/events/chapters/…)
// lives in code as typed data and can migrate to tables later if needed.

export const joinSubmissions = pgTable(
  "join_submissions",
  {
    id: serial("id").primaryKey(),
    fullName: varchar("full_name", { length: 80 }).notNull(),
    mobile: varchar("mobile", { length: 20 }).notNull(),
    email: varchar("email", { length: 120 }).notNull(),
    state: varchar("state", { length: 60 }).notNull(),
    district: varchar("district", { length: 60 }).notNull(),
    city: varchar("city", { length: 60 }).notNull(),
    ageGroup: varchar("age_group", { length: 16 }).notNull(),
    profession: varchar("profession", { length: 80 }).notNull(),
    skills: text("skills"),
    interests: jsonb("interests").$type<string[]>().notNull(),
    participation: varchar("participation", { length: 40 }).notNull(),
    message: text("message"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .default(sql`now()`),
  },
  (t) => ({
    stateIdx: index("join_state_idx").on(t.state),
    createdIdx: index("join_created_idx").on(t.createdAt),
  }),
);

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 80 }).notNull(),
  email: varchar("email", { length: 120 }).notNull(),
  mobile: varchar("mobile", { length: 20 }),
  subject: varchar("subject", { length: 120 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 120 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

// Optional media registry for R2-hosted assets (used when storage is wired).
export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 255 }).notNull().unique(),
  url: text("url").notNull(),
  contentType: varchar("content_type", { length: 120 }),
  bytes: integer("bytes"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

export type JoinRow = typeof joinSubmissions.$inferInsert;
export type ContactRow = typeof contactSubmissions.$inferInsert;
export type NewsletterRow = typeof newsletterSubscriptions.$inferInsert;
