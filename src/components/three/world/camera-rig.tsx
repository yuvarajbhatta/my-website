"use client";

/* eslint-disable react-hooks/immutability -- react-three-fiber's useFrame contract requires
   mutating the camera object3D in place each frame; this is the standard, performant pattern
   (re-rendering React for camera motion would defeat the render loop). */

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TOTAL_DEPTH } from "@/lib/world";
import type { WorldProgress } from "@/hooks/use-world-progress";

export function CameraRig({
  world,
  reduceMotion,
}: {
  world: WorldProgress;
  reduceMotion: boolean;
}) {
  const { camera, pointer } = useThree();

  useFrame((_, delta) => {
    const progress = world.progressRef.current;
    const targetZ = -progress * TOTAL_DEPTH;

    const dampTime = reduceMotion ? 0.001 : 6;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, dampTime, delta);

    const parallaxX = reduceMotion ? 0 : pointer.x * 0.6;
    const parallaxY = reduceMotion ? 0 : pointer.y * 0.35;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, parallaxX, 4, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, parallaxY, 4, delta);

    camera.lookAt(camera.position.x * 0.6, camera.position.y * 0.6, camera.position.z - 12);

    if (camera instanceof THREE.PerspectiveCamera) {
      const wobble = reduceMotion ? 0 : Math.sin(progress * Math.PI * 10) * 0.6;
      const targetFov = 42 + wobble;
      camera.fov = THREE.MathUtils.damp(camera.fov, targetFov, 5, delta);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
