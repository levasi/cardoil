"use client";

import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import { faqItems, siteConfig } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";

export function TransloFaq() {
  return (
    <section className="faq-one faq-one--two padding">
      <div className="big-title">
        <h2>faq</h2>
      </div>
      <FallbackBackground
        className="faq-one__bg"
        src="/img/resource/faq-v2-bg.jpg"
        fallbackKey="faqBg"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="faq-one__faq">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Întrebări frecvente</h5>
                </div>
                <h2>Răspunsuri la întrebările dvs.</h2>
              </div>
              <Accordion defaultActiveKey="0" className="accordion-two">
                {faqItems.map((item, index) => (
                  <Accordion.Item eventKey={String(index)} key={item.question}>
                    <Accordion.Header>
                      <h2>
                        <span>{String(index + 1).padStart(2, "0")}.</span>{" "}
                        {item.question}
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <span>Răspuns:</span>
                      <p>{item.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="faq-one__contact-info">
              <div className="title-box">
                <p>Hai să vorbim</p>
                <h3>Ai nevoie de ajutor? Consultanță gratuită</h3>
              </div>
              <div className="faq-one__contact-info-number">
                <div className="icon">
                  <span className="icon-call" />
                </div>
                <div className="text">
                  <p>Întrebări?</p>
                  <h3>
                    <Link href={`tel:${siteConfig.phone.replace(/\./g, "")}`}>
                      {siteConfig.phoneDisplay} ({siteConfig.phone})
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="btn-box">
                <Link className="thm-btn" href="/contact">
                  <span className="txt">Contact</span>
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
