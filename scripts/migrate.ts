/**
 * Migration runner that applies Drizzle migrations to Neon over the HTTP
 * driver (fetch-based), avoiding the websocket path that `drizzle-kit migrate`
 * uses — which can fail with `wss://localhost` errors on some setups.
 *
 * Run: npm run db:migrate
 */
import { readFileSync } from "fs";

// Load DATABASE_URL from .env.local if it isn't already in the environment.
if (!process.env.DATABASE_URL) {
  try {
    for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*DATABASE_URL\s*=\s*"?([^"\n]+?)"?\s*$/);
      if (m) process.env.DATABASE_URL = m[1];
    }
  } catch {
    /* no .env.local — fall through */
  }
}

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error(
      "DATABASE_URL is not set. Add it to .env.local, then run: npm run db:migrate",
    );
    process.exit(1);
  }

  const { neon } = await import("@neondatabase/serverless");
  const { drizzle } = await import("drizzle-orm/neon-http");
  const { migrate } = await import("drizzle-orm/neon-http/migrator");

  const sql = neon(url);
  const db = drizzle(sql);

  console.log("Applying migrations to Neon…");
  await migrate(db, { migrationsFolder: "./src/db/migrations" });
  console.log("✓ Migrations applied. Your tables are ready.");
}

main().catch((err) => {
  console.error("Migration failed:", err?.message ?? err);
  process.exit(1);
});
