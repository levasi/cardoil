"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { fuelPartnerLogos, testimonials } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";
import { TestimonialPartners } from "@/components/home/testimonial-partners";
import {
  animateTestimonialCounter,
  animateTestimonialSlideProgress,
  animateTestimonialSlides,
  resetTestimonialSlideProgress,
  runInitialTestimonialAnimations,
} from "@/lib/animations/testimonial-slider";

export function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  const handleSwiperInit = (swiper: SwiperType) => {
    requestAnimationFrame(() => {
      runInitialTestimonialAnimations(swiper, counterRef.current);
    });
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    animateTestimonialCounter(counterRef.current);
  };

  const handleTransitionEnd = (swiper: SwiperType) => {
    animateTestimonialSlides(swiper);
    resetTestimonialSlideProgress(swiper);
  };

  return (
    <section className="cardoil-testimonials relative z-[1] pt-[120px]">
      <FallbackBackground
        className="cardoil-testimonials__bg absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/90 before:content-['']"
        src="/img/background/testimonials-v2-bg.jpg"
        fallbackKey="testimonialBg"
      />

      <div className="container relative">
        <div className="sec-title-two cardoil-testimonials__heading mb-2 [&_.sub-title]:bg-white/10 [&_h2]:text-white">
          <div className="sub-title">
            <h5>Testimoniale</h5>
          </div>
          <h2>Ce spun clienții noștri</h2>
        </div>

        <Swiper
          className="cardoil-testimonials__slider !overflow-visible"
          loop
          speed={800}
          grabCursor
          watchSlidesProgress
          navigation={{
            nextEl: "#cardoil-testimonials-nav-next",
            prevEl: "#cardoil-testimonials-nav-prev",
            addIcons: false,
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          slidesPerView={1}
          spaceBetween={30}
          onInit={handleSwiperInit}
          onSlideChange={handleSlideChange}
          onSlideChangeTransitionEnd={handleTransitionEnd}
          onSetTranslate={(swiper) => animateTestimonialSlideProgress(swiper)}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.author}>
              <article className="cardoil-testimonial-card group relative rounded bg-white px-[30px] pb-[31px] pt-[30px] will-change-transform lg:max-w-none max-lg:mx-auto max-lg:max-w-[500px]">
                <div
                  className="cardoil-testimonial-card__quote pointer-events-none absolute right-10 top-[50px] -z-10"
                  data-testimonial-reveal
                  aria-hidden
                >
                  <span className="icon-quote11 inline-block text-[35px] leading-[35px] text-brand/6 transition-colors duration-300 group-hover:text-brand" />
                </div>

                <header
                  className="cardoil-testimonial-card__header flex items-center"
                  data-testimonial-reveal
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium capitalize leading-5 text-[#6F7174]">
                      Client mulțumit
                    </p>
                    <h3 className="mt-[3px] text-lg font-semibold capitalize leading-7">
                      {item.author}
                    </h3>
                  </div>
                </header>

                <div
                  className="cardoil-testimonial-card__body mt-[29px]"
                  data-testimonial-reveal
                >
                  <p className="mb-3.5 text-lg font-semibold capitalize leading-7 text-[#6F7174]">
                    {item.role}
                  </p>
                  <blockquote className="m-0 font-medium leading-relaxed text-[#062547]">
                    {item.quote}
                  </blockquote>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="cardoil-testimonials__counter absolute right-[190px] top-14 z-[100] hidden lg:block"
          aria-live="polite"
        >
          <div className="inline-flex w-10 items-baseline font-heading text-2xl font-medium leading-6 text-white">
            <span ref={counterRef} className="mr-1.5 inline-block">
              {activeIndex + 1}
            </span>
            <span className="relative top-4 text-xl leading-5 text-white/40 before:absolute before:-left-4 before:top-[-5px] before:content-['/']">
              {testimonials.length}
            </span>
          </div>
        </div>

        <div className="swiper-nav-style1 cardoil-testimonials__nav hidden lg:flex">
          <div
            className="swiper-button-prev mr-[19px] transition-transform duration-300 hover:scale-105 active:scale-95"
            id="cardoil-testimonials-nav-next"
          >
            <i className="icon-left-arrow-5" aria-hidden="true" />
          </div>
          <div
            className="swiper-button-next transition-transform duration-300 hover:scale-105 active:scale-95"
            id="cardoil-testimonials-nav-prev"
          >
            <i className="icon-right-arrow-5" aria-hidden="true" />
          </div>
        </div>
      </div>

      <TestimonialPartners partners={fuelPartnerLogos} />
    </section>
  );
}
