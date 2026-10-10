import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { stories, getStory } from "@/data/stories";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { StoryCard } from "@/components/cards/story-card";
import { PageHeader } from "@/components/layout/page-header";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const story = getStory(params.slug);
  if (!story) return { title: "Story not found" };
  return {
    title: `${story.name} — ${story.role}`,
    description: story.excerpt,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: { title: story.name, description: story.excerpt, images: [story.image] },
  };
}

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = getStory(params.slug);
  if (!story) notFound();

  const more = stories.filter((s) => s.slug !== story.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow={story.category}
        title={story.name}
        description={story.role + " · " + story.location}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Stories", href: "/stories" },
          { label: story.name },
        ]}
      />

      <div className="container py-14">
        <div className="mx-auto max-w-3xl">
          <figure className="overflow-hidden rounded-3xl border border-border">
            <SmartImage
              src={story.image}
              alt={`${story.name}, ${story.role}`}
              width={1000}
              height={640}
              wrapperClassName="aspect-[16/10]"
            />
          </figure>

          <blockquote className="mt-10 border-l-2 border-saffron pl-6 font-display text-2xl font-semibold leading-snug text-foreground text-balance sm:text-3xl">
            &ldquo;{story.quote}&rdquo;
          </blockquote>

          <div className="mt-10 space-y-8">
            <Chapter label="Where they started">{story.body.started}</Chapter>
            <Chapter label="What they did">{story.body.did}</Chapter>
            <Chapter label="What changed">{story.body.changed}</Chapter>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center">
            <Badge variant="saffron" className="mb-3">Your story could be next</Badge>
            <p className="font-display text-xl font-semibold">Start where you are.</p>
            <ButtonLink href="/join" className="mt-4">
              Join the Movement <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold">More stories</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((s) => (
              <StoryCard key={s.slug} story={s} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function Chapter({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="section-label">{label}</h2>
      <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
