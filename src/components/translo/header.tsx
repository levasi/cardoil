"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  languageLinks,
  mainNav,
  navLinks,
  siteConfig,
} from "@/lib/content";

export function TransloHeader() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollClassName, setScrollClassName] = useState("");
  const [despreOpen, setDespreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollClassName(window.scrollY > 100 ? "sticky-menu" : "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobile = () => {
    setMobileMenu(true);
    document.body.classList.add("disable-scroll");
  };

  const closeMobile = () => {
    setMobileMenu(false);
    document.body.classList.remove("disable-scroll");
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="main-header main-header-two">
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
        <div className="main-header-two__outer">
          <div className="logo-box-two">
            <Link href="/">
              <img src={siteConfig.logo} alt="Cardoil Avantaj" />
            </Link>
          </div>
          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={openMobile}>
              <i className="fas fa-bars" />
            </div>
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="main-header-two__inner">
                  <div className="main-header-two__top">
                    <div
                      className="main-header-two__top-pattern"
                      style={{
                        backgroundImage:
                          "url(/img/pattern/header-v2-pattern.png)",
                      }}
                    />
                    <div className="main-header-two__top-inner">
                      <div className="main-header-two__top-left">
                        <div className="header-contact-info">
                          <ul>
                            <li>
                              <div className="icon-box">
                                <span className="icon-pin" />
                              </div>
                              <p>{siteConfig.address}</p>
                            </li>
                            <li>
                              <div className="icon-box">
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
                      <div className="main-header-two__top-right">
                        <div className="inner">
                          <div className="btn-box">
                            <Link href="/oferta">
                              Solicită ofertă
                              <span className="icon-right-arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header-two__bottom">
                    <div className="main-header-two__bottom-left">
                      <div className="navbar-wrap main-menu">
                        <ul className="navigation">
                          {mainNav.map((item) =>
                            item.children ? (
                              <li
                                key={item.href}
                                className={`menu-item-has-children ${isActive(item.href) ? "active" : ""}`}
                              >
                                <Link href={item.href}>{item.label}</Link>
                                <ul className="sub-menu">
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

                    <div className="main-header-two__bottom-right">
                      {languageLinks.map((lang) => (
                        <a
                          key={lang.lang}
                          href={lang.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="main-header__language-switcher"
                          style={{ marginRight: 12 }}
                        >
                          <img
                            src={lang.flag}
                            alt={lang.lang}
                            width={18}
                            height={12}
                          />{" "}
                          {lang.lang}
                        </a>
                      ))}
                      <div className="contact-box">
                        <div className="icon-box">
                          <span className="icon-out-call" />
                        </div>
                        <div className="text">
                          <p>
                            <Link
                              href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                            >
                              {siteConfig.phoneDisplay} ({siteConfig.phone})
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
            <nav className="menu-box">
              <div
                className={`close-btn flex justify-end ${mobileMenu ? "rotate" : ""}`}
                onClick={closeMobile}
              >
                <i className="fas fa-times" />
              </div>
              <div className="menu-outer">
                <ul className="navigation">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={closeMobile}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="menu-item-has-children">
                    <Link href="/despre" onClick={() => setDespreOpen(!despreOpen)}>
                      Despre noi — mai mult
                    </Link>
                    <ul
                      className={`sub-menu ${despreOpen ? "sub-menu-visible" : "sub-menu-hidden"}`}
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
                      className="dropdown-btn"
                      onClick={() => setDespreOpen(!despreOpen)}
                    >
                      <span className="fas fa-angle-down" />
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
                </ul>
              </div>
            </nav>
            <div
              className="menu-backdrop"
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
