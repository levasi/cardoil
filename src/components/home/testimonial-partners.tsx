"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface PartnerLogo {
  name: string;
  src: string;
}

interface TestimonialPartnersProps {
  partners: PartnerLogo[];
}

export function TestimonialPartners({ partners }: TestimonialPartnersProps) {
  return (
    <div className="cardoil-testimonial-partners relative z-[1] mt-[145px] overflow-hidden border-t-2 border-white/20 bg-[#0a1628] py-[125px] pb-[124px]">
      <div
        className="cardoil-testimonial-partners__shape float-bob-x absolute bottom-0 -right-[30px] -z-10 max-lg:hidden"
        aria-hidden
      >
        <img src="/img/shape/brand-v1-shape1.png" alt="" />
      </div>
      <p
        className="cardoil-testimonial-partners__watermark pointer-events-none absolute top-1/2 -translate-y-1/2 font-heading text-[190px] font-bold uppercase leading-none tracking-[0.06em] text-white/5"
        aria-hidden
      >
        parteneri
      </p>
      <div className="container">
        <Swiper
          className="cardoil-testimonial-partners__slider"
          spaceBetween={30}
          loop
          slidesPerView={5}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 2 },
            575: { slidesPerView: 3 },
            767: { slidesPerView: 4 },
            991: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden">
                <div className="cardoil-testimonial-partners__logo cardoil-testimonial-partners__logo--default transition-transform duration-300 group-hover:-translate-y-full">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="w-auto opacity-80"
                  />
                </div>
                <div className="cardoil-testimonial-partners__logo cardoil-testimonial-partners__logo--hover absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
                  <img src={partner.src} alt="" className="w-auto" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
