"use client";

import { useEffect, useState } from "react";
import { getPexelsFallback, type PexelsImageKey } from "@/lib/pexels";

export function useImageSrc(
  src: string,
  fallbackKey: PexelsImageKey = "generic"
): string {
  const fallback = getPexelsFallback(fallbackKey);
  const [resolved, setResolved] = useState(src);

  useEffect(() => {
    setResolved(src);

    const img = new window.Image();
    img.onload = () => setResolved(src);
    img.onerror = () => setResolved(fallback);
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallback]);

  return resolved;
}
