import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Our commitment to making this website usable by everyone.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalLayout
      eyebrow="Inclusion"
      title="Accessibility"
      updated="18 August 2026"
      intro="A national platform should work for everyone. We build with accessibility as a first-class requirement, not an afterthought."
    >
      <section>
        <h2>What we do</h2>
        <ul>
          <li>Semantic HTML and clear document structure for screen readers.</li>
          <li>Full keyboard navigation with visible focus states.</li>
          <li>Accessible form labels, hints and error messages.</li>
          <li>Colour contrast chosen to remain readable across the interface.</li>
          <li>Respect for the &ldquo;reduced motion&rdquo; system setting.</li>
          <li>Readable English and Hindi typography across devices.</li>
        </ul>
      </section>
      <section>
        <h2>Ongoing work</h2>
        <p>
          Accessibility is never &ldquo;done&rdquo;. We continue to test with assistive technologies
          and improve as the site grows. If you encounter a barrier, we want to know.
        </p>
      </section>
      <section>
        <h2>Tell us</h2>
        <p>
          If any part of this site is difficult to use, please email{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-saffron hover:underline">
            {siteConfig.email}
          </a>{" "}
          and we&rsquo;ll do our best to help and to fix it.
        </p>
      </section>
    </LegalLayout>
  );
}
