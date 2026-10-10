import { ArrowRight, Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { IndiaNetwork } from "@/components/visuals/india-network";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-[0.5]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,106,26,0.15),transparent)]" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-label animate-fade-up">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-saffron" />
              A national youth movement
            </p>

            <h1 className="mt-5 font-display text-display-2xl font-extrabold leading-[0.95] tracking-tight text-balance">
              <span className="block animate-fade-up text-foreground" style={{ animationDelay: "60ms" }}>
                The youth of India.
              </span>
              <span className="block animate-fade-up text-gradient-saffron" style={{ animationDelay: "140ms" }}>
                One network.
              </span>
              <span className="block animate-fade-up text-foreground" style={{ animationDelay: "220ms" }}>
                One purpose.
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground text-pretty"
              style={{ animationDelay: "300ms" }}
            >
              Bring young people together to connect, participate, lead and contribute to
              meaningful change across India. This is a platform for participants — not spectators.
            </p>

            <p
              className="mt-3 animate-fade-up font-hindi text-base text-muted-foreground/80"
              style={{ animationDelay: "340ms" }}
            >
              {siteConfig.nameHindi} — युवा · एकता · कर्म · विकास
            </p>

            <div
              className="mt-8 flex flex-col gap-3 animate-fade-up sm:flex-row"
              style={{ animationDelay: "400ms" }}
            >
              <ButtonLink href="/join" size="lg">
                Join the Movement
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/mission" size="lg" variant="outline">
                <Compass className="h-5 w-5" />
                Explore our Mission
              </ButtonLink>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { k: "Youth", v: "Empowered" },
                { k: "Unity", v: "Across India" },
                { k: "Action", v: "On the ground" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-lg font-bold text-foreground">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="mx-auto max-w-md lg:max-w-none">
              <IndiaNetwork />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
