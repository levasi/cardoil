"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group shrink-0">
          <Image
            src={siteConfig.logo}
            alt="Cardoil Avantaj"
            width={180}
            height={48}
            priority
            className="h-9 w-auto transition-transform group-hover:scale-[1.02] sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-accent"
          >
            <Phone className="size-4 text-brand-accent" />
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/oferta"
            className={cn(buttonVariants({ variant: "brand" }))}
          >
            Solicită ofertă
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Meniu</span>
              </Button>
            }
          />
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <Image
                  src={siteConfig.logo}
                  alt="Cardoil Avantaj"
                  width={160}
                  height={42}
                  className="h-8 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    "hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 space-y-4 border-t pt-6">
              <a
                href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                className="flex items-center gap-2 font-semibold text-navy"
              >
                <Phone className="size-4 text-brand" />
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/oferta"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "brand" }),
                  "w-full justify-center"
                )}
              >
                Solicită ofertă
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
