import Image from "next/image";
import { clientLogoImages, fuelPartnerLogos } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";

export function Partners() {
  return (
    <section className="section bg-muted/20">
      <div className="text-center">
          <SectionLabel className="items-center" withLine>
            Furnizori Cardoil Avantaj
          </SectionLabel>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {fuelPartnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="relative flex aspect-logo items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-3"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="150px"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <SectionLabel className="items-center" withLine>
            Clienții noștri
          </SectionLabel>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {clientLogoImages.map((client) => (
            <div
              key={client.name}
              className="relative flex aspect-logo items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-2"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                sizes="120px"
                className="object-contain p-1.5"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
