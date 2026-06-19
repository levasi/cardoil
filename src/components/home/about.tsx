import Link from "next/link";
import { aboutImages, aboutIntro, siteConfig } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";
import { FallbackImage } from "@/components/shared/fallback-image";

export function HomeAbout() {
  return (
    <section className="about-two padding" id="about-two">
      <div className="shape1 float-bob-x">
        <img src="/img/shape/about-v2-shape1.png" alt="" />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-6">
          <div>
            <div className="about-two__img">
              <div className="about-two__experience-box text-center">
                <FallbackBackground
                  className="about-two__experience-box-bg"
                  src="/img/about/about-v2-img2-.jpg"
                  fallbackKey="team"
                />
                <div className="inner">
                  <h2 className="count flex text-center">
                    <span className="odometer" style={{ marginLeft: "15px" }}>
                      {new Date().getFullYear() - siteConfig.founded}
                    </span>
                    <span className="plus">+</span>
                  </h2>
                  <div className="text">
                    <p>
                      Ani de <br />
                      experiență
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-two__img1">
                <FallbackImage
                  src={aboutImages.team}
                  alt="Echipa Cardoil Avantaj"
                  fallbackKey="team"
                />
              </div>
              <div className="about-two__video">
                <FallbackBackground
                  className="about-two__video-bg"
                  src={aboutImages.partnership}
                  fallbackKey="partnership"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="about-two__content">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Despre companie</h5>
                </div>
                <h2>
                  Brokerul tău de transport <br />și combustibil
                </h2>
              </div>
              <div className="about-two__content-text">
                <p>{aboutIntro.paragraphs[0]}</p>
              </div>
              <div className="about-two__content-list">
                <ul>
                  <li>
                    <div className="icon-box">
                      <span className="icon-check-marked-1" />
                    </div>
                    <p>Reduceri la carburant la principalii furnizori</p>
                  </li>
                  <li>
                    <div className="icon-box">
                      <span className="icon-check-marked-1" />
                    </div>
                    <p>Transport marfă prin Cardoil Expedition</p>
                  </li>
                </ul>
              </div>
              <div className="about-two__content-bottom">
                <div className="btn-box">
                  <Link className="thm-btn" href="/despre">
                    <span className="txt">Află mai mult</span>
                    <i className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
