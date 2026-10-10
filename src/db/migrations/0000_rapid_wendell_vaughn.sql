CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(80) NOT NULL,
	"email" varchar(120) NOT NULL,
	"mobile" varchar(20),
	"subject" varchar(120) NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "join_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(80) NOT NULL,
	"mobile" varchar(20) NOT NULL,
	"email" varchar(120) NOT NULL,
	"state" varchar(60) NOT NULL,
	"district" varchar(60) NOT NULL,
	"city" varchar(60) NOT NULL,
	"age_group" varchar(16) NOT NULL,
	"profession" varchar(80) NOT NULL,
	"skills" text,
	"interests" jsonb NOT NULL,
	"participation" varchar(40) NOT NULL,
	"message" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar(255) NOT NULL,
	"url" text NOT NULL,
	"content_type" varchar(120),
	"bytes" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "media_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE "newsletter_subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(120) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "newsletter_subscriptions_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX "join_state_idx" ON "join_submissions" USING btree ("state");--> statement-breakpoint
CREATE INDEX "join_created_idx" ON "join_submissions" USING btree ("created_at");