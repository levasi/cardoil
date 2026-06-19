import Lenis from "lenis";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";

let lenis: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;
let scrollTriggerConnected = false;

function connectLenisScrollTrigger(instance: Lenis) {
  if (scrollTriggerConnected) return;

  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value?: number) {
      if (value !== undefined) {
        instance.scrollTo(value, { immediate: true });
      }
      return instance.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  instance.on("scroll", ScrollTrigger.update);

  ScrollTrigger.addEventListener("refresh", () => instance.resize());

  scrollTriggerConnected = true;
}

export function initLenis() {
  if (typeof window === "undefined" || prefersReducedMotion() || lenis) {
    return lenis;
  }

  lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    anchors: true,
  });

  connectLenisScrollTrigger(lenis);

  tickerCallback = (time: number) => {
    lenis?.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.refresh();

  return lenis;
}

export function destroyLenis() {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }

  lenis?.destroy();
  lenis = null;
  scrollTriggerConnected = false;
}

export function getLenis() {
  return lenis;
}

export function onLenisScroll(callback: (scroll: number) => void) {
  const attach = (instance: Lenis) => {
    const handler = (l: Lenis) => callback(l.scroll);
    callback(instance.scroll);
    instance.on("scroll", handler);
    return () => instance.off("scroll", handler);
  };

  const existing = getLenis();
  if (existing) return attach(existing);

  let detach: (() => void) | undefined;
  const id = window.requestAnimationFrame(() => {
    const instance = getLenis();
    if (instance) detach = attach(instance);
  });

  return () => {
    window.cancelAnimationFrame(id);
    detach?.();
  };
}
