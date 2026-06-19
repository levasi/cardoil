import type { Metadata } from "next";
import { SitePageHeader } from "@/components/site/page-header";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Solicită ofertă",
  description:
    "Solicită o ofertă pentru carduri de combustibil Cardoil Avantaj. Completează formularul și vom reveni rapid.",
};

const benefits = [
  "Reduceri la carburant la principalii furnizori",
  "Factură unică lunară — fără bonuri",
  "Platformă online Gestcom pentru control costuri",
  "Acces la 1.500+ stații în RO și 43.500 în UE",
  "Notificări automate Email și SMS",
  "Suport dedicat, inclusiv în weekend",
];

export default function OfferPage() {
  return (
    <>
      <SitePageHeader title="Solicită ofertă" />
      <section className="padding">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
            <div className="xl:col-span-5">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Ofertă personalizată</h5>
                </div>
                <h2>Ce primești cu Cardoil Avantaj</h2>
              </div>
              <ul className="about-two__content-list" style={{ marginTop: 24 }}>
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <div className="icon-box">
                      <span className="icon-check-marked-1" />
                    </div>
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-span-7">
              <div className="company-benefit-one__form">
                <div className="title-box">
                  <h2>Formular ofertă</h2>
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
