import { CheckCircle2 } from "lucide-react";
import { SiteImage } from "@/components/shared/site-image";
import { SectionLabel } from "@/components/ui/section-label";
import { divisions } from "@/lib/content";

export function Divisions() {
  return (
    <section className="section space-y-20">
        {divisions.map((division) => (
          <div
            key={division.id}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              !division.imageFirst ? "lg:[direction:rtl]" : ""
            }`}
          >
            <div className={!division.imageFirst ? "lg:[direction:ltr]" : ""}>
              <SiteImage
                src={division.image}
                alt={division.imageAlt}
                aspect="wide"
              />
            </div>

            <div
              className={`space-y-5 ${!division.imageFirst ? "lg:[direction:ltr]" : ""}`}
            >
              <SectionLabel>{division.subtitle}</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {division.title}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {division.description}
              </p>
              <ul className="space-y-2.5">
                {division.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </section>
  );
}
