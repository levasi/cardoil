import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  CreditCard,
  FileText,
  Fuel,
  Monitor,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import { homeImages, services } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

const iconMap = {
  truck: Truck,
  "credit-card": CreditCard,
  fuel: Fuel,
  monitor: Monitor,
  bell: Bell,
  "file-text": FileText,
};

export function ServicesBanner() {
  return (
    <section className="relative flex min-h-72 items-center justify-center overflow-hidden sm:min-h-80">
      <Image
        src={homeImages.servicesBanner}
        alt="Avantaje transportatori Cardoil Avantaj"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/60" />
      <h2 className="heading-section relative z-10 px-4 text-center text-white">
        Serviciile noastre
      </h2>
    </section>
  );
}

export function Services() {
  return (
    <section className="section bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="items-center">Serviciile noastre</SectionLabel>
          <h2 className="heading-section mt-5">
            Soluții moderne de alimentare — reduceri la carburant
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/servicii"
                  className="mt-4 inline-flex text-sm font-medium text-brand hover:underline"
                >
                  Vezi detalii
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/servicii"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Toate serviciile
            <ArrowUpRight className="size-4" />
          </Link>
      </div>
    </section>
  );
}
