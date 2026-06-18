import Link from "next/link";
import { companyBenefits } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";

export function TransloCompanyBenefit() {
  return (
    <section className="company-benefit-one padding">
      <FallbackBackground
        className="company-benefit-one__img"
        src="/img/resource/company-benefit-v1-img1.jpg"
        fallbackKey="companyBenefit"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="company-benefit-one__content">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Avantaje Cardoil</h5>
                </div>
                <h2>De ce Cardoil Avantaj?</h2>
              </div>
              <div className="company-benefit-one__content-text">
                <p>
                  Mai mult decât un furnizor, suntem partenerul dvs. în
                  optimizarea costurilor de transport și combustibil.
                </p>
              </div>
              <ul className="company-benefit-one__content-list">
                {companyBenefits.map((item) => (
                  <li key={item.title}>
                    <div className="shape1">
                      <img
                        src="/img/shape/company-benefit-v1-shape1.png"
                        alt=""
                      />
                    </div>
                    <div className="icon-box">
                      <span className={item.icon} />
                    </div>
                    <div className="content-box">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="company-benefit-one__form">
              <div className="title-box">
                <h2>Solicită o ofertă rapidă</h2>
              </div>
              <p style={{ marginBottom: 24, color: "rgba(255,255,255,0.85)" }}>
                Completează formularul de ofertă și vom reveni cu o propunere
                personalizată pentru firma ta de transport.
              </p>
              <div className="button-box">
                <Link className="thm-btn" href="/oferta">
                  <span className="txt">Formular ofertă</span>
                  <i className="icon-right-arrow" />
                </Link>
              </div>
              <div className="button-box" style={{ marginTop: 16 }}>
                <Link className="thm-btn" href="/contact">
                  <span className="txt">Contactează-ne</span>
                  <i className="icon-right-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
