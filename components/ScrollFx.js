"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal: any element with [data-reveal] fades/slides in
 * when it enters the viewport. Stagger children with data-reveal-delay.
 * Respects prefers-reduced-motion (CSS disables the transitions).
 */
export default function ScrollFx() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
