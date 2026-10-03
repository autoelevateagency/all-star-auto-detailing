"use client";

import type { JSX } from "react";
import { MediaFill } from "@/components/MediaFill";
import { useLocale } from "@/context/LocaleContext";
import { MEDIA } from "@/data/media";

export const Hero = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2, line3] = dict.hero.lines;
  const eyebrowParts = dict.hero.eyebrow.split(" / ");

  return (
    <header className="hero grain" id="top">
      <MediaFill
        className="hero-media"
        type="video"
        src={MEDIA.hero.video}
        poster={MEDIA.hero.poster}
        priority
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="slash" aria-hidden="true" />

      <div className="in-c in">
        <div className="lbl r in" style={{ color: "var(--ti)" }}>
          {eyebrowParts.map((part, index) => (
            <span key={part}>
              {part}
              {index < eyebrowParts.length - 1 ? (
                <span style={{ margin: "0 10px" }}>/</span>
              ) : null}
            </span>
          ))}
        </div>
        <h1 className="disp">
          <span className="m in">
            <span>{line1}</span>
          </span>
          <span className="m in">
            <span>{line2}</span>
          </span>
          <span className="m in">
            <span>{line3}</span>
          </span>
        </h1>
        <p className="r in">{dict.hero.body}</p>
        <div className="row r in">
          <a className="btn" href="#contact">
            {dict.hero.primaryCta}
          </a>
          <a className="sec" href="#gallery">
            {dict.hero.secondaryCta}
          </a>
        </div>
      </div>
      <div className="dline" aria-hidden="true" />
      <div className="gn" aria-hidden="true" />
    </header>
  );
};
