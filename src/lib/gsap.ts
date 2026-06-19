import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const revealDefaults = {
  duration: 0.9,
  ease: "power3.out" as const,
  start: "top 82%",
};

export const revealPresets = {
  title: { y: 24, opacity: 0 },
  fadeUp: { y: 32, opacity: 0 },
  fadeUpSoft: { y: 18, opacity: 0 },
  slideLeft: { x: -56, opacity: 0 },
  slideRight: { x: 56, opacity: 0 },
  scaleIn: { scale: 0.96, opacity: 0 },
} as const;

export type ScrollRevealOptions = {
  trigger?: gsap.DOMTarget;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
  markers?: boolean;
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  batchMax?: number;
};

export type SectionStep = {
  elements: gsap.DOMTarget | null | undefined;
  from: gsap.TweenVars;
  duration?: number;
  stagger?: number;
  ease?: string;
  at?: gsap.Position;
};

function buildToVars(fromVars: gsap.TweenVars): gsap.TweenVars {
  const to: gsap.TweenVars = {};

  if ("opacity" in fromVars) to.opacity = 1;
  if ("y" in fromVars) to.y = 0;
  if ("x" in fromVars) to.x = 0;
  if ("scale" in fromVars) to.scale = 1;

  return to;
}

function baseScrollTriggerVars(
  trigger: gsap.DOMTarget,
  start: string,
  options: Pick<ScrollRevealOptions, "scrub" | "end" | "once" | "markers">
): ScrollTrigger.Vars {
  const scrollTrigger: ScrollTrigger.Vars = {
    trigger,
    start,
    markers: options.markers ?? false,
    fastScrollEnd: true,
    invalidateOnRefresh: true,
  };

  if (options.scrub !== undefined) {
    scrollTrigger.scrub = options.scrub;
    if (options.end) scrollTrigger.end = options.end;
  } else {
    scrollTrigger.toggleActions =
      options.once === false ? "play reverse play reverse" : "play none none none";
  }

  return scrollTrigger;
}

/** Play a reveal when the trigger scrolls into view. */
export function scrollRevealFrom(
  elements: gsap.DOMTarget | null | undefined,
  fromVars: gsap.TweenVars,
  options: ScrollRevealOptions = {}
) {
  if (!elements || prefersReducedMotion()) return;

  const {
    trigger = elements,
    start = revealDefaults.start,
    end,
    scrub,
    once = true,
    markers = false,
    delay,
    duration = revealDefaults.duration,
    ease = revealDefaults.ease,
    stagger,
  } = options;

  return gsap.fromTo(elements, fromVars, {
    ...buildToVars(fromVars),
    duration,
    delay,
    ease,
    stagger,
    immediateRender: false,
    scrollTrigger: baseScrollTriggerVars(trigger, start, {
      scrub,
      end,
      once,
      markers,
    }),
  });
}

/** Reveal items in batches as they enter the viewport (great for cards/lists). */
export function scrollRevealBatch(
  elements: gsap.DOMTarget | null | undefined,
  fromVars: gsap.TweenVars,
  options: ScrollRevealOptions = {}
) {
  if (!elements || prefersReducedMotion()) return;

  const targets = gsap.utils.toArray<Element>(elements);
  if (!targets.length) return;

  const {
    start = revealDefaults.start,
    duration = revealDefaults.duration,
    ease = revealDefaults.ease,
    stagger = 0.1,
    batchMax = 6,
  } = options;

  ScrollTrigger.batch(targets, {
    start,
    once: true,
    batchMax,
    interval: 0.08,
    onEnter: (batch) => {
      gsap.fromTo(batch, fromVars, {
        ...buildToVars(fromVars),
        duration,
        ease,
        stagger: { each: stagger, from: "start" },
        immediateRender: false,
        overwrite: "auto",
      });
    },
  });
}

/** Coordinated multi-step reveal for a section. */
export function scrollRevealSection(
  trigger: gsap.DOMTarget | null | undefined,
  steps: SectionStep[],
  options: { start?: string } = {}
) {
  if (!trigger || prefersReducedMotion()) return;

  const tl = gsap.timeline({
    scrollTrigger: baseScrollTriggerVars(
      trigger,
      options.start ?? "top 76%",
      { once: true }
    ),
  });

  steps.forEach((step, index) => {
    if (!step.elements) return;

    tl.fromTo(
      step.elements,
      step.from,
      {
        ...buildToVars(step.from),
        duration: step.duration ?? revealDefaults.duration,
        ease: step.ease ?? revealDefaults.ease,
        stagger: step.stagger,
        immediateRender: false,
      },
      step.at ?? (index === 0 ? 0 : "-=0.55")
    );
  });

  return tl;
}

/** Timeline whose progress is tied to scroll position (scrub). */
export function scrollScrubTimeline(
  trigger: gsap.DOMTarget,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  } = {}
) {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start: options.start ?? "top top",
      end: options.end ?? "bottom top",
      scrub: options.scrub ?? 0.85,
      markers: options.markers ?? false,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
    },
  });
}

export function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  ScrollTrigger.refresh();
  ScrollTrigger.update();
}
