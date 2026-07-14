"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { TOTAL_DEPTH } from "@/lib/world";
import type { WorldProgress } from "@/hooks/use-world-progress";

export function ChapterGroup({
  id,
  world,
  children,
}: {
  id: string;
  world: WorldProgress;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    const fraction = world.chapterFractionRef.current[id] ?? 0;
    ref.current.position.z = -fraction * TOTAL_DEPTH;
  });

  return <group ref={ref}>{children}</group>;
}
