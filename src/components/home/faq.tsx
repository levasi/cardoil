"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, siteConfig } from "@/lib/content";
import { FallbackBackground } from "@/components/shared/fallback-background";

export function HomeFaq() {
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
        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2 xl:gap-6">
          <div>
            <div className="faq-one__faq">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Întrebări frecvente</h5>
                </div>
                <h2>Răspunsuri la întrebările dvs.</h2>
              </div>
              <Accordion defaultValue={["0"]} className="accordion-two">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={String(index)}
                    className="accordion-item"
                  >
                    <AccordionTrigger className="accordion-trigger items-center hover:no-underline focus-visible:ring-0">
                      <h2>
                        <span>{String(index + 1).padStart(2, "0")}.</span>{" "}
                        {item.question}
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content">
                      <span>Răspuns:</span>
                      <p>{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div>
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
