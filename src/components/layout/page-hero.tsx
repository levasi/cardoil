import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/section-label";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
}

export function PageHero({
  label,
  title,
  description,
  centered = false,
  breadcrumb,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("bg-navy py-20 text-white lg:py-24", className)}>
      <div
        className={cn(
          "container-page",
          centered && "text-center"
        )}
      >
        <SectionLabel light className={centered ? "justify-center" : undefined}>
          {label}
        </SectionLabel>
        <h1 className={cn("heading-page mt-4", centered && "mx-auto max-w-4xl")}>
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg leading-relaxed text-white/70",
              centered && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            className="mt-6 text-sm text-white/50"
            aria-label="Breadcrumb"
          >
            <ol
              className={cn(
                "flex flex-wrap items-center gap-2",
                centered && "justify-center"
              )}
            >
              {breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden>/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
