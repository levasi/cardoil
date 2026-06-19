"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";
import { FallbackImage } from "@/components/shared/fallback-image";
import { gsap, prefersReducedMotion, revealPresets } from "@/lib/gsap";

function getSectionPadding() {
  if (window.matchMedia("(max-width: 767px)").matches) return 60;
  if (window.matchMedia("(max-width: 991px)").matches) return 80;
  return 120;
}

function getGridGap() {
  return window.matchMedia("(min-width: 1024px)").matches ? "2rem" : "1.5rem";
}

function getGridDimensions(itemCount: number) {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    const cols = 3;
    return { rows: Math.ceil(itemCount / cols), cols };
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    const cols = 2;
    return { rows: Math.ceil(itemCount / cols), cols };
  }
  return { rows: itemCount, cols: 1 };
}

function getBottomUpStaggerIndex(index: number, rows: number, cols: number) {
  const row = Math.floor(index / cols);
  const col = index % cols;
  const rowFromBottom = rows - 1 - row;
  return rowFromBottom * cols + col;
}

export function HomeServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const header = section.querySelector(".sec-title-two");
      const grid = section.querySelector<HTMLElement>("[data-services-grid]");
      const cards = grid ? gsap.utils.toArray<Element>(grid.children) : [];
      const shape = section.querySelector(".shape1");

      if (prefersReducedMotion()) return;

      const endPadding = getSectionPadding();
      const endGap = getGridGap();
      const { rows, cols } = getGridDimensions(cards.length);

      gsap.set(section, {
        paddingTop: endPadding * 0.65,
        paddingBottom: endPadding * 0.7,
      });
      if (grid) gsap.set(grid, { gap: "0.75rem" });
      if (shape) gsap.set(shape, { opacity: 0, y: 28 });
      if (header) gsap.set(header, revealPresets.fadeUpSoft);
      if (cards.length) gsap.set(cards, revealPresets.fadeUpSoft);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          end: "top 58%",
          scrub: 0.5,
        },
      });

      tl.to(
        section,
        {
          paddingTop: endPadding,
          paddingBottom: endPadding,
          duration: 1,
          ease: "power3.out",
        },
        0
      );

      if (grid) {
        tl.to(
          grid,
          { gap: endGap, duration: 1, ease: "power3.out" },
          0
        );
      }

      if (shape) {
        tl.fromTo(
          shape,
          { opacity: 0, y: 28 },
          { opacity: 0.5, y: 0, duration: 0.9, ease: "power3.out" },
          0.05
        );
      }

      if (header) {
        tl.fromTo(
          header,
          revealPresets.fadeUpSoft,
          { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
          0.08
        );
      }

      if (cards.length) {
        tl.fromTo(
          cards,
          revealPresets.fadeUpSoft,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: (index) => getBottomUpStaggerIndex(index, rows, cols) * 0.09,
          },
          0.15
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section className="services-two" id="services-two" ref={sectionRef}>
      <FallbackBackground
        className="services-two__bg"
        src="/img/background/services-v2-bg.jpg"
        fallbackKey="servicesBg"
      />
      <div className="shape1">
        <img src="/img/shape/services-v2-shape1.png" alt="" />
      </div>
      <div className="container">
        <div className="sec-title-two">
          <div className="sub-title">
            <h5>Serviciile noastre</h5>
          </div>
          <h2>
            Soluții complete de alimentare <br className="block lg:hidden" /> și
            transport
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          data-services-grid
        >
          {services.map((service, index) => (
            <article
              key={service.title}
              className="services-two__card"
              data-service-card
            >
              <div className="services-two__card-media">
                <FallbackImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackKey={service.imageFallback}
                />
                <span className="services-two__card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="services-two__card-body">
                <p className="services-two__card-eyebrow">{service.subtitle}</p>
                <h3>
                  <Link href="/servicii">{service.title}</Link>
                </h3>
                <p className="services-two__card-desc">{service.description}</p>
                <Link className="thm-btn" href="/servicii">
                  <span className="txt">Detalii</span>
                  <i className="icon-right-arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
