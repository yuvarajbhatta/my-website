"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

let registered = false;

export function DomParallax() {
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const ctx = gsap.context(() => {
      gsap.to(".ambient-glow-one", {
        yPercent: 40,
        xPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.4 },
      });
      gsap.to(".ambient-glow-two", {
        yPercent: -30,
        xPercent: 15,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.4 },
      });
      gsap.to(".ambient-grid", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.4 },
      });
    });

    return () => ctx.revert();
  }, [reduceMotion]);

  return null;
}
