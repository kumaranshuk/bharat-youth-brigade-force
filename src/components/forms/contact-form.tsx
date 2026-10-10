"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validations/forms";
import { submitContact, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, FieldError } from "@/components/ui/field";

const initial: FormState = { status: "idle" };

export function ContactForm() {
  const [state, dispatch] = useFormState(submitContact, initial);
  const [pending, startTransition] = React.useTransition();
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { mobile: "", website: "" },
  });

  React.useEffect(() => {
    if (state.status === "success") reset();
  }, [state.status, reset]);

  const onValid = () => {
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    startTransition(() => dispatch(fd));
  };

  const err = (name: keyof ContactInput) =>
    errors[name]?.message || state.fieldErrors?.[name]?.[0];

  return (
    <form ref={formRef} onSubmit={handleSubmit(onValid)} noValidate className="space-y-5">
      {state.status === "success" && (
        <div role="status" className="flex items-start gap-2 rounded-xl border border-bharat-green/40 bg-bharat-green/10 p-4 text-sm text-bharat-green">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}
      {state.status === "error" && !state.fieldErrors && (
        <div role="alert" className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name">Name *</Label>
          <Input id="c-name" aria-invalid={!!err("name")} {...register("name")} placeholder="Your name" autoComplete="name" />
          <FieldError>{err("name")}</FieldError>
        </div>
        <div>
          <Label htmlFor="c-email">Email *</Label>
          <Input id="c-email" type="email" aria-invalid={!!err("email")} {...register("email")} placeholder="you@example.com" autoComplete="email" />
          <FieldError>{err("email")}</FieldError>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-mobile">Mobile (optional)</Label>
          <Input id="c-mobile" inputMode="tel" aria-invalid={!!err("mobile")} {...register("mobile")} placeholder="10-digit mobile" autoComplete="tel" />
          <FieldError>{err("mobile")}</FieldError>
        </div>
        <div>
          <Label htmlFor="c-subject">Subject *</Label>
          <Input id="c-subject" aria-invalid={!!err("subject")} {...register("subject")} placeholder="How can we help?" />
          <FieldError>{err("subject")}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="c-message">Message *</Label>
        <Textarea id="c-message" aria-invalid={!!err("message")} {...register("message")} placeholder="Write your message…" className="min-h-[150px]" />
        <FieldError>{err("message")}</FieldError>
      </div>

      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />

      <Button type="submit" size="lg" disabled={pending} aria-busy={pending} className="w-full sm:w-auto">
        {pending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
