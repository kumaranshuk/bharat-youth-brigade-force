import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(255,106,26,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-40" />
      <div className="container relative text-center">
        <h2 className="mx-auto max-w-4xl font-display text-display-xl font-extrabold leading-[1.02] tracking-tight text-balance">
          The future of India is not something we wait for.
          <span className="block text-gradient-saffron">It is something we build.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
          Add your energy to a growing national network of young people turning
          intention into action. It takes a minute to begin.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/join" size="lg">
            Join Bhartiya Yuva Shakti Sangathan
            <ArrowRight className="h-5 w-5" />
          </ButtonLink>
          <ButtonLink href="/chapters" size="lg" variant="outline">
            Find your local chapter
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
