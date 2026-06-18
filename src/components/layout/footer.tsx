import Link from "next/link";
import { Fuel, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { fuelPartners, navLinks, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Fuel className="size-5" aria-hidden />
              </div>
              <div>
                <p className="font-bold">Cardoil Avantaj</p>
                <p className="text-xs text-white/60">{siteConfig.slogan}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Companie ce joacă un rol important în domeniul transporturilor din
              2010. Soluții integrate de logistică a alimentărilor prin prețuri
              preferențiale la carburant.
            </p>
          </div>

          <div>
            <h3 className="label-section mb-4 text-brand">Navigare</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-section mb-4 text-brand">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                  {siteConfig.phoneDisplay} ({siteConfig.phone})
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-brand" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label-section mb-4 text-brand">
              Furnizori parteneri
            </h3>
            <div className="flex flex-wrap gap-2">
              {fuelPartners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Cardoil Avantaj — Toate drepturile
            rezervate
          </p>
          <Link
            href="/contact"
            className="transition-colors hover:text-white/80"
          >
            Politica de confidențialitate
          </Link>
        </div>
      </div>
    </footer>
  );
}
