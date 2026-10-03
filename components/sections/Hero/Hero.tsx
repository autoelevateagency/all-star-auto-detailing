"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Hero = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2, line3] = dict.hero.lines;
  const eyebrowParts = dict.hero.eyebrow.split(" / ");

  return (
    <header className="hero grain" id="top">
      <div className="car" aria-hidden="true" />
      <div className="slash" aria-hidden="true" />
      <svg
        className="car-body"
        viewBox="0 0 1100 300"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bl" x1="0" x2="1">
            <stop offset="0" stopColor="#0b0c0d" />
            <stop offset=".45" stopColor="#d9d6cf" stopOpacity=".9" />
            <stop offset="1" stopColor="#0b0c0d" />
          </linearGradient>
          <linearGradient id="bf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a2d2f" />
            <stop offset="1" stopColor="#070808" />
          </linearGradient>
        </defs>
        <path
          d="M20 230 C60 150 230 120 380 100 C470 40 640 30 760 70 C880 110 1020 140 1085 215 L1085 240 L20 240Z"
          fill="url(#bf)"
        />
        <path
          d="M60 170 C240 120 520 90 1040 190"
          stroke="url(#bl)"
          strokeWidth="2"
        />
        <path
          d="M380 100 C500 70 680 62 760 70"
          stroke="url(#bl)"
          strokeWidth="1.5"
          opacity=".7"
        />
        <circle cx="260" cy="236" r="52" fill="#050505" stroke="#3a3c3e" />
        <circle cx="860" cy="236" r="52" fill="#050505" stroke="#3a3c3e" />
      </svg>

      <div className="in-c in">
        <div className="lbl r" style={{ color: "var(--ti)" }}>
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
          <span className="m">
            <span>{line1}</span>
          </span>
          <span className="m">
            <span>{line2}</span>
          </span>
          <span className="m">
            <span>{line3}</span>
          </span>
        </h1>
        <p className="r">{dict.hero.body}</p>
        <div className="row r">
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
