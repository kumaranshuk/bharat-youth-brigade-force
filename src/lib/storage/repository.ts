import "server-only";
import { getDb } from "@/db";
import {
  contactSubmissions,
  joinSubmissions,
  newsletterSubscriptions,
} from "@/db/schema";
import type { ContactInput, JoinInput, NewsletterInput } from "@/lib/validations/forms";
import { appendRecord } from "./local-store";

export type SaveResult = { ok: true; id: number } | { ok: false; error: string };

export async function saveJoin(input: JoinInput): Promise<SaveResult> {
  const { website: _hp, ...data } = input;
  const db = getDb();
  try {
    if (db) {
      const [row] = await db
        .insert(joinSubmissions)
        .values({
          fullName: data.fullName,
          mobile: data.mobile,
          email: data.email,
          state: data.state,
          district: data.district,
          city: data.city,
          ageGroup: data.ageGroup,
          profession: data.profession,
          skills: data.skills || null,
          interests: data.interests,
          participation: data.participation,
          message: data.message || null,
        })
        .returning({ id: joinSubmissions.id });
      return { ok: true, id: row.id };
    }
    const rec = await appendRecord("join_submissions", data);
    return { ok: true, id: rec.id };
  } catch (err) {
    console.error("saveJoin failed", err);
    return { ok: false, error: "Could not save your submission. Please try again." };
  }
}

export async function saveContact(input: ContactInput): Promise<SaveResult> {
  const { website: _hp, ...data } = input;
  const db = getDb();
  try {
    if (db) {
      const [row] = await db
        .insert(contactSubmissions)
        .values({
          name: data.name,
          email: data.email,
          mobile: data.mobile || null,
          subject: data.subject,
          message: data.message,
        })
        .returning({ id: contactSubmissions.id });
      return { ok: true, id: row.id };
    }
    const rec = await appendRecord("contact_submissions", data);
    return { ok: true, id: rec.id };
  } catch (err) {
    console.error("saveContact failed", err);
    return { ok: false, error: "Could not send your message. Please try again." };
  }
}

export async function saveNewsletter(input: NewsletterInput): Promise<SaveResult> {
  const { website: _hp, ...data } = input;
  const db = getDb();
  try {
    if (db) {
      const [row] = await db
        .insert(newsletterSubscriptions)
        .values({ email: data.email })
        .onConflictDoNothing({ target: newsletterSubscriptions.email })
        .returning({ id: newsletterSubscriptions.id });
      return { ok: true, id: row?.id ?? 0 };
    }
    const rec = await appendRecord("newsletter_subscriptions", data);
    return { ok: true, id: rec.id };
  } catch (err) {
    console.error("saveNewsletter failed", err);
    return { ok: false, error: "Could not subscribe. Please try again." };
  }
}
