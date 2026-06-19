import type { Metadata } from "next";
import Link from "next/link";
import { SitePageHeader } from "@/components/site/page-header";
import { SiteImage } from "@/components/shared/site-image";
import { services, servicesPageIntro } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Servicii Cardoil Avantaj: card combustibil, transport marfă, platforma Gestcom, cost control și factură unică pentru firme de transport.",
};

export default function ServicesPage() {
  return (
    <>
      <SitePageHeader title="Servicii" />
      <section className="services-two padding">
        <div className="container">
          <div className="sec-title-two text-center">
            <div className="sub-title">
              <h5>Serviciile noastre</h5>
            </div>
            <h2>{servicesPageIntro.title}</h2>
            <p style={{ maxWidth: 720, margin: "16px auto 0" }}>
              {servicesPageIntro.description}
            </p>
          </div>
          <div className="mt-12 space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
              >
                <div className={cn(index % 2 === 1 && "lg:order-2")}>
                  <SiteImage
                    src={service.image}
                    alt={service.imageAlt}
                    aspect="photo"
                    priority={index === 0}
                    fallbackKey={service.imageFallback}
                  />
                </div>
                <div className={cn(index % 2 === 1 && "lg:order-1")}>
                  <div className="about-two__content">
                    <div className="sec-title-two">
                      <div className="sub-title">
                        <h5>{service.subtitle}</h5>
                      </div>
                      <h2>{service.title}</h2>
                    </div>
                    <div className="about-two__content-text">
                      <p>{service.description}</p>
                      <p>{service.detail}</p>
                    </div>
                    <div className="btn-box">
                      <Link className="thm-btn" href="/oferta">
                        <span className="txt">Solicită ofertă</span>
                        <i className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
