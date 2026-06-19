"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  languageLinks,
  mainNav,
  navLinks,
  siteConfig,
} from "@/lib/content";
import { getLenis, onLenisScroll } from "@/lib/lenis";

function SiteHeaderMainEnd() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const phoneHref = `tel:${siteConfig.phone.replace(/\./g, "")}`;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="site-header__call">
        <div className="site-header__icon">
          <span className="icon-out-call" aria-hidden="true" />
        </div>
        <Link href={phoneHref} className="ml-2 text-md">
          {siteConfig.phoneDisplay} ({siteConfig.phone})
        </Link>
      </div>

      <div
        ref={menuRef}
        className={`site-header__actions ${open ? "site-header__actions--open" : ""}`}
      >
        <button
          type="button"
          className="site-header__actions-trigger"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-controls="site-header-lang-menu"
          aria-label="Selectează limba"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="site-header__actions-label">RO</span>
          <ChevronDown className="site-header__actions-chevron" aria-hidden="true" />
        </button>
        <ul
          id="site-header-lang-menu"
          className="site-header__actions-menu"
          role="menu"
        >
          {languageLinks.map((lang) => (
            <li key={lang.lang} role="none">
              <a
                href={lang.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <img src={lang.flag} alt="" width={18} height={12} />
                <span>{lang.lang}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [despreOpen, setDespreOpen] = useState(false);

  useEffect(() => {
    const threshold = 100;

    const updateSticky = (scroll: number) => {
      setIsScrolled((prev) => {
        const next = scroll > threshold;
        return prev === next ? prev : next;
      });
    };

    const detachLenis = onLenisScroll(updateSticky);

    if (!getLenis()) {
      const handleScroll = () => updateSticky(window.scrollY);
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        detachLenis();
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return detachLenis;
  }, []);

  const openMobile = () => {
    setMobileMenu(true);
    document.body.classList.add("disable-scroll");
    getLenis()?.stop();
  };

  const closeMobile = () => {
    setMobileMenu(false);
    document.body.classList.remove("disable-scroll");
    getLenis()?.start();
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div
        id="sticky-header"
      >
        <div className="site-header__shell bg-white">
          <div className="site-header__logo">
            <Link href="/">
              <img src={siteConfig.logo} alt="Cardoil Avantaj" />
            </Link>
          </div>
          <div className="site-header__toolbar">
            <div className="site-header__menu-btn" onClick={openMobile}>
              <Menu className="size-7" aria-hidden="true" />
            </div>
            <div className="site-header__nav-wrap">
              <nav className="site-header__nav">
                <div className="site-header__frame">
                  <div className="site-header__top">
                    <div
                      className="site-header__top-bg"
                      style={{
                        backgroundImage:
                          "url(/img/pattern/header-v2-pattern.png)",
                      }}
                    />
                    <div className="site-header__top-inner">
                      <div className="site-header__top-start">
                        <div className="site-header__contact">
                          <ul>
                            <li>
                              <div className="site-header__icon">
                                <span className="icon-pin" />
                              </div>
                              <p>{siteConfig.address}</p>
                            </li>
                            <li>
                              <div className="site-header__icon">
                                <span className="icon-paper-plane" />
                              </div>
                              <p>
                                <Link href={`mailto:${siteConfig.email}`}>
                                  {siteConfig.email}
                                </Link>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="site-header__top-end">
                        <div className="site-header__top-actions">
                          <div className="site-header__offer">
                            <Link href="/oferta">
                              Solicită ofertă
                              <span className="icon-right-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="site-header__main">
                    <div className="site-header__main-start">
                      <div className="site-header__menu">
                        <ul className="site-header__list">
                          {mainNav.map((item) =>
                            item.children ? (
                              <li
                                key={item.href}
                                className={`has-children ${isActive(item.href) ? "active" : ""}`}
                              >
                                <Link href={item.href}>{item.label}</Link>
                                <ul className="site-header__dropdown">
                                  {item.children.map((child) => (
                                    <li key={child.href}>
                                      <a
                                        href={child.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {child.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ) : (
                              <li
                                key={item.href}
                                className={isActive(item.href) ? "active" : ""}
                              >
                                {item.external ? (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {item.label}
                                  </a>
                                ) : (
                                  <Link href={item.href}>{item.label}</Link>
                                )}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="site-header__main-end">
                      <SiteHeaderMainEnd />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div
            className={`site-header__drawer ${mobileMenu ? "site-header__drawer--open" : ""}`}
          >
            <nav className="site-header__drawer-inner">
              <div
                className={`site-header__close flex justify-end ${mobileMenu ? "site-header__close--active" : ""}`}
                onClick={closeMobile}
              >
                <X className="size-6" aria-hidden="true" />
              </div>
              <div className="site-header__drawer-links">
                <ul className="site-header__list">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={closeMobile}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="has-children">
                    <Link href="/despre" onClick={() => setDespreOpen(!despreOpen)}>
                      Despre noi — mai mult
                    </Link>
                    <ul
                      className={`site-header__dropdown ${despreOpen ? "site-header__dropdown--open" : "site-header__dropdown--closed"}`}
                    >
                      {mainNav
                        .find((n) => n.href === "/despre")
                        ?.children?.map((child) => (
                          <li key={child.href}>
                            <a href={child.href} target="_blank" rel="noopener noreferrer">
                              {child.label}
                            </a>
                          </li>
                        ))}
                    </ul>
                    <div
                      className="site-header__expand"
                      onClick={() => setDespreOpen(!despreOpen)}
                    >
                      <ChevronDown className="size-4" aria-hidden="true" />
                    </div>
                  </li>
                  <li>
                    <a
                      href={siteConfig.clientPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contul meu
                    </a>
                  </li>
                  <li className="site-header__drawer-divider" role="separator" />
                  <li>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                      onClick={closeMobile}
                    >
                      {siteConfig.phoneDisplay} ({siteConfig.phone})
                    </a>
                  </li>
                  {languageLinks.map((lang) => (
                    <li key={lang.lang}>
                      <a
                        href={lang.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobile}
                      >
                        <img
                          src={lang.flag}
                          alt=""
                          width={18}
                          height={12}
                          className="mr-2 inline-block"
                        />
                        {lang.lang}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div
              className="site-header__backdrop"
              onClick={closeMobile}
              onKeyDown={closeMobile}
              role="button"
              tabIndex={0}
              aria-label="Închide meniul"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
