"use client";

import { useEffect, useRef, type RefObject } from "react";

export const useReveal = <T extends HTMLElement>(): RefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }

    const targets = root.querySelectorAll<HTMLElement>(".r, .m");
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

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
};
