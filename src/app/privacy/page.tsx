import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bhartiya Yuva Shakti Sangathan collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="18 August 2026"
      intro="We collect only what we need, use it only for the movement, and never sell it. This policy explains the details in plain language."
    >
      <section>
        <h2>What we collect</h2>
        <p>
          When you join, contact us or subscribe to updates, we collect the information you choose to
          provide — such as your name, mobile number, email, location, age group, profession and
          areas of interest. We do not require you to create an account or password.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To connect you with programs, events and chapters relevant to you.</li>
          <li>To respond to your messages and requests.</li>
          <li>To send occasional updates about the movement, if you opt in.</li>
          <li>To understand, in aggregate, how the network is growing.</li>
        </ul>
      </section>
      <section>
        <h2>What we never do</h2>
        <ul>
          <li>We never sell your personal information.</li>
          <li>We never share it with advertisers.</li>
          <li>We never use it for purposes unrelated to the organisation&rsquo;s mission.</li>
        </ul>
      </section>
      <section>
        <h2>Where it is stored</h2>
        <p>
          Submissions are stored securely in our database. Any media you share may be stored on our
          content delivery infrastructure. We apply reasonable technical and organisational measures
          to protect your data.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You can ask us to access, correct or delete your information at any time by writing to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-saffron hover:underline">
            {siteConfig.email}
          </a>
          . You can unsubscribe from updates whenever you like.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-saffron hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
