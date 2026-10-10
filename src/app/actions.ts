"use server";

import { headers } from "next/headers";
import { joinSchema, contactSchema, newsletterSchema } from "@/lib/validations/forms";
import { saveJoin, saveContact, saveNewsletter } from "@/lib/storage/repository";
import { rateLimit } from "@/lib/rate-limit";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

function clientKey(scope: string) {
  const h = headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "local";
  return `${scope}:${ip}`;
}

export async function submitJoin(_prev: FormState, formData: FormData): Promise<FormState> {
  const gate = rateLimit(clientKey("join"), { limit: 4, windowMs: 60_000 });
  if (!gate.ok) {
    return { status: "error", message: `Too many attempts. Try again in ${gate.retryAfter}s.` };
  }

  const raw = {
    fullName: formData.get("fullName"),
    mobile: formData.get("mobile"),
    email: formData.get("email"),
    state: formData.get("state"),
    district: formData.get("district"),
    city: formData.get("city"),
    ageGroup: formData.get("ageGroup"),
    profession: formData.get("profession"),
    skills: formData.get("skills") ?? "",
    interests: formData.getAll("interests"),
    participation: formData.get("participation"),
    message: formData.get("message") ?? "",
    website: formData.get("website") ?? "",
  };

  const parsed = joinSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const result = await saveJoin(parsed.data);
  if (!result.ok) return { status: "error", message: result.error };
  return { status: "success", message: "welcome" };
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const gate = rateLimit(clientKey("contact"), { limit: 4, windowMs: 60_000 });
  if (!gate.ok) {
    return { status: "error", message: `Too many attempts. Try again in ${gate.retryAfter}s.` };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    mobile: formData.get("mobile") ?? "",
    subject: formData.get("subject"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const result = await saveContact(parsed.data);
  if (!result.ok) return { status: "error", message: result.error };
  return { status: "success", message: "Thank you — your message has reached us. We'll respond soon." };
}

export async function submitNewsletter(_prev: FormState, formData: FormData): Promise<FormState> {
  const gate = rateLimit(clientKey("news"), { limit: 6, windowMs: 60_000 });
  if (!gate.ok) {
    return { status: "error", message: `Please slow down and try again shortly.` };
  }

  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
    website: formData.get("website") ?? "",
  });
  if (!parsed.success) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const result = await saveNewsletter(parsed.data);
  if (!result.ok) return { status: "error", message: result.error };
  return { status: "success", message: "You're on the list. Welcome aboard." };
}
