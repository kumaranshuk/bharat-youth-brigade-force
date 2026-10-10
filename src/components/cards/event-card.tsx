import Link from "next/link";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import type { OrgEvent } from "@/types";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

const modeLabel: Record<OrgEvent["mode"], string> = {
  "in-person": "In person",
  online: "Online",
  hybrid: "Hybrid",
};

export function EventCard({ event }: { event: OrgEvent }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40"
    >
      <div className="relative">
        <SmartImage
          src={event.image}
          alt={event.title}
          width={640}
          height={360}
          wrapperClassName="aspect-[16/9]"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant="saffron">{event.category}</Badge>
          <Badge variant="default">{modeLabel[event.mode]}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
          {event.title}
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-saffron" />
            {formatDate(event.date, { weekday: "short", day: "numeric", month: "short" })}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-saffron" />
            {event.city}, {event.state}
          </p>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron">
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
