import type { Metadata } from "next";
import { TransloPageHeader } from "@/components/translo/page-header";
import { AboutAccordion } from "@/components/sections/about-accordion";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
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
      <TransloPageHeader title="Despre noi" />
      <section className="about-two padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <SiteImage
                src={aboutImages.team}
                alt="Echipa Cardoil Avantaj"
                aspect="wide"
                containerClassName="shadow-elevated"
                fallbackKey="team"
              />
            </div>
            <div className="col-xl-6">
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
          <div className="row">
            {aboutStats.map((stat) => (
              <div key={stat.value} className="col-xl-4 col-md-6">
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
          <div className="row">
            <div className="col-xl-6">
              <SiteImage
                src={aboutImages.partnership}
                alt="Parteneriat Cardoil Avantaj"
                aspect="wide"
                fallbackKey="partnership"
              />
            </div>
            <div className="col-xl-6">
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
      <Testimonials />
      <Partners />
    </>
  );
}
