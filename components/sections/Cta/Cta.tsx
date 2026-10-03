"use client";

import type { JSX } from "react";
import { MediaFill } from "@/components/MediaFill";
import { useLocale } from "@/context/LocaleContext";
import { MEDIA } from "@/data/media";

export const Cta = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2, line3] = dict.cta.lines;

  return (
    <section className="cta has-photo" aria-labelledby="cta-title">
      <MediaFill
        className="cta-media"
        type="image"
        src={MEDIA.cta}
        alt=""
      />
      <div className="cta-scrim" aria-hidden="true" />
      <h2 className="disp" id="cta-title">
        <span className="m">
          <span>{line1}</span>
        </span>
        <span className="m">
          <span>{line2}</span>
        </span>
        <span className="m">
          <span>{line3}</span>
        </span>
      </h2>
      <p className="r">{dict.cta.body}</p>
      <a className="btn r" href="#contact">
        {dict.cta.button}
      </a>
    </section>
  );
};
