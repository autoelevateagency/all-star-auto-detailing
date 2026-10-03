"use client";

import {
  useEffect,
  useRef,
  useState,
  type JSX,
} from "react";
import { MediaFill } from "@/components/MediaFill";
import { useLocale } from "@/context/LocaleContext";
import { MEDIA } from "@/data/media";

const MOBILE_MAX = 640;

export const Gallery = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2] = dict.gallery.lines;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const total = MEDIA.gallery.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const onScroll = (): void => {
      if (window.innerWidth > MOBILE_MAX) {
        return;
      }

      const slides = [...track.querySelectorAll<HTMLElement>(".g-slide")];
      if (!slides.length) {
        return;
      }

      const center = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let nearestDist = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(slideCenter - center);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = index;
        }
      });

      setActive(nearest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const progress = ((active + 1) / total) * 100;
  const counter = `${String(active + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

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

      <div className="g g-desktop">
        {MEDIA.gallery.map((item) => (
          <div
            key={item.id}
            className={`p has-media ${item.grid}`}
            data-s={item.shift}
          >
            <MediaFill
              src={item.src}
              type={item.type}
              poster={item.poster}
              alt={dict.gallery.meta[item.metaKey]}
            />
            <span className="meta">{dict.gallery.meta[item.metaKey]}</span>
          </div>
        ))}
      </div>

      <div
        className="g-slider"
        aria-roledescription="carousel"
        aria-label={dict.gallery.eyebrow}
      >
        <div className="g-track" ref={trackRef}>
          {MEDIA.gallery.map((item, index) => (
            <article
              key={item.id}
              className={`g-slide p has-media${index === active ? " is-active" : ""}`}
              aria-label={`${index + 1} of ${total}`}
            >
              <MediaFill
                src={item.src}
                type={item.type}
                poster={item.poster}
                alt={dict.gallery.meta[item.metaKey]}
              />
              <div className="g-slide-copy">
                <span className="g-slide-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="meta">{dict.gallery.meta[item.metaKey]}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="g-slider-ui">
          <div className="g-slider-meta">
            <span className="lbl">{dict.gallery.swipe}</span>
            <span className="g-counter">{counter}</span>
          </div>
          <div className="g-progress" aria-hidden="true">
            <i style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="gnote">{dict.gallery.note}</div>
    </section>
  );
};
