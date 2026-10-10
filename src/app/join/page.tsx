import type { Metadata } from "next";
import { Users, ShieldCheck, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { JoinForm } from "@/components/forms/join-form";

export const metadata: Metadata = {
  title: "Join the Movement",
  description:
    "Register your interest in Bhartiya Yuva Shakti Sangathan. No account, no password — just a minute to add your energy to a national youth network.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join us"
        title={
          <>
            Add your energy to the <span className="text-gradient-saffron">movement</span>
          </>
        }
        description="It takes a minute. We'll use what you share to connect you with people, programs and opportunities near you — and nothing more."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Join" }]}
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-saffron" /> ~1 minute</li>
          <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-saffron" /> No login required</li>
          <li className="flex items-center gap-2"><Users className="h-4 w-4 text-saffron" /> Open to all young Indians</li>
        </ul>
      </PageHeader>

      <div className="container py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 sm:p-10">
          <JoinForm />
        </div>
      </div>
    </>
  );
}
