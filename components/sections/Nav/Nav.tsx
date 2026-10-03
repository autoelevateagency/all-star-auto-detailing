"use client";

import { useEffect, useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { NAV_LINKS } from "@/lib/constants";

export const Nav = (): JSX.Element => {
  const { dict } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (): void => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <a href="#top" className="logo" aria-label={dict.nav.ariaLogo}>
          <svg viewBox="0 0 30 24" aria-hidden="true">
            <path
              d="M8 24 L22 0 H30 L16 24Z M0 24 L4 17 H11 L7 24Z"
              fill="currentColor"
            />
          </svg>
          {dict.brand.shortName}
        </a>
        <div className="links">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.key}>
              {dict.nav[link.key]}
            </a>
          ))}
        </div>
        <a className="ncta" href="#contact">
          {dict.nav.cta}
        </a>
        <button
          className="burger"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? dict.nav.close : dict.nav.menu}
        </button>
      </nav>

      <div
        className={`menu${isOpen ? " open" : ""}`}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        {NAV_LINKS.map((link) => (
          <a href={link.href} key={link.key} onClick={closeMenu}>
            {dict.nav[link.key]}
          </a>
        ))}
        <a href="#contact" className="lbl menu-cta" onClick={closeMenu}>
          {dict.nav.cta}
        </a>
      </div>
    </>
  );
};
