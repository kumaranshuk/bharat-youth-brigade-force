"use client";

import { useFormState } from "react-dom";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitNewsletter, type FormState } from "@/app/actions";
import { SubmitButton } from "./submit-button";
import { Input } from "@/components/ui/field";

const initial: FormState = { status: "idle" };

export function NewsletterForm() {
  const [state, action] = useFormState(submitNewsletter, initial);

  if (state.status === "success") {
    return (
      <p className="flex items-center gap-2 text-sm text-bharat-green">
        <CheckCircle2 className="h-4 w-4" /> {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="space-y-2" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <Input
          id="nl-email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
          className="sm:flex-1"
        />
        {/* honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />
        <SubmitButton size="md" pendingLabel="Adding…" className="shrink-0">
          Subscribe
        </SubmitButton>
      </div>
      {state.status === "error" && (
        <p className="flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5" /> {state.message}
        </p>
      )}
    </form>
  );
}
