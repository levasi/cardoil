"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  prefersReducedMotion,
  refreshScrollTriggers,
  revealPresets,
  scrollRevealFrom,
  scrollRevealSection,
} from "@/lib/gsap";

interface ScrollAnimationsProps {
  children: ReactNode;
}

/** Scroll reveals for inner pages. */
export function ScrollAnimations({ children }: ScrollAnimationsProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return;

      const root = scope.current;

      const contact = root.querySelector(".contact-one");
      if (contact) {
        scrollRevealSection(
          contact,
          [
            {
              elements: contact.querySelectorAll(".about-two__content-list li"),
              from: revealPresets.fadeUpSoft,
              stagger: 0.09,
            },
            {
              elements: contact.querySelector(".company-benefit-one__form"),
              from: revealPresets.slideRight,
              duration: 0.95,
              at: "-=0.35",
            },
          ],
          { start: "top 76%" }
        );
      }

      gsap.utils
        .toArray<HTMLElement>(root.querySelectorAll(".sec-title-two"))
        .forEach((el) => {
          if (el.closest(".cardoil-testimonials, .about-two, .services-two, .faq-one--two")) {
            return;
          }
          scrollRevealFrom(el, revealPresets.title, {
            trigger: el,
            start: "top 88%",
            duration: 0.95,
            ease: "power2.out",
          });
        });

      const pageHeader = root.querySelector(".page-header__inner");
      if (pageHeader) {
        scrollRevealSection(
          pageHeader,
          [
            {
              elements: pageHeader.querySelector("h2"),
              from: revealPresets.fadeUp,
              duration: 0.85,
            },
            {
              elements: pageHeader.querySelector(".thm-breadcrumb"),
              from: revealPresets.fadeUpSoft,
              duration: 0.75,
              at: "-=0.5",
            },
          ],
          { start: "top 80%" }
        );
      }

      refreshScrollTriggers();
      requestAnimationFrame(refreshScrollTriggers);

      const refresh = () => refreshScrollTriggers();
      window.addEventListener("load", refresh);

      return () => window.removeEventListener("load", refresh);
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
