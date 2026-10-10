import { z } from "zod";

const name = z
  .string()
  .trim()
  .min(2, "Please enter your name")
  .max(80, "Name is too long");

const mobile = z
  .string()
  .trim()
  .regex(/^(\+?91[-\s]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number");

const email = z
  .string()
  .trim()
  .toLowerCase()
  .email("Enter a valid email address")
  .max(120);

export const ageGroups = ["13–17", "18–21", "22–25", "26–30", "31–35", "36+"] as const;

export const interestAreas = [
  "Leadership",
  "Skill Development",
  "Careers & Employment",
  "Entrepreneurship",
  "Social Service",
  "Education",
  "Community Development",
  "Volunteering",
  "National Campaigns",
] as const;

export const participationModes = [
  "Volunteer",
  "Attend events",
  "Lead locally",
  "Start a chapter",
  "Online only",
] as const;

export const joinSchema = z.object({
  fullName: name,
  mobile,
  email,
  state: z.string().trim().min(2, "Select your state").max(60),
  district: z.string().trim().min(2, "Enter your district").max(60),
  city: z.string().trim().min(2, "Enter your city").max(60),
  ageGroup: z.enum(ageGroups, { errorMap: () => ({ message: "Select an age group" }) }),
  profession: z.string().trim().min(2, "Tell us what you do").max(80),
  skills: z.string().trim().max(200).optional().or(z.literal("")),
  interests: z
    .array(z.enum(interestAreas))
    .min(1, "Choose at least one area of interest")
    .max(interestAreas.length),
  participation: z.enum(participationModes, {
    errorMap: () => ({ message: "Choose how you'd like to participate" }),
  }),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  // honeypot — must stay empty
  website: z.string().max(0).optional(),
});

export type JoinInput = z.infer<typeof joinSchema>;

export const contactSchema = z.object({
  name,
  email,
  mobile: mobile.optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Add a subject").max(120),
  message: z.string().trim().min(10, "Please write a little more").max(2000),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email,
  website: z.string().max(0).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
