"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aboutAccordion } from "@/lib/content";

export function AboutAccordion() {
  return (
    <Accordion defaultValue={["management"]} className="w-full">
      {aboutAccordion.map((section) => (
        <AccordionItem key={section.id} value={section.id}>
          <AccordionTrigger className="py-4 text-base font-semibold text-navy hover:no-underline">
            {section.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className={
                  paragraph === paragraph.toUpperCase() && paragraph.length > 20
                    ? "mb-3 font-semibold text-navy"
                    : "mb-3 leading-relaxed"
                }
              >
                {paragraph}
              </p>
            ))}
            {"list" in section && section.list && (
              <ul className="ml-4 list-disc space-y-2 leading-relaxed">
                {section.list.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
