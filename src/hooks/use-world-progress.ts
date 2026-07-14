"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export interface WorldProgress {
  progressRef: React.RefObject<number>;
  chapterFractionRef: React.RefObject<Record<string, number>>;
}

export function useWorldProgress(chapterIds: readonly string[]): WorldProgress {
  const progressRef = useRef(0);
  const chapterFractionRef = useRef<Record<string, number>>({});

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      chapterIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        chapterFractionRef.current[id] = Math.min(1, Math.max(0, top / scrollable));
      });
    };

    measure();

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    const onResize = () => {
      measure();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    // Layout can still shift after mount (web font swap, images finishing
    // load), which would leave chapter depths measured against a stale
    // document height. Re-measure once things settle.
    const resizeObserver = new ResizeObserver(() => {
      measure();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    document.fonts?.ready?.then(() => {
      measure();
      ScrollTrigger.refresh();
    });

    return () => {
      trigger.kill();
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, [chapterIds]);

  return { progressRef, chapterFractionRef };
}
