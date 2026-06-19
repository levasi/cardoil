import type { Metadata } from "next";
import { AboutAccordion } from "@/components/about/accordion";
import { AboutPartners } from "@/components/about/partners";
import { AboutTestimonials } from "@/components/about/testimonials";
import { SitePageHeader } from "@/components/site/page-header";
import { SiteImage } from "@/components/shared/site-image";
import { aboutImages, aboutIntro, aboutStats } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Cardoil Avantaj — broker de transport și combustibil din 2010. Echipă, viziune, istoric și servicii integrate pentru transportatori din România.",
};

export default function AboutPage() {
  return (
    <>
      <SitePageHeader title="Despre noi" />
      <section className="about-two padding">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-6">
            <div>
              <SiteImage
                src={aboutImages.team}
                alt="Echipa Cardoil Avantaj"
                aspect="wide"
                containerClassName="shadow-elevated"
                fallbackKey="team"
              />
            </div>
            <div>
              <div className="about-two__content">
                <div className="sec-title-two">
                  <div className="sub-title">
                    <h5>Despre noi</h5>
                  </div>
                  <h2>CARD OIL AVANTAJ</h2>
                </div>
                <div className="about-two__content-text">
                  {aboutIntro.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fact-counter-two padding-bottom">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aboutStats.map((stat) => (
              <div key={stat.value}>
                <div className="fact-counter-two__single">
                  <div className="fact-counter-two__single-inner">
                    <h2
                      className={cn(
                        "font-heading italic",
                        stat.highlight ? "text-navy" : "text-muted-foreground"
                      )}
                    >
                      {stat.value}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="padding">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-6">
            <div>
              <SiteImage
                src={aboutImages.partnership}
                alt="Parteneriat Cardoil Avantaj"
                aspect="wide"
                fallbackKey="partnership"
              />
            </div>
            <div>
              <AboutAccordion />
            </div>
          </div>
        </div>
      </section>
      <section className="padding bg-muted/20">
        <div className="container max-w-5xl">
          <SiteImage
            src={aboutImages.certificate2023}
            alt="Certificate Cardoil Avantaj 2023"
            aspect="auto"
            containerClassName="aspect-certificate rounded-2xl border bg-card"
            className="object-contain p-4"
            fallbackKey="certificate"
          />
        </div>
      </section>
      <AboutTestimonials />
      <AboutPartners />
    </>
  );
}
