"use client";

import { useLayoutEffect, type ReactNode } from "react";
import { destroyLenis, initLenis } from "@/lib/lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useLayoutEffect(() => {
    initLenis();

    return () => destroyLenis();
  }, []);

  return children;
}
