import Image from "next/image";
import { partnershipQuote, homeImages } from "@/lib/content";

export function PartnershipBanner() {
  return (
    <section className="relative flex min-h-80 items-center overflow-hidden sm:min-h-96">
      <Image
        src={homeImages.partnershipBanner}
        alt="Parteneriat Cardoil Avantaj"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="container-page relative z-10 py-16">
        <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-white/90 sm:text-xl">
          {partnershipQuote}
        </p>
      </div>
    </section>
  );
}
