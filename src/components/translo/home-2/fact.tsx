"use client";

import { useEffect, useState, type ComponentType } from "react";
import { factStats } from "@/lib/content";

type AnimatedNumbersProps = {
  animateToNumber: number;
  transitions: (index: number) => object;
};

export function TransloFact() {
  const [isVisible, setIsVisible] = useState(false);
  const [AnimatedNumbers, setAnimatedNumbers] =
    useState<ComponentType<AnimatedNumbersProps> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("fact-counter");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    import("react-animated-numbers").then((module) => {
      setAnimatedNumbers(() => module.default);
    });
  }, []);

  return (
    <section className="fact-counter-two padding-bottom" id="fact-counter">
      <div className="shape1 float-bob-y">
        <img src="/img/shape/counter-v2-shape1.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          {factStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`col-xl-3 col-lg-6 col-md-6 ${index % 2 === 0 ? "wow fadeInUp" : "wow fadeInDown"}`}
            >
              <div className="fact-counter-two__single">
                <div className="icon-box">
                  <span className={stat.icon} />
                </div>
                <div className="fact-counter-two__single-inner">
                  <h2 className="count d-flex">
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
