"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, PartyPopper } from "lucide-react";
import {
  joinSchema,
  type JoinInput,
  ageGroups,
  interestAreas,
  participationModes,
} from "@/lib/validations/forms";
import { indianStates } from "@/lib/geo";
import { submitJoin, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label, FieldError, FieldHint } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const initial: FormState = { status: "idle" };

export function JoinForm() {
  const [state, dispatch] = useFormState(submitJoin, initial);
  const [pending, startTransition] = React.useTransition();
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinInput>({
    resolver: zodResolver(joinSchema),
    mode: "onTouched",
    defaultValues: { interests: [], skills: "", message: "", website: "" },
  });

  const onValid = () => {
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    startTransition(() => dispatch(fd));
  };

  React.useEffect(() => {
    if (state.status === "success") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [state.status]);

  if (state.status === "success" && state.message === "welcome") {
    return <WelcomeState />;
  }

  const err = (name: keyof JoinInput) =>
    errors[name]?.message || state.fieldErrors?.[name]?.[0];

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onValid)}
      noValidate
      className="space-y-8"
      aria-describedby={state.status === "error" ? "join-form-error" : undefined}
    >
      {state.status === "error" && (
        <div
          id="join-form-error"
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <fieldset className="space-y-5">
        <legend className="mb-1 font-display text-lg font-semibold text-foreground">
          About you
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="fullName">Full name *</Label>
            <Input id="fullName" aria-invalid={!!err("fullName")} {...register("fullName")} placeholder="Your name" autoComplete="name" />
            <FieldError>{err("fullName")}</FieldError>
          </div>
          <div>
            <Label htmlFor="mobile">Mobile number *</Label>
            <Input id="mobile" inputMode="tel" aria-invalid={!!err("mobile")} {...register("mobile")} placeholder="10-digit mobile" autoComplete="tel" />
            <FieldError>{err("mobile")}</FieldError>
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" aria-invalid={!!err("email")} {...register("email")} placeholder="you@example.com" autoComplete="email" />
            <FieldError>{err("email")}</FieldError>
          </div>
          <div>
            <Label htmlFor="ageGroup">Age group *</Label>
            <Select id="ageGroup" aria-invalid={!!err("ageGroup")} defaultValue="" {...register("ageGroup")}>
              <option value="" disabled>Select age group</option>
              {ageGroups.map((a) => (
                <option key={a} value={a}>{a} years</option>
              ))}
            </Select>
            <FieldError>{err("ageGroup")}</FieldError>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-1 font-display text-lg font-semibold text-foreground">
          Where you are
        </legend>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <Label htmlFor="state">State *</Label>
            <Select id="state" aria-invalid={!!err("state")} defaultValue="" {...register("state")}>
              <option value="" disabled>Select state</option>
              {indianStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
            <FieldError>{err("state")}</FieldError>
          </div>
          <div>
            <Label htmlFor="district">District *</Label>
            <Input id="district" aria-invalid={!!err("district")} {...register("district")} placeholder="Your district" />
            <FieldError>{err("district")}</FieldError>
          </div>
          <div>
            <Label htmlFor="city">City / Town *</Label>
            <Input id="city" aria-invalid={!!err("city")} {...register("city")} placeholder="Your city or town" />
            <FieldError>{err("city")}</FieldError>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-1 font-display text-lg font-semibold text-foreground">
          What you bring
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="profession">Profession / education *</Label>
            <Input id="profession" aria-invalid={!!err("profession")} {...register("profession")} placeholder="e.g. Student, Engineer, Farmer" />
            <FieldError>{err("profession")}</FieldError>
          </div>
          <div>
            <Label htmlFor="skills">Skills (optional)</Label>
            <Input id="skills" {...register("skills")} placeholder="e.g. Design, teaching, coding" />
            <FieldHint>Comma-separated, if you like.</FieldHint>
          </div>
        </div>

        <div>
          <Label>Areas of interest *</Label>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {interestAreas.map((area) => (
              <label
                key={area}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-ink-soft px-3 py-2.5 text-sm transition-colors hover:border-saffron/40 has-[:checked]:border-saffron/60 has-[:checked]:bg-saffron/10"
              >
                <input
                  type="checkbox"
                  value={area}
                  {...register("interests")}
                  className="h-4 w-4 accent-saffron"
                />
                <span className="text-foreground">{area}</span>
              </label>
            ))}
          </div>
          <FieldError>{err("interests")}</FieldError>
        </div>

        <div>
          <Label>Preferred participation *</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {participationModes.map((mode) => (
              <label
                key={mode}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-ink-soft px-4 py-2 text-sm transition-colors hover:border-saffron/40 has-[:checked]:border-saffron/60 has-[:checked]:bg-saffron/10 has-[:checked]:text-saffron"
              >
                <input type="radio" value={mode} {...register("participation")} className="h-3.5 w-3.5 accent-saffron" />
                {mode}
              </label>
            ))}
          </div>
          <FieldError>{err("participation")}</FieldError>
        </div>

        <div>
          <Label htmlFor="message">Anything you&rsquo;d like to add? (optional)</Label>
          <Textarea id="message" {...register("message")} placeholder="Tell us what draws you to the movement." />
        </div>
      </fieldset>

      {/* honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />

      <div className="flex flex-col items-start gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          No account, no password. By joining you agree to our{" "}
          <Link href="/privacy" className="text-saffron underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <Button type="submit" size="lg" disabled={pending} aria-busy={pending} className="w-full sm:w-auto">
          {pending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Registering…
            </>
          ) : (
            <>
              Join the Movement <ArrowRight className="h-5 w-5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function WelcomeState() {
  return (
    <div className={cn("rounded-3xl border border-saffron/30 bg-gradient-to-b from-saffron/10 to-transparent p-8 text-center sm:p-14")}>
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-saffron text-ink">
        <PartyPopper className="h-8 w-8" />
      </div>
      <h2 className="font-display text-display-lg font-extrabold text-gradient-saffron">
        Welcome to the movement
      </h2>
      <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
        Your interest has been successfully registered. We&rsquo;ll be in touch with ways
        to connect, participate and lead near you.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:text-saffron-soft">
          Explore upcoming events <ArrowRight className="h-4 w-4" />
        </Link>
        <span className="hidden text-muted-foreground/40 sm:inline">·</span>
        <Link href="/chapters" className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:text-saffron-soft">
          Find your local chapter <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="mt-8 flex items-center justify-center gap-2 text-xs text-bharat-green">
        <CheckCircle2 className="h-4 w-4" /> Saved securely. No login required.
      </p>
    </div>
  );
}
