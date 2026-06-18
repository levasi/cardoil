import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeImages, homeWelcome, siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden text-white">
      <Image
        src={homeImages.hero}
        alt="Carduri combustibil Cardoil Avantaj"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="hero-grid absolute inset-0 opacity-20" />

      <div className="container-page relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          <p className="label-section text-white/80">
            Bine ai venit la Cardoil Avantaj
          </p>
          <h1 className="heading-page mt-4">
            Brokerul tău de transport și combustibil
          </h1>
          <p className="mt-4 text-lg font-semibold text-brand-accent">
            {siteConfig.slogan}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {homeWelcome.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/oferta"
              className={cn(buttonVariants({ variant: "brand", size: "lg" }))}
            >
              Solicită ofertă
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/servicii"
              className={cn(
                buttonVariants({ variant: "brandOutline", size: "lg" }),
                "border-white/30 bg-white/10 backdrop-blur-sm"
              )}
            >
              Descoperă serviciile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
