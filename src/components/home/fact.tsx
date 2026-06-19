"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { prefersReducedMotion } from "@/lib/gsap";
import { factStats } from "@/lib/content";

type AnimatedNumbersProps = {
  animateToNumber: number;
  transitions: (index: number) => object;
};

export function HomeFact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [AnimatedNumbers, setAnimatedNumbers] =
    useState<ComponentType<AnimatedNumbersProps> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -28% 0px", threshold: 0 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    import("react-animated-numbers").then((module) => {
      setAnimatedNumbers(() => module.default);
    });
  }, []);

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
                    <span className="odometer">
                      {isVisible && AnimatedNumbers && (
                        <AnimatedNumbers
                          animateToNumber={stat.value}
                          transitions={(i) => ({
                            type: "spring",
                            duration: i + 0.3,
                          })}
                        />
                      )}
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
