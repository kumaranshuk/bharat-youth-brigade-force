import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/types";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";

const statusVariant = {
  active: "green",
  ongoing: "saffron",
  upcoming: "blue",
} as const;

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40"
    >
      <SmartImage
        src={program.image}
        alt={program.title}
        width={640}
        height={420}
        wrapperClassName="aspect-[16/10]"
        className="transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline">{program.category}</Badge>
          <Badge variant={statusVariant[program.status]} className="capitalize">
            {program.status}
          </Badge>
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">
          {program.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {program.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron">
          Explore program
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
