"use client";

import { useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Testimonials = (): JSX.Element => {
  const { dict } = useLocale();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const total = dict.testimonials.items.length;
  const item = dict.testimonials.items[index];

  const show = (direction: number): void => {
    setLeaving(true);
    window.setTimeout(() => {
      setIndex((current) => (current + direction + total) % total);
      setLeaving(false);
    }, 450);
  };

  return (
    <section className="tes" id="clients" aria-labelledby="clients-title">
      <div>
        <div className="lbl r">{dict.testimonials.eyebrow}</div>
        <h2 className={`disp q${leaving ? " out" : ""}`} id="clients-title">
          “{item.quote}”
        </h2>
      </div>

      <div className="who">
        <div>
          <b>— {item.name}</b>
          <span>{item.vehicle}</span>
        </div>
        <div className="cnt">
          <button
            type="button"
            aria-label={dict.testimonials.prev}
            onClick={() => show(-1)}
          >
            ←
          </button>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label={dict.testimonials.next}
            onClick={() => show(1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};
