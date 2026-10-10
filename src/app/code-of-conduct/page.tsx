import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "The shared values and behaviour expected of everyone in the movement.",
  alternates: { canonical: "/code-of-conduct" },
};

export default function CodeOfConductPage() {
  return (
    <LegalLayout
      eyebrow="Community"
      title="Code of Conduct"
      updated="18 August 2026"
      intro="A movement is only as good as how its people treat one another. This is the standard we hold ourselves to."
    >
      <section>
        <h2>Our commitments</h2>
        <ul>
          <li>Treat everyone with respect, regardless of background, belief, gender or region.</li>
          <li>Keep spaces safe, inclusive and free of harassment or discrimination.</li>
          <li>Act with honesty and integrity in every activity we run.</li>
          <li>Put the community and mission ahead of personal recognition.</li>
          <li>Prioritise the safety and wellbeing of participants, especially minors.</li>
        </ul>
      </section>
      <section>
        <h2>What is not acceptable</h2>
        <ul>
          <li>Harassment, bullying, intimidation or hate speech of any kind.</li>
          <li>Discrimination based on caste, religion, gender, disability or region.</li>
          <li>Misuse of the organisation&rsquo;s name for personal, political or commercial gain.</li>
          <li>Any behaviour that endangers the safety of others.</li>
        </ul>
      </section>
      <section>
        <h2>Non-partisan by design</h2>
        <p>
          The organisation is non-partisan. Chapters and members must not use the platform to promote
          any political party or candidate. Our focus is participation, service and development — not
          party politics.
        </p>
      </section>
      <section>
        <h2>Reporting concerns</h2>
        <p>
          If you experience or witness a breach of this code, please contact us. We take every report
          seriously and will respond fairly and confidentially where possible.
        </p>
      </section>
    </LegalLayout>
  );
}
