"use client";

import Image from "next/image";
import { useImageSrc } from "@/hooks/use-image-src";
import type { PexelsImageKey } from "@/lib/pexels";
import { cn } from "@/lib/utils";

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-banner",
  photo: "aspect-photo",
  logo: "aspect-logo",
  auto: "aspect-auto min-h-48",
} as const;

interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  aspect?: keyof typeof aspectClasses;
  fallbackKey?: PexelsImageKey;
}

export function SiteImage({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  aspect = "wide",
  fallbackKey = "generic",
}: SiteImageProps) {
  const resolved = useImageSrc(src, fallbackKey);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted rounded-xl",
        aspectClasses[aspect],
        containerClassName
      )}
    >
      <Image
        src={resolved}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn("object-cover", className)}
      />
    </div>
  );
}
