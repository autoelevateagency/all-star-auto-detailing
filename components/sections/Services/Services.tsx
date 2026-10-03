"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Services = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2] = dict.services.lines;
  const peekRef = useRef<HTMLDivElement>(null);
  const [activeVisual, setActiveVisual] = useState<string | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const peek = peekRef.current;
    if (!peek) return;

    let frame = 0;

    const onMove = (event: MouseEvent): void => {
      target.current = { x: event.clientX + 50, y: event.clientY - 150 };
    };

    const loop = (): void => {
      current.current.x += (target.current.x - current.current.x) * 0.09;
      current.current.y += (target.current.y - current.current.y) * 0.09;
      peek.style.left = `${current.current.x}px`;
      peek.style.top = `${current.current.y}px`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="svc" id="services" aria-labelledby="services-title">
      <div className="lbl r">{dict.services.eyebrow}</div>
      <h2 className="disp" id="services-title">
        <span className="m">
          <span>{line1}</span>
        </span>
        <span className="m">
          <span>{line2}</span>
        </span>
      </h2>

      <div>
        {dict.services.items.map((item) => (
          <div
            key={item.id}
            className="s r"
            onMouseEnter={() => setActiveVisual(item.visual)}
            onMouseLeave={() => setActiveVisual(null)}
          >
            <b>{item.number}</b>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div
        ref={peekRef}
        className={`peek${activeVisual ? ` on ${activeVisual}` : ""}`}
        aria-hidden="true"
      />
    </section>
  );
};
