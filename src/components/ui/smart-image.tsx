"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/**
 * Image with a graceful gradient fallback if the source fails to load.
 * Ensures the site never shows broken image icons even if a remote/demo
 * asset is unavailable. Swap sources for R2-hosted media in production.
 */
export function SmartImage({
  className,
  wrapperClassName,
  alt,
  ...props
}: ImageProps & { wrapperClassName?: string }) {
  const [failed, setFailed] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-ink-soft", wrapperClassName)}>
      {failed ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_10%,rgba(255,106,26,0.28),transparent_55%),radial-gradient(120%_120%_at_90%_90%,rgba(14,138,87,0.22),transparent_50%)]"
        />
      ) : (
        <Image
          alt={alt}
          className={cn("h-full w-full object-cover", className)}
          onError={() => setFailed(true)}
          {...props}
        />
      )}
    </div>
  );
}
