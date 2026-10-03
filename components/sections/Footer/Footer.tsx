"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/data/site";
import { NAV_LINKS } from "@/lib/constants";

export const Footer = (): JSX.Element => {
  const { dict } = useLocale();

  return (
    <footer className="site-footer grain">
      <div className="big disp">
        {dict.footer.line1}
        <br />
        <em>{dict.footer.line2}</em>
      </div>
      <div className="fr">
        <span className="lbl" style={{ color: "var(--ti)" }}>
          {dict.footer.location}
        </span>
        <div className="fl">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.key}>
              {dict.nav[link.key]}
            </a>
          ))}
          <a
            href={SITE.instagramUrl || "#"}
            target={SITE.instagramUrl ? "_blank" : undefined}
            rel={SITE.instagramUrl ? "noopener noreferrer" : undefined}
          >
            {dict.footer.instagram}
          </a>
        </div>
        <a href="#contact">{dict.footer.cta}</a>
      </div>
    </footer>
  );
};
