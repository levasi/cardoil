import type { Swiper as SwiperType } from "swiper";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type SwiperSlideEl = HTMLElement & { progress?: number };

function getSlides(swiper: SwiperType | null | undefined): SwiperSlideEl[] {
  if (!swiper) return [];

  if (Array.isArray(swiper.slides) && swiper.slides.length > 0) {
    return swiper.slides as SwiperSlideEl[];
  }

  const root = swiper.slidesEl ?? swiper.wrapperEl ?? swiper.el;
  if (!root) return [];

  return Array.from(root.querySelectorAll<SwiperSlideEl>(".swiper-slide"));
}

function getSlideParts(slide: HTMLElement) {
  return slide.querySelectorAll<HTMLElement>("[data-testimonial-reveal]");
}

export function animateTestimonialSlides(swiper: SwiperType | null | undefined) {
  if (prefersReducedMotion()) return;

  const slides = getSlides(swiper);
  if (!slides.length) return;

  slides.forEach((slide) => {
    const card = slide.querySelector<HTMLElement>(".cardoil-testimonial-card");
    if (!card) return;

    const parts = getSlideParts(slide);
    const isVisible = slide.classList.contains("swiper-slide-visible");

    gsap.killTweensOf([card, ...Array.from(parts)]);

    if (!isVisible) {
      gsap.set(card, { opacity: 0.55, scale: 0.98, y: 8 });
      gsap.set(parts, { opacity: 0.7 });
      return;
    }

    gsap.fromTo(
      card,
      { y: 36, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
        overwrite: "auto",
      }
    );

    gsap.fromTo(
      parts,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.62,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.1,
        overwrite: "auto",
      }
    );
  });
}

export function animateTestimonialSlideProgress(
  swiper: SwiperType | null | undefined
) {
  if (prefersReducedMotion() || !swiper || swiper.animating) return;

  const slides = getSlides(swiper);
  if (!slides.length) return;

  slides.forEach((slide) => {
    const card = slide.querySelector<HTMLElement>(".cardoil-testimonial-card");
    if (!card || !slide.classList.contains("swiper-slide-visible")) return;

    const distance = Math.abs(slide.progress ?? 0);
    const scale = 1 - distance * 0.035;
    const opacity = 1 - distance * 0.18;

    gsap.set(card, {
      scale: Math.max(0.94, scale),
      opacity: Math.max(0.72, opacity),
    });
  });
}

export function animateTestimonialCounter(el: HTMLElement | null) {
  if (!el || prefersReducedMotion()) return;

  gsap.fromTo(
    el,
    { y: 12, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.42, ease: "power2.out" }
  );
}

export function resetTestimonialSlideProgress(
  swiper: SwiperType | null | undefined
) {
  if (prefersReducedMotion()) return;

  const slides = getSlides(swiper);
  if (!slides.length) return;

  slides.forEach((slide) => {
    if (!slide.classList.contains("swiper-slide-visible")) return;

    const card = slide.querySelector<HTMLElement>(".cardoil-testimonial-card");
    if (card) {
      gsap.set(card, { scale: 1, opacity: 1 });
    }
  });
}

export function runInitialTestimonialAnimations(
  swiper: SwiperType | null | undefined,
  counterEl: HTMLElement | null
) {
  if (!getSlides(swiper).length) return;

  animateTestimonialSlides(swiper);
  resetTestimonialSlideProgress(swiper);
  animateTestimonialCounter(counterEl);
}
