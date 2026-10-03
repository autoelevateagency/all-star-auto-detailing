"use client";

import { useEffect } from "react";

export const useParallax = (): void => {
  useEffect(() => {
    const panels = document.querySelectorAll<HTMLElement>("[data-s]");
    if (!panels.length) {
      return;
    }

    let ticking = false;

    const onScroll = (): void => {
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

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};
