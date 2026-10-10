/**
 * Optional seed script. Only relevant once you connect Neon (DATABASE_URL).
 * The public site does NOT need this to run — content (programs, events,
 * chapters, stories, resources) is served from typed data in `src/data`.
 *
 * This script simply verifies the database connection and ensures the
 * submission tables exist by running a trivial query. Extend it if you later
 * move structured content into Postgres.
 *
 * Run: npm run db:seed
 */
import { getDb, isDatabaseConfigured } from "../src/db";
import { joinSubmissions } from "../src/db/schema";

async function main() {
  if (!isDatabaseConfigured()) {
    console.log(
      "No DATABASE_URL set. The site runs with local file storage — nothing to seed.",
    );
    return;
  }
  const db = getDb();
  if (!db) throw new Error("Database client unavailable.");
  const rows = await db.select().from(joinSubmissions).limit(1);
  console.log(`Database reachable. join_submissions currently has ${rows.length ? "≥1" : "0"} sample row(s).`);
  console.log("Seed complete. (No demo rows inserted — production data should be real.)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
