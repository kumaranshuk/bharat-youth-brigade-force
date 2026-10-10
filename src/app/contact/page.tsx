import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Bhartiya Yuva Shakti Sangathan team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Questions, partnership ideas, or want to start a chapter? Send us a message and the right person will get back to you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <Mail className="h-5 w-5 text-saffron" />
              <h2 className="mt-3 font-display text-lg font-semibold">Email</h2>
              <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <Clock className="h-5 w-5 text-saffron" />
              <h2 className="mt-3 font-display text-lg font-semibold">Response time</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We aim to respond within a few working days.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <MapPin className="h-5 w-5 text-saffron" />
              <h2 className="mt-3 font-display text-lg font-semibold">Presence</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A growing national network of local chapters across India.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
