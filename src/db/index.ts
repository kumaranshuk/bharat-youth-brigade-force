import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Returns a Drizzle client when DATABASE_URL is configured, otherwise null.
// When null, the storage layer transparently falls back to local file storage
// so the entire site runs with zero external services during development.
let cached: NeonHttpDatabase<typeof schema> | null | undefined;

export function getDb() {
  if (cached !== undefined) return cached;
  const url = process.env.DATABASE_URL;
  if (!url) {
    cached = null;
    return cached;
  }
  const sql = neon(url);
  cached = drizzle(sql, { schema });
  return cached;
}

export const isDatabaseConfigured = () => Boolean(process.env.DATABASE_URL);

export { schema };
