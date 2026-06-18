"use client";

import { useEffect, useState } from "react";
import { getPexelsFallback, type PexelsImageKey } from "@/lib/pexels";

interface FallbackImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  fallbackKey?: PexelsImageKey;
}

export function FallbackImage({
  src,
  fallbackKey = "generic",
  alt,
  ...props
}: FallbackImageProps) {
  const fallback = getPexelsFallback(fallbackKey);
  const [current, setCurrent] = useState(src);

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  return (
    <img
      {...props}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
