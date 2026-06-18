"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { services } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";
import { FallbackImage } from "@/components/shared/fallback-image";

export function TransloServices() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="services-two padding">
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
            Soluții complete de alimentare <br className="d-block d-lg-none" /> și
            transport
          </h2>
        </div>
        <Swiper
          className="services-two__slider"
          slidesPerView={1}
          spaceBetween={15}
          navigation={{
            nextEl: "#services-two__swiper-button-next",
            prevEl: "#services-two__swiper-button-prev",
            addIcons: false,
          }}
          loop
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.title}>
              <div className="services-two__single">
                <div className="services-two__single-img">
                  <div className="inner">
                    <FallbackImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackKey={service.imageFallback}
                    />
                  </div>
                  <div className="number-box">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="services-two__single-content">
                  <div className="services-two__single-content-inner">
                    <h3>
                      <Link href="/servicii">{service.title}</Link>
                    </h3>
                    <p>{service.description}</p>
                    <div className="count-box">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/servicii">
                      <span className="txt">Detalii</span>
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="services-two__wrap">
          <div className="swiper-counter">
            <div id="current2">{currentSlide + 1}</div>
            <div id="total2">{services.length}</div>
          </div>
        </div>
        <div className="swiper-nav-style1">
          <div
            className="swiper-button-prev"
            id="services-two__swiper-button-next"
            style={{ marginRight: "5px" }}
          >
            <i className="icon-left-arrow-5" aria-hidden="true" />
          </div>
          <div
            className="swiper-button-next"
            id="services-two__swiper-button-prev"
            style={{ marginLeft: "25px" }}
          >
            <i className="icon-right-arrow-5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
