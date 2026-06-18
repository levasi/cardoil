"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  variant?: "default" | "dark";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const isDark = variant === "dark";

  const fieldClass = cn(
    "rounded-xl transition-colors",
    isDark
      ? "border-white/15 bg-white/10 text-white placeholder:text-white/35 focus-visible:border-brand/40"
      : "border-border bg-background focus-visible:border-brand/40"
  );

  const labelClass = cn(
    "label-section text-[11px]",
    isDark ? "text-white/55" : "text-muted-foreground"
  );

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="company" className={labelClass}>
            Firma de transport
          </label>
          <Input
            id="company"
            placeholder="Denumire firmă"
            required
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="name" className={labelClass}>
            Nume contact
          </label>
          <Input
            id="name"
            placeholder="Numele dvs."
            required
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="email@firma.ro"
            required
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClass}>
            Telefon
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="07xx xxx xxx"
            required
            className={fieldClass}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Mesaj
        </label>
        <Textarea
          id="message"
          placeholder="Detalii despre flota și consumul estimat..."
          rows={5}
          className={cn(fieldClass, "min-h-32 resize-none")}
        />
      </div>
      <Button
        type="submit"
        variant={isDark ? "brand" : "default"}
        className={cn(
          "h-11 w-full",
          !isDark && "bg-navy text-white hover:bg-navy-light"
        )}
      >
        Trimite solicitarea
      </Button>
    </form>
  );
}
