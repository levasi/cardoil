"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { aboutImages, aboutIntro, siteConfig } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";
import { FallbackImage } from "@/components/shared/fallback-image";
import {
  gsap,
  prefersReducedMotion,
  revealPresets,
} from "@/lib/gsap";

const yearsExperience = new Date().getFullYear() - siteConfig.founded;

export function HomeAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const grid = section.querySelector<HTMLElement>("[data-about-grid]");
      const experienceBox = section.querySelector(".about-two__experience-box");
      const imgMain = section.querySelector(".about-two__img1");
      const video = section.querySelector(".about-two__video");
      const title = section.querySelector(".about-two__content .sec-title-two");
      const text = section.querySelector(".about-two__content-text");
      const listItems = section.querySelectorAll(".about-two__content-list li");
      const btn = section.querySelector(".about-two__content-bottom");
      const counter = section.querySelector<HTMLElement>(
        ".about-two__experience-box .odometer"
      );
      const shape = section.querySelector(".shape1");

      if (prefersReducedMotion()) {
        if (counter) counter.textContent = String(yearsExperience);
        return;
      }

      const endPadding = window.matchMedia("(max-width: 767px)").matches
        ? 60
        : window.matchMedia("(max-width: 991px)").matches
          ? 80
          : 120;
      const endGap = window.matchMedia("(min-width: 1280px)").matches
        ? "1.5rem"
        : "2rem";

      gsap.set(section, { paddingTop: endPadding * 0.65, paddingBottom: endPadding * 0.65 });
      if (grid) gsap.set(grid, { gap: "0.75rem" });
      if (shape) gsap.set(shape, { opacity: 0, x: -24 });
      if (imgMain) gsap.set(imgMain, { opacity: 0 });
      if (experienceBox) gsap.set(experienceBox, revealPresets.slideLeft);
      if (video) gsap.set(video, revealPresets.slideRight);

      const contentElements = [title, text, ...listItems, btn].filter(
        (el): el is Element => Boolean(el)
      );
      if (contentElements.length) {
        gsap.set(contentElements, revealPresets.slideRight);
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: false,
          scrub: true,
          toggleActions: "play none none none",
        },
      });

      tl.to(
        section,
        {
          paddingTop: endPadding,
          paddingBottom: endPadding,
          duration: 1.05,
          ease: "power3.out",
        },
        0
      );

      if (grid) {
        tl.to(
          grid,
          {
            gap: endGap,
            duration: 1.05,
            ease: "power3.out",
          },
          0
        );
      }

      if (shape) {
        tl.fromTo(
          shape,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
          0.1
        );
      }

      if (experienceBox) {
        tl.fromTo(
          experienceBox,
          revealPresets.slideLeft,
          { x: 0, opacity: 1, duration: 0.95, ease: "power3.out" },
          0.12
        );
      }

      if (imgMain) {
        tl.fromTo(
          imgMain,
          { opacity: 0 },
          { opacity: 1, duration: 0.95, ease: "power3.out" },
          0.12
        );
      }

      if (video) {
        tl.fromTo(
          video,
          revealPresets.slideRight,
          { x: 0, opacity: 1, duration: 0.95, ease: "power3.out" },
          0.12
        );
      }

      if (counter) {
        const count = { value: 0 };
        tl.to(
          count,
          {
            value: yearsExperience,
            duration: 1.4,
            ease: "power2.out",
            snap: { value: 1 },
            onUpdate: () => {
              counter.textContent = String(Math.round(count.value));
            },
          },
          0.35
        );
      }

      if (contentElements.length) {
        tl.fromTo(
          contentElements,
          revealPresets.slideRight,
          {
            x: 0,
            opacity: 1,
            duration: 0.88,
            ease: "power3.out",
            stagger: { each: 0.11, from: "start" },
          },
          0.18
        );
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section className="about-two padding" id="about-two" ref={sectionRef}>
      <div className="shape1 float-bob-x">
        <img src="/img/shape/about-v2-shape1.png" alt="" />
      </div>
      <div className="container">
        <div
          className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-6"
          data-about-grid
        >
          <div>
            <div className="about-two__img">
              <div className="about-two__experience-box text-center">
                <FallbackBackground
                  className="about-two__experience-box-bg"
                  src="/img/about/about-v2-img2-.jpg"
                  fallbackKey="team"
                />
                <div className="inner">
                  <h2 className="count flex text-center">
                    <span className="odometer" style={{ marginLeft: "15px" }}>
                      0
                    </span>
                    <span className="plus">+</span>
                  </h2>
                  <div className="text">
                    <p>
                      Ani de <br />
                      experiență
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-two__img1">
                <FallbackImage
                  src={aboutImages.team}
                  alt="Echipa Cardoil Avantaj"
                  fallbackKey="team"
                />
              </div>
              <div className="about-two__video">
                <FallbackBackground
                  className="about-two__video-bg"
                  src={aboutImages.partnership}
                  fallbackKey="partnership"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="about-two__content">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Despre companie</h5>
                </div>
                <h2>
                  Brokerul tău de transport <br />și combustibil
                </h2>
              </div>
              <div className="about-two__content-text">
                <p>{aboutIntro.paragraphs[0]}</p>
              </div>
              <div className="about-two__content-list">
                <ul>
                  <li>
                    <div className="icon-box">
                      <span className="icon-check-marked-1" />
                    </div>
                    <p>Reduceri la carburant la principalii furnizori</p>
                  </li>
                  <li>
                    <div className="icon-box">
                      <span className="icon-check-marked-1" />
                    </div>
                    <p>Transport marfă prin Cardoil Expedition</p>
                  </li>
                </ul>
              </div>
              <div className="about-two__content-bottom">
                <div className="btn-box">
                  <Link className="thm-btn" href="/despre">
                    <span className="txt">Află mai mult</span>
                    <i className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
