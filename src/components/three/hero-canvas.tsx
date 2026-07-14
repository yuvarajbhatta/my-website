"use client";

import { Canvas } from "@react-three/fiber";
import { IdentityStructure } from "./identity-structure";

export default function HeroCanvas({
  scrollRef,
  reduceMotion,
  active,
  isCompact,
}: {
  scrollRef: React.RefObject<number>;
  reduceMotion: boolean;
  active: boolean;
  isCompact: boolean;
}) {
  return (
    <Canvas
      dpr={[1, isCompact ? 1.5 : 2]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 3, 5]} intensity={1.1} color="#67e8f9" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#8b5cf6" />

      <IdentityStructure
        scrollRef={scrollRef}
        reduceMotion={reduceMotion}
        particleCount={isCompact ? 120 : 260}
        showLabels={!isCompact}
      />
    </Canvas>
  );
}
