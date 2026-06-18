"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { fuelPartnerLogos, testimonials } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";

export function TransloTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="testimonials-two padding">
      <FallbackBackground
        className="testimonials-two__bg"
        src="/img/background/testimonials-v2-bg.jpg"
        fallbackKey="testimonialBg"
      />
      <div className="container">
        <div className="sec-title-two">
          <div className="sub-title">
            <h5>Testimoniale</h5>
          </div>
          <h2>Ce spun clienții noștri</h2>
        </div>
        <Swiper
          className="testimonials-two__slider"
          loop
          navigation={{
            nextEl: "#testimonials-two__swiper-button-next",
            prevEl: "#testimonials-two__swiper-button-prev",
            addIcons: false,
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          slidesPerView={1}
          spaceBetween={30}
          onSlideChange={(swiper) => setCurrentTestimonial(swiper.realIndex)}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.author}>
              <div className="testimonials-two__single">
                <div className="quote-icon">
                  <span className="icon-quote11" />
                </div>
                <div className="testimonials-two__single-top">
                  <div className="text-box">
                    <p>Client mulțumit</p>
                    <h3>{item.author}</h3>
                  </div>
                </div>
                <div className="testimonials-two__single-bottom">
                  <div className="content-box">
                    <h3>{item.role}</h3>
                    <p>{item.quote}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonials-two__wrap">
          <div className="swiper-counter">
            <div id="current3">{currentTestimonial + 1}</div>
            <div id="total3">{testimonials.length}</div>
          </div>
        </div>
        <div className="swiper-nav-style1">
          <div
            className="swiper-button-prev"
            style={{ marginRight: "19px" }}
            id="testimonials-two__swiper-button-next"
          >
            <i className="icon-left-arrow-5" aria-hidden="true" />
          </div>
          <div
            className="swiper-button-next"
            id="testimonials-two__swiper-button-prev"
          >
            <i className="icon-right-arrow-5" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="brand-one padding margin-top">
        <div className="shape1 float-bob-x">
          <img src="/img/shape/brand-v1-shape1.png" alt="" />
        </div>
        <div className="big-title">parteneri</div>
        <div className="container">
          <Swiper
            spaceBetween={30}
            loop
            slidesPerView={5}
            autoplay={{ delay: 2500 }}
            modules={[Autoplay]}
            className="thm-swiper__slider swiper-container"
            breakpoints={{
              0: { slidesPerView: 2 },
              575: { slidesPerView: 3 },
              767: { slidesPerView: 4 },
              991: { slidesPerView: 5 },
            }}
          >
            {fuelPartnerLogos.map((partner) => (
              <SwiperSlide key={partner.name}>
                <div className="img-box">
                  <img src={partner.src} alt={partner.name} />
                </div>
                <div className="img-box2">
                  <img src={partner.src} alt={partner.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
