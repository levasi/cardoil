import Link from "next/link";

export function TransloCta() {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="cta-two__inner">
          <div className="shape1">
            <img src="/img/shape/cta-v2-shape1.png" alt="" />
          </div>
          <div className="shape2">
            <img src="/img/shape/cta-v2-shape2.png" alt="" />
          </div>
          <div className="shape3 float-bob-x">
            <img src="/img/shape/cta-v2-shape3.png" alt="" />
          </div>
          <div className="cta-two__inner-box">
            <div className="title-box">
              <p>Contactează-ne</p>
              <h2>
                Cauți cele mai bune soluții <br />
                de combustibil și transport?
              </h2>
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
    </section>
  );
}
