"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/lib/site";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change; lock scroll when open.
  React.useEffect(() => setOpen(false), [pathname]);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-saffron focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4 md:h-[74px]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-saffron"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <ButtonLink href="/join" size="sm" className="hidden sm:inline-flex">
            Join the Movement
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-40 origin-top bg-background/98 backdrop-blur-2xl transition-all duration-300 lg:hidden md:top-[74px]",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="container flex h-[calc(100dvh-4rem)] flex-col justify-between py-8">
        <nav aria-label="Mobile" className="flex flex-col">
          {[...primaryNav, { label: "Leadership", href: "/leadership" }, { label: "Resources", href: "/resources" }].map(
            (item, i) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                  className={cn(
                    "flex items-center justify-between border-b border-border/60 py-4 font-display text-2xl font-semibold transition-all duration-500",
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    active ? "text-saffron" : "text-foreground",
                  )}
                >
                  {item.label}
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              );
            },
          )}
        </nav>
        <div className="space-y-3">
          <ButtonLink href="/join" size="lg" className="w-full" onClick={onClose}>
            Join the Movement <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/search" variant="outline" size="lg" className="w-full" onClick={onClose}>
            <Search className="h-4 w-4" /> Search
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
