"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { CHAPTER_IDS, CHAPTER_TINTS, TOTAL_DEPTH } from "@/lib/world";
import type { WorldProgress } from "@/hooks/use-world-progress";

export function LightingRig({ world }: { world: WorldProgress }) {
  const { camera } = useThree();
  const key = useRef<THREE.PointLight>(null);
  const fill = useRef<THREE.PointLight>(null);
  const keyColor = useMemo(() => new THREE.Color(), []);

  useFrame(() => {
    const progress = world.progressRef.current;

    let nearestId: string = CHAPTER_IDS[0];
    let nearestDist = Infinity;
    for (const id of CHAPTER_IDS) {
      const fraction = world.chapterFractionRef.current[id] ?? 0;
      const dist = Math.abs(fraction - progress);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestId = id;
      }
    }

    const tint = CHAPTER_TINTS[nearestId as keyof typeof CHAPTER_TINTS] ?? "#22d3ee";
    keyColor.lerp(new THREE.Color(tint), 0.04);

    if (key.current) {
      key.current.position.set(camera.position.x + 3, camera.position.y + 2, camera.position.z + 4);
      key.current.color.copy(keyColor);
    }
    if (fill.current) {
      fill.current.position.set(camera.position.x - 4, camera.position.y - 1.5, camera.position.z - 6);
    }
  });

  return (
    <>
      <ambientLight intensity={0.42} />
      <pointLight ref={key} intensity={1.1} color="#67e8f9" distance={TOTAL_DEPTH} decay={1.4} />
      <pointLight ref={fill} intensity={0.6} color="#8b5cf6" distance={TOTAL_DEPTH} decay={1.4} />
    </>
  );
}
