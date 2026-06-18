import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="section bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="items-center">
            Părerea clienților noștri
          </SectionLabel>
          <h2 className="heading-section mt-5">Testimoniale</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} size="sm" className="flex flex-col">
              <CardContent className="flex flex-1 flex-col pt-6">
                <Quote className="size-8 text-brand/40" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="flex-col items-start border-t bg-transparent">
                <cite className="font-semibold text-navy not-italic">
                  {testimonial.author}
                </cite>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
}
