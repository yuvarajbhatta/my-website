"use client";

import { usePrefersReducedMotion } from "./use-reduced-motion";
import { useWebglCapable } from "./use-webgl-capable";
import { useDocumentVisible } from "./use-document-visible";
import { useLazyMount } from "./use-lazy-mount";

export function useSceneGate(rootMargin = "15% 0px 15% 0px") {
  const reduceMotion = usePrefersReducedMotion();
  const webglCapable = useWebglCapable();
  const documentVisible = useDocumentVisible();
  const { ref, inView } = useLazyMount<HTMLDivElement>(rootMargin);

  return {
    ref,
    reduceMotion,
    canRender3D: !reduceMotion && webglCapable,
    mounted: !reduceMotion && webglCapable && inView,
    active: inView && documentVisible,
  };
}
