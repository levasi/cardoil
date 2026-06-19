import type { Metadata } from "next";
import { SitePageHeader } from "@/components/site/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează Cardoil Avantaj — vanzari si asistenta la 075 CARDOIL. Bd. Unirii nr. 45, Sector 3, București.",
};

export default function ContactPage() {
  return (
    <>
      <SitePageHeader title="Contact" />
      <section className="contact-one padding">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
            <div className="xl:col-span-5">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Date de contact</h5>
                </div>
                <h2>Suntem aici pentru tine</h2>
              </div>
              <ul className="about-two__content-list" style={{ marginTop: 24 }}>
                <li>
                  <div className="icon-box">
                    <span className="icon-pin" />
                  </div>
                  <p>{siteConfig.address}</p>
                </li>
                <li>
                  <div className="icon-box">
                    <span className="icon-out-call" />
                  </div>
                  <p>
                    <a href={`tel:${siteConfig.phone.replace(/\./g, "")}`}>
                      {siteConfig.phoneDisplay} ({siteConfig.phone})
                    </a>
                  </p>
                </li>
                <li>
                  <div className="icon-box">
                    <span className="icon-paper-plane" />
                  </div>
                  <p>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </p>
                </li>
                <li>
                  <div className="icon-box">
                    <span className="icon-check-marked-1" />
                  </div>
                  <p>Luni – Vineri: 09:00 – 18:00</p>
                </li>
              </ul>
            </div>
            <div className="xl:col-span-7">
              <div className="company-benefit-one__form">
                <div className="title-box">
                  <h2>Trimite un mesaj</h2>
                </div>
                <ContactForm variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
