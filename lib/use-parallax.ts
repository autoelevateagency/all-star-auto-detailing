"use client";

import { useEffect } from "react";

const DESKTOP_MIN = 641;

export const useParallax = (): void => {
  useEffect(() => {
    const panels = document.querySelectorAll<HTMLElement>("[data-s]");
    if (!panels.length) {
      return;
    }

    let ticking = false;

    const reset = (): void => {
      panels.forEach((panel) => {
        const child = panel.firstElementChild as HTMLElement | null;
        if (child) {
          child.style.translate = "0 0";
        }
      });
    };

    const onScroll = (): void => {
      if (window.innerWidth < DESKTOP_MIN) {
        reset();
        return;
      }
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        panels.forEach((panel) => {
          const speed = Number(panel.dataset.s ?? 0);
          const rect = panel.getBoundingClientRect();
          const offset =
            (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * -1;
          const child = panel.firstElementChild as HTMLElement | null;
          if (child) {
            child.style.translate = `0 ${offset}px`;
          }
        });
        ticking = false;
      });
    };

    const onResize = (): void => {
      if (window.innerWidth < DESKTOP_MIN) {
        reset();
      } else {
        onScroll();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
};
