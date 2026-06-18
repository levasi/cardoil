import { TransloAbout } from "@/components/translo/home-2/about";
import { TransloCompanyBenefit } from "@/components/translo/home-2/company-benefit";
import { TransloCta } from "@/components/translo/home-2/cta";
import { TransloFact } from "@/components/translo/home-2/fact";
import { TransloFaq } from "@/components/translo/home-2/faq";
import { TransloHero } from "@/components/translo/home-2/hero";
import { TransloServices } from "@/components/translo/home-2/services";
import { TransloTestimonials } from "@/components/translo/home-2/testimonials";

export default function HomePage() {
  return (
    <>
      <TransloHero />
      <TransloAbout />
      <TransloFact />
      <TransloServices />
      <TransloCompanyBenefit />
      <TransloTestimonials />
      <TransloFaq />
      <TransloCta />
    </>
  );
}
