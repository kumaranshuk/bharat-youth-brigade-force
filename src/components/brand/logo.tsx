import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Bhartiya Yuva Shakti Sangathan"
      fill="none"
    >
      <defs>
        <linearGradient id="bybf-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A45" />
          <stop offset="1" stopColor="#D6540E" />
        </linearGradient>
      </defs>
      {/* network edges */}
      <path d="M20 6 L31 15 M20 6 L9 15 M9 15 L14 30 M31 15 L26 30 M14 30 L26 30 M9 15 L31 15"
        stroke="url(#bybf-g)" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      {/* nodes */}
      <circle cx="20" cy="6" r="3.4" fill="url(#bybf-g)" />
      <circle cx="31" cy="15" r="2.6" fill="#FF6A1A" />
      <circle cx="9" cy="15" r="2.6" fill="#0E8A57" />
      <circle cx="14" cy="30" r="2.6" fill="#2A52BE" />
      <circle cx="26" cy="30" r="2.6" fill="#FF6A1A" />
      <circle cx="20" cy="20" r="2" fill="#F7F4EE" />
    </svg>
  );
}

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Bhartiya Yuva Shakti Sangathan — home"
    >
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[8deg]" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-tight text-foreground">
            BHARTIYA YUVA
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-saffron">
            Shakti Sangathan
          </span>
        </span>
      )}
    </Link>
  );
}
