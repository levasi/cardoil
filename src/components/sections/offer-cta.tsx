import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function OfferCta() {
  return (
    <section className="section bg-navy text-white" id="oferta">
      <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="label-section text-brand">Solicită ofertă</p>
            <h2 className="heading-section text-white">
              Ești interesat de carduri de combustibil?
            </h2>
            <p className="leading-relaxed text-white/70">
              Completează formularul și vom reveni în cel mai scurt timp cu o
              ofertă personalizată pentru firma ta de transport.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "brandOutline", size: "lg" }))}
            >
              Contact direct
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <Card className="border-white/10 bg-white/5 text-white ring-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <ContactForm variant="dark" />
            </CardContent>
          </Card>
      </div>
    </section>
  );
}
