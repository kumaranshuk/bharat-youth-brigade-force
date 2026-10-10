import Link from "next/link";
import { Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-40" />
      <div className="container relative text-center">
        <p className="font-display text-[6rem] font-extrabold leading-none text-gradient-saffron sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          This path isn&rsquo;t on the map yet
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&rsquo;re looking for may have moved, or never existed. Let&rsquo;s get you
          back to the movement.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/search" variant="outline">
            <Compass className="h-4 w-4" /> Search the site
          </ButtonLink>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {[
            { label: "Programs", href: "/programs" },
            { label: "Events", href: "/events" },
            { label: "Chapters", href: "/chapters" },
            { label: "Join", href: "/join" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
