"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { useDocumentVisible } from "@/hooks/use-document-visible";
import { useInView } from "@/hooks/use-in-view";
import { useWebglCapable } from "@/hooks/use-webgl-capable";
import { HeroStaticFallback } from "./hero-static-fallback";

const HeroCanvas = dynamic(() => import("./hero-canvas"), {
  ssr: false,
  loading: () => <HeroStaticFallback animated={false} />,
});

export function HeroVisual() {
  const reduceMotion = usePrefersReducedMotion();
  const webglCapable = useWebglCapable();
  const documentVisible = useDocumentVisible();
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const scrollRef = useRef(0);

  const capability = reduceMotion ? "fallback" : webglCapable ? "3d" : "fallback";

  useEffect(() => {
    if (capability !== "3d") return;

    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight || 1;
        scrollRef.current = Math.min(1, Math.max(0, window.scrollY / viewportHeight));
        frame = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [capability]);

  const isCompact = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div ref={ref} className="absolute inset-0" aria-hidden="true">
      {capability === "3d" ? (
        <HeroCanvas
          scrollRef={scrollRef}
          reduceMotion={reduceMotion}
          active={inView && documentVisible}
          isCompact={isCompact}
        />
      ) : (
        <HeroStaticFallback animated={!reduceMotion} />
      )}
    </div>
  );
}
