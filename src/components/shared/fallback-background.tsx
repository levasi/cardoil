"use client";

import { useImageSrc } from "@/hooks/use-image-src";
import type { PexelsImageKey } from "@/lib/pexels";

interface FallbackBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  fallbackKey?: PexelsImageKey;
}

export function FallbackBackground({
  src,
  fallbackKey = "generic",
  style,
  ...props
}: FallbackBackgroundProps) {
  const resolved = useImageSrc(src, fallbackKey);

  return (
    <div
      {...props}
      style={{ ...style, backgroundImage: `url(${resolved})` }}
    />
  );
}
