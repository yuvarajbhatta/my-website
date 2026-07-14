"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { useWebglCapable } from "@/hooks/use-webgl-capable";
import { useDocumentVisible } from "@/hooks/use-document-visible";
import { useIsCompact } from "@/hooks/use-is-compact";
import { projects } from "@/lib/data";

const WorldCanvas = dynamic(() => import("./world-canvas"), { ssr: false });

const featured = projects.find((project) => project.featured) ?? projects[0];

export function WorldVisual() {
  const reduceMotion = usePrefersReducedMotion();
  const webglCapable = useWebglCapable();
  const documentVisible = useDocumentVisible();
  const isCompact = useIsCompact();

  if (reduceMotion || !webglCapable) {
    return null;
  }

  return (
    <div className="world-canvas-layer" aria-hidden="true">
      <WorldCanvas
        active={documentVisible}
        isCompact={isCompact}
        reduceMotion={reduceMotion}
        featuredProjectTitle={featured.title}
      />
    </div>
  );
}
