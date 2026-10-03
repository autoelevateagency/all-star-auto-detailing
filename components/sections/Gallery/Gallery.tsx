"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Gallery = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2] = dict.gallery.lines;

  return (
    <section className="gal" id="gallery" aria-labelledby="gallery-title">
      <div className="lbl r">{dict.gallery.eyebrow}</div>
      <h2 className="disp" id="gallery-title">
        <span className="m">
          <span>{line1}</span>
        </span>
        <span className="m">
          <span>{line2}</span>
        </span>
      </h2>

      <div className="g">
        {dict.gallery.items.map((item) => (
          <div
            key={item.id}
            className={`p ${item.paint} ${item.grid}`}
            data-s={item.shift}
          >
            <i aria-hidden="true" />
            <span className="meta">{item.meta}</span>
          </div>
        ))}
      </div>

      <div className="gnote">{dict.gallery.note}</div>
    </section>
  );
};
