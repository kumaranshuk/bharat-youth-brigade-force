import { Counter } from "@/components/ui/counter";
import { Badge } from "@/components/ui/badge";
import { impactMetrics, DEMO_IMPACT } from "@/data/impact";

export function ImpactStats() {
  return (
    <div>
      {DEMO_IMPACT && (
        <div className="mb-6 flex justify-center">
          <Badge variant="outline" className="border-dashed">
            Demo figures — production values connect to live data
          </Badge>
        </div>
      )}
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {impactMetrics.map((m) => (
          <div key={m.label} className="bg-card p-6 sm:p-8">
            <dt className="text-sm text-muted-foreground">{m.label}</dt>
            <dd className="mt-2 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {m.value === null ? (
                <span className="text-muted-foreground/50">—</span>
              ) : (
                <Counter value={m.value} suffix={m.suffix} />
              )}
            </dd>
            <p className="mt-2 text-xs text-muted-foreground/70">{m.note}</p>
          </div>
        ))}
      </dl>
    </div>
  );
}
