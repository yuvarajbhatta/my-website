"use client";

import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

export function SceneCanvas({
  children,
  active,
  isCompact,
  camera,
}: {
  children: ReactNode;
  active: boolean;
  isCompact: boolean;
  camera?: { position: [number, number, number]; fov?: number };
}) {
  return (
    <Canvas
      dpr={[1, isCompact ? 1.4 : 1.8]}
      frameloop={active ? "always" : "never"}
      camera={camera ?? { position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 2.5, 4]} intensity={1} color="#67e8f9" />
      <pointLight position={[-3, -2, -2]} intensity={0.65} color="#8b5cf6" />
      {children}
    </Canvas>
  );
}
