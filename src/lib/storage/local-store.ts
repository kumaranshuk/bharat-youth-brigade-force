import { promises as fs } from "fs";
import path from "path";

// Minimal append-only JSON store used ONLY when no database is configured.
// Keeps the site fully functional in local development with zero services.
// On read-only environments it degrades to /tmp so submissions never crash.

const primaryDir = path.join(process.cwd(), ".data");
const fallbackDir = path.join("/tmp", "bybf-data");

async function resolveDir() {
  try {
    await fs.mkdir(primaryDir, { recursive: true });
    return primaryDir;
  } catch {
    await fs.mkdir(fallbackDir, { recursive: true });
    return fallbackDir;
  }
}

export async function appendRecord<T extends Record<string, unknown>>(
  collection: string,
  record: T,
): Promise<T & { id: number; createdAt: string }> {
  const dir = await resolveDir();
  const file = path.join(dir, `${collection}.json`);
  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(file, "utf8");
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  const entry = {
    ...record,
    id: existing.length + 1,
    createdAt: new Date().toISOString(),
  };
  existing.push(entry);
  await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf8");
  return entry as T & { id: number; createdAt: string };
}

export async function readRecords<T = unknown>(collection: string): Promise<T[]> {
  const dir = await resolveDir();
  const file = path.join(dir, `${collection}.json`);
  try {
    const raw = await fs.readFile(file, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}
