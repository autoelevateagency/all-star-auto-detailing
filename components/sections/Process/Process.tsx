"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Process = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2] = dict.process.lines;

  return (
    <section className="pr" id="process" aria-labelledby="process-title">
      <div className="lbl r" style={{ color: "var(--ti)" }}>
        {dict.process.eyebrow}
      </div>
      <h2 className="disp" id="process-title">
        <span className="m">
          <span>{line1}</span>
        </span>
        <span className="m">
          <span>{line2}</span>
        </span>
      </h2>
      <div className="steps">
        {dict.process.steps.map((step) => (
          <div key={step.number} className="st r">
            <b>{step.number}</b>
            <span>{step.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
