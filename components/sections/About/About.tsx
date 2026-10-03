"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const About = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2] = dict.about.lines;

  return (
    <section className="ab" id="about" aria-labelledby="about-title">
      <div className="p p8 r">
        <i aria-hidden="true" />
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
