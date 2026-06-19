"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSlides } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";

export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="main-slider main-slider-two">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop
        effect="fade"
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: "#main-slider-two__swiper-button-next",
          prevEl: "#main-slider-two__swiper-button-prev",
          addIcons: false,
        }}
        autoplay={false}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.image} className="swiper-slide">
            <FallbackBackground
              className="image-layer"
              src={slide.image}
              fallbackKey={slide.imageFallback}
            />
            <div className="shape1">
              <img src="/img/shape/slider-v2-shape1.png" alt="" />
            </div>
            <div className="shape2">
              <img src="/img/shape/slider-v2-shape2.png" alt="" />
            </div>
            <div className="shape3">
              <img src="/img/shape/slider-v2-shape3.png" alt="" />
            </div>
            <div className="shape4">
              <img
                className="float-bob-x"
                src="/img/shape/slider-v2-shape4.png"
                alt=""
              />
            </div>
            <div className="big-title">
              <h2>Cardoil</h2>
            </div>
            <div className="container">
              <div className="main-slider-two__single padding">
                <div className="main-slider-two__content">
                  <div className="sub-title">
                    <p>{slide.subtitle}</p>
                  </div>
                  <div className="title">
                    <h2>
                      {slide.title} <br />
                      <span>{slide.titleAccent}</span>
                    </h2>
                  </div>
                  <div className="text">
                    <p>{slide.text}</p>
                  </div>
                  <div className="btn-box">
                    <Link className="thm-btn" href={slide.ctaHref}>
                      <span className="txt">{slide.ctaLabel}</span>
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="main-slider-two__wrap">
          <div className="swiper-counter">
            <div id="current">{currentSlide + 1}</div>
            <div id="total">{heroSlides.length}</div>
          </div>
        </div>
        <div className="swiper-nav-style1" style={{ justifyContent: "center" }}>
          <div
            className="swiper-button-prev"
            id="main-slider-two__swiper-button-next"
          >
            <i className="icon-left-arrow-5" aria-hidden="true" />
          </div>
          <div
            className="swiper-button-next"
            id="main-slider-two__swiper-button-prev"
            style={{ marginRight: "-20px" }}
          >
            <i className="icon-right-arrow-5" aria-hidden="true" />
          </div>
        </div>
      </Swiper>
    </section>
  );
}
