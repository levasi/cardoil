import Link from "next/link";
import { Pencil } from "lucide-react";
import { CtaBanner } from "@/components/layout/cta-banner";
import { homeWelcome } from "@/lib/content";

export function Welcome() {
  return (
    <section className="section bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="heading-section">
          {homeWelcome.title}
          <br />
          <span className="text-brand-accent">{homeWelcome.subtitle}</span>
        </h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-brand to-brand-accent" />
        <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {homeWelcome.description}
        </p>
        <p className="mt-4 text-xl font-bold text-navy sm:text-2xl">
          {homeWelcome.highlight}
        </p>
      </div>
    </section>
  );
}

export function OfferBanner() {
  return (
    <CtaBanner
      text="Ești interesat de o ofertă pentru carduri de combustibil? Completează formularul și vom reveni în cel mai scurt timp."
      href="/oferta"
      linkLabel="Formular"
    />
  );
}
