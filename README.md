# Bhartiya Yuva Shakti Sangathan

**भारतीय युवा शक्ति संगठन** — a production website for a national youth movement.

_The youth of India. One network. One purpose._

A fast, accessible, SEO-ready, mobile-first public platform built with a
deliberately simple architecture. No login, no separate backend, minimal
infrastructure — and it runs out of the box with **zero external services**.

---

## Tech stack

| Layer            | Choice                                             |
| ---------------- | -------------------------------------------------- |
| Framework        | Next.js 14 (App Router) + TypeScript               |
| Styling          | Tailwind CSS (custom design system)                |
| UI idiom         | shadcn-style primitives (CVA + tailwind-merge)     |
| Forms            | React Hook Form + Zod (shared client/server schemas) |
| Database         | Neon PostgreSQL via Drizzle ORM (optional)         |
| Images           | Remote photography (optimised by Next/Image)       |
| Hosting          | Vercel (direct from GitHub)                        |
| Domain           | byssorg.com                                        |

There is **no authentication**, no admin dashboard, no separate API server,
and no container/orchestration layer — by design.

---

## Runs with zero services

The site is fully functional before you connect anything:

- **Content** (programs, events, chapters, stories, resources) is served from
  typed data in `src/data/*` — clearly labelled demo content.
- **Form submissions** (join, contact, newsletter) fall back to a local JSON
  store under `./.data/` when `DATABASE_URL` is not set.
- **Images** use remote demo photography with a graceful gradient fallback
  (`SmartImage`) so nothing ever renders a broken image.

When you add credentials, the app switches over automatically — **no code
changes required**.

### Quick start

```bash
npm install
cp .env.example .env.local   # optional — site runs without editing it
npm run dev                  # http://localhost:3000
```

---

## Connecting real services (production)

1. **Neon Postgres** — set `DATABASE_URL` in `.env.local`, then apply the
   migration (creates the submission tables):

   ```bash
   npm run db:migrate    # applies src/db/migrations to Neon (HTTP driver)
   ```

   Once `DATABASE_URL` is set, all form submissions persist to Postgres.

2. **Real content & metrics** — replace the demo-labelled content in
   `src/data/*`. **Never publish invented organisational numbers** — the
   impact figures are marked as demo until connected to verified data.

See `.env.example` for the full list of variables.

---

## Deploy to Vercel (direct from GitHub)

1. Push this repo to GitHub.
2. Import it in Vercel — it detects Next.js automatically (no config needed).
3. Add environment variables:
   - `DATABASE_URL` — your Neon connection string
   - `NEXT_PUBLIC_SITE_URL` — `https://byssorg.com`
4. Deploy. Add `byssorg.com` under Vercel → Settings → Domains and point the
   domain's DNS at Vercel (A / CNAME records shown there).

No Cloudflare, no servers, no containers to manage.

---

## Notes on data honesty

All statistics on the site are **demo placeholders** during development and are
clearly marked as such. Production must only ever display real, verified
organisational data.
