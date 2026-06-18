import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeImages } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CofacePartnership() {
  return (
    <section className="section max-w-4xl text-center">
        <div className="relative mx-auto aspect-coface max-w-2xl overflow-hidden rounded-xl">
          <Image
            src={homeImages.coface}
            alt="Parteneriat Coface Cardoil"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-contain"
          />
        </div>

        <h2 className="heading-section mt-10 text-2xl sm:text-3xl">
          Parteneriat de succes pentru clienții noștri
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ia-ți Certificatul Coface și beneficiază de economii substanțiale prin
          reduceri la carburant de la Cardoil Avantaj!
        </p>
        <Link
          href="/oferta"
          className={cn(buttonVariants({ variant: "brand", size: "lg" }), "mt-8")}
        >
          Vezi detalii
          <ArrowRight className="size-4" />
        </Link>
    </section>
  );
}
