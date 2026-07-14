"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollReveal() {
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));
    if (elements.length === 0) return;

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("reveal-up-visible"));
      return;
    }

    let cleanup = () => {};

    let cancelled = false;
    import("gsap").then(({ default: gsap }) =>
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const triggers = elements.map((el) =>
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            once: true,
            onEnter: () => el.classList.add("reveal-up-visible"),
          }),
        );

        cleanup = () => {
          triggers.forEach((trigger) => trigger.kill());
        };
      }),
    );

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [reduceMotion]);

  return null;
}
