import { HomeAbout } from "@/components/home/about";
import { HomeCompanyBenefit } from "@/components/home/company-benefit";
import { HomeCta } from "@/components/home/cta";
import { HomeFact } from "@/components/home/fact";
import { HomeFaq } from "@/components/home/faq";
import { HomeHero } from "@/components/home/hero";
import { HomeServices } from "@/components/home/services";
import { HomeTestimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeFact />
      <HomeServices />
      <HomeCompanyBenefit />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
