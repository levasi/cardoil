import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  text: string;
  href: string;
  linkLabel: string;
  className?: string;
}

export function CtaBanner({ text, href, linkLabel, className }: CtaBannerProps) {
  return (
    <section className={cn("bg-navy py-8 text-white", className)}>
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="max-w-2xl text-center text-sm leading-relaxed text-white/85 sm:text-left sm:text-base">
          {text}
        </p>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "brand", size: "lg" }),
            "shrink-0"
          )}
        >
          {linkLabel}
        </Link>
      </div>
    </section>
  );
}
