"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export function DepthLabel({
  position,
  fadeNear = 8,
  fadeFar = 22,
  children,
}: {
  position: [number, number, number];
  fadeNear?: number;
  fadeFar?: number;
  children: React.ReactNode;
}) {
  const anchor = useRef<THREE.Group>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const worldPos = useRef(new THREE.Vector3());

  useFrame(({ camera }) => {
    if (!anchor.current || !wrapper.current) return;
    anchor.current.getWorldPosition(worldPos.current);
    const distance = camera.position.distanceTo(worldPos.current);
    const visibility = THREE.MathUtils.clamp((fadeFar - distance) / (fadeFar - fadeNear), 0, 1);
    wrapper.current.style.opacity = String(visibility);
  });

  return (
    <group ref={anchor} position={position}>
      <Html center distanceFactor={9} wrapperClass="pointer-events-none select-none">
        <div ref={wrapper} style={{ opacity: 0, transition: "opacity 120ms linear" }}>
          {children}
        </div>
      </Html>
    </group>
  );
}
