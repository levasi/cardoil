"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";
import { factStats } from "@/lib/content";

function formatCount(value: number) {
  return Math.round(value).toLocaleString("ro-RO");
}

export function HomeFact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const counters = gsap.utils.toArray<HTMLElement>("[data-count]", section);

      if (prefersReducedMotion()) {
        counters.forEach((el) => {
          el.textContent = formatCount(Number(el.dataset.count));
        });
        return;
      }

      ScrollTrigger.create({
        trigger: section,
        start: "top 72%",
        once: true,
        onEnter: () => {
          counters.forEach((el, index) => {
            const counter = { value: 0 };

            gsap.to(counter, {
              value: Number(el.dataset.count),
              duration: 1.8,
              delay: index * 0.1,
              ease: "power2.out",
              snap: { value: 1 },
              onUpdate: () => {
                el.textContent = formatCount(counter.value);
              },
            });
          });
        },
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {factStats.map((stat) => (
            <div key={stat.label}>
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
