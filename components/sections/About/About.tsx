"use client";

import type { JSX } from "react";
import { MediaFill } from "@/components/MediaFill";
import { useLocale } from "@/context/LocaleContext";
import { MEDIA } from "@/data/media";

export const About = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2] = dict.about.lines;

  return (
    <section className="ab" id="about" aria-labelledby="about-title">
      <div className="p has-media r">
        <MediaFill
          type="image"
          src={MEDIA.about}
          alt={dict.brand.name}
        />
      </div>
      <div>
        <div className="lbl r">{dict.about.eyebrow}</div>
        <h2 className="disp" id="about-title">
          <span className="m">
            <span>{line1}</span>
          </span>
          <span className="m">
            <span>{line2}</span>
          </span>
        </h2>
        <p className="r">{dict.about.body}</p>
      </div>
    </section>
  );
};
