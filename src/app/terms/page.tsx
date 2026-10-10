import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the Bhartiya Yuva Shakti Sangathan website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      updated="18 August 2026"
      intro="By using this website you agree to these straightforward terms."
    >
      <section>
        <h2>Using this site</h2>
        <p>
          This website is provided to share information about the organisation and to let you register
          interest, contact us and discover programs, events and chapters. You agree to use it lawfully
          and respectfully.
        </p>
      </section>
      <section>
        <h2>Your submissions</h2>
        <p>
          Information you submit must be accurate and your own to share. Do not submit unlawful,
          harmful, misleading or spam content. We may remove submissions that violate these terms or
          our Code of Conduct.
        </p>
      </section>
      <section>
        <h2>Content &amp; intellectual property</h2>
        <p>
          The organisation&rsquo;s name, brand and site content belong to Bhartiya Yuva Shakti Sangathan
          unless otherwise stated. You may not misrepresent the organisation or use its identity
          without permission.
        </p>
      </section>
      <section>
        <h2>No warranties</h2>
        <p>
          The site is provided &ldquo;as is&rdquo;. While we work to keep information accurate and the
          service available, we do not guarantee it will always be error-free or uninterrupted.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after changes means
          you accept the updated terms.
        </p>
      </section>
    </LegalLayout>
  );
}
