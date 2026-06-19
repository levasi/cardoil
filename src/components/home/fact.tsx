"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion, revealPresets } from "@/lib/gsap";
import { factStats } from "@/lib/content";

function formatCount(value: number) {
  return Math.round(value).toLocaleString("ro-RO");
}

function getGridDimensions(itemCount: number) {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    return { rows: 1, cols: itemCount };
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    const cols = 2;
    return { rows: Math.ceil(itemCount / cols), cols };
  }
  return { rows: itemCount, cols: 1 };
}

function getBottomUpStaggerIndex(
  index: number,
  rows: number,
  cols: number
) {
  const row = Math.floor(index / cols);
  const col = index % cols;
  const rowFromBottom = rows - 1 - row;
  return rowFromBottom * cols + col;
}

export function HomeFact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const grid = section.querySelector<HTMLElement>("[data-fact-grid]");
      const items = grid ? gsap.utils.toArray<Element>(grid.children) : [];
      const counters = gsap.utils.toArray<HTMLElement>("[data-count]", section);

      if (prefersReducedMotion()) {
        counters.forEach((el) => {
          el.textContent = formatCount(Number(el.dataset.count));
        });
        return;
      }

      const { rows, cols } = getGridDimensions(items.length);

      gsap.set(items, revealPresets.fadeUpSoft);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          end: "top 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        items,
        revealPresets.fadeUpSoft,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: (index) => getBottomUpStaggerIndex(index, rows, cols) * 0.08,
        },
        0
      );

      counters.forEach((el) => {
        const card = el.closest<HTMLElement>("[data-fact-item]");
        const index = card ? items.indexOf(card) : counters.indexOf(el);
        const staggerIndex =
          index >= 0 ? getBottomUpStaggerIndex(index, rows, cols) : 0;

        const counter = { value: 0 };
        tl.to(
          counter,
          {
            value: Number(el.dataset.count),
            duration: 1.2,
            ease: "power2.out",
            snap: { value: 1 },
            onUpdate: () => {
              el.textContent = formatCount(counter.value);
            },
          },
          staggerIndex * 0.08
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="fact-counter-two padding-bottom"
      id="fact-counter"
    >
      <div className="shape1">
        <img src="/img/shape/counter-v2-shape1.png" alt="" />
      </div>
      <div className="container">
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
          data-fact-grid
        >
          {factStats.map((stat) => (
            <div key={stat.label} data-fact-item>
              <div className="fact-counter-two__single">
                <div className="icon-box">
                  <span className={stat.icon} />
                </div>
                <div className="fact-counter-two__single-inner">
                  <h2 className="count flex">
                    <span className="plus">+</span>
                    <span className="odometer" data-count={stat.value}>
                      0
                    </span>
                  </h2>
                  <div className="text">
                    <p>{stat.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
