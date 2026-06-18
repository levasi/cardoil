import Link from "next/link";
import { fuelPartners, navLinks, services, siteConfig } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";

export function TransloFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-one footer-one--two">
      <FallbackBackground
        className="footer-one__bg"
        src="/img/footer/footer-v2-bg.jpg"
        fallbackKey="footerBg"
      />
      <div className="shape1 float-bob-y">
        <img src="/img/shape/footer-v2-shape1.png" alt="" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/footer-v2-shape2.png" alt="" />
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-main__bottom">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-footer-widget footer-widget__about">
                  <div className="logo-box">
                    <Link href="/">
                      <img src={siteConfig.logo} alt="Cardoil Avantaj" />
                    </Link>
                  </div>
                  <div className="footer-widget__about-inner">
                    <p className="text1">{siteConfig.tagline}</p>
                    <p className="text2">Suntem disponibili</p>
                    <p className="text3">Luni – Vineri: 09:00 – 18:00</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Navigare</h2>
                  </div>
                  <div className="footer-widget__links-box">
                    <ul>
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>Servicii</h2>
                  </div>
                  <div className="footer-widget__links-box">
                    <ul>
                      {services.slice(0, 6).map((service) => (
                        <li key={service.title}>
                          <Link href="/servicii">{service.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Contact</h2>
                  </div>
                  <div className="footer-widget__links-box">
                    <ul>
                      <li>{siteConfig.address}</li>
                      <li>
                        <Link href={`tel:${siteConfig.phone.replace(/\./g, "")}`}>
                          {siteConfig.phoneDisplay}
                        </Link>
                      </li>
                      <li>
                        <Link href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </Link>
                      </li>
                    </ul>
                    <p style={{ marginTop: 16, fontSize: 14 }}>
                      Furnizori: {fuelPartners.slice(0, 4).join(", ")}…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear}{" "}
                <Link href="/">Cardoil Avantaj</Link>, Toate drepturile
                rezervate.
              </p>
            </div>
            <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="/contact">Politica de confidențialitate</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
