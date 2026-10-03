"use client";

import { useEffect } from "react";

export const useReveal = (): void => {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".r, .m");
    if (!nodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);
};
