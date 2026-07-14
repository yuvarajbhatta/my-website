"use client";

import { useEffect, useRef, useState } from "react";

export function useLazyMount<T extends HTMLElement>(rootMargin = "20% 0px 20% 0px") {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState({ inView: false, everInView: false });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState((prev) => ({
          inView: entry.isIntersecting,
          everInView: prev.everInView || entry.isIntersecting,
        }));
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, ...state };
}
