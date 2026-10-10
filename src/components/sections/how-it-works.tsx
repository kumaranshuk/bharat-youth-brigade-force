import { Search, UserPlus, Network, Activity, Award, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { icon: Search, title: "Discover", body: "Find programs, events and a chapter near you." },
  { icon: UserPlus, title: "Join", body: "Register your interest in a minute — no account needed." },
  { icon: Network, title: "Connect", body: "Meet people who care about the same things you do." },
  { icon: Activity, title: "Participate", body: "Show up to drives, workshops and campaigns." },
  { icon: Award, title: "Lead", body: "Take ownership of projects and mentor others." },
  { icon: Sparkles, title: "Impact", body: "Turn shared effort into visible, lasting change." },
];

export function HowItWorks() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-saffron/50 via-border to-transparent lg:left-1/2 lg:block" />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal as="li" key={s.title} delay={i * 70}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-saffron/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-saffron transition-colors group-hover:bg-saffron group-hover:text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold text-muted-foreground/50">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
