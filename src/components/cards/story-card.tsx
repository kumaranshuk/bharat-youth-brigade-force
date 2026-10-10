import Link from "next/link";
import type { Story } from "@/types";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card"
    >
      <SmartImage
        src={story.image}
        alt={`${story.name}, ${story.role}`}
        width={640}
        height={800}
        wrapperClassName="aspect-[4/5]"
        className="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
      <div className="relative p-5">
        <Badge variant="saffron" className="mb-3">
          {story.category}
        </Badge>
        <p className="font-display text-lg font-semibold leading-snug text-paper">
          &ldquo;{story.quote}&rdquo;
        </p>
        <p className="mt-2 text-sm text-paper/70">
          {story.name} · {story.location}
        </p>
      </div>
    </Link>
  );
}
