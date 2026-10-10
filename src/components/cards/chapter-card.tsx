import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Chapter } from "@/types";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link
      href={`/chapters/${chapter.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40"
    >
      <SmartImage
        src={chapter.image}
        alt={chapter.name}
        width={640}
        height={360}
        wrapperClassName="aspect-[16/9]"
        className="transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-foreground">{chapter.name}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-saffron" />
          {chapter.city}, {chapter.state} · {chapter.pincode}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chapter.focusAreas.map((f) => (
            <Badge key={f} variant="outline">
              {f}
            </Badge>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron">
          View chapter
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
