"use client";

import type { ComponentType, ReactNode } from "react";
import { useSceneGate } from "@/hooks/use-scene-gate";

type BaseSceneProps = {
  active: boolean;
  isCompact: boolean;
  reduceMotion: boolean;
};

export function SceneFrame<P extends BaseSceneProps>({
  scene: Scene,
  fallback,
  className,
  sceneProps,
}: {
  scene: ComponentType<P>;
  fallback: ReactNode;
  className?: string;
  sceneProps?: Omit<P, keyof BaseSceneProps>;
}) {
  const { ref, mounted, active, reduceMotion } = useSceneGate();
  const isCompact = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {mounted ? (
        <Scene {...({ active, isCompact, reduceMotion, ...(sceneProps ?? {}) } as P)} />
      ) : (
        fallback
      )}
    </div>
  );
}
