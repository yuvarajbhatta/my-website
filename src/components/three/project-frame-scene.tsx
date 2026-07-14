"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { SceneCanvas } from "./scene-canvas";

function GlassFrame({ title, reduceMotion }: { title: string; reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    if (reduceMotion) return;
    const targetX = pointer.y * 0.12;
    const targetY = pointer.x * 0.18;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta);
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0, -0.2]}>
        <planeGeometry args={[3.1, 1.9]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.1} roughness={0.3} />
      </mesh>
      <mesh>
        <planeGeometry args={[2.9, 1.7]} />
        <meshPhysicalMaterial
          color="#0ea5e9"
          transparent
          opacity={0.14}
          roughness={0.15}
          metalness={0.1}
          emissive="#22d3ee"
          emissiveIntensity={0.12}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(2.9, 1.7)]} />
        <lineBasicMaterial color="#67e8f9" transparent opacity={0.5} />
      </lineSegments>
      <Html center occlude wrapperClass="pointer-events-none select-none">
        <span className="whitespace-nowrap rounded-full border border-cyan-300/25 bg-[#050814]/70 px-3 py-1 font-mono text-[11px] tracking-wide text-cyan-100/80">
          {title}
        </span>
      </Html>
    </group>
  );
}

export default function ProjectFrameScene({
  active,
  isCompact,
  reduceMotion,
  title,
}: {
  active: boolean;
  isCompact: boolean;
  reduceMotion: boolean;
  title: string;
}) {
  return (
    <SceneCanvas active={active} isCompact={isCompact} camera={{ position: [0, 0, 4.6], fov: 40 }}>
      <GlassFrame title={title} reduceMotion={reduceMotion} />
    </SceneCanvas>
  );
}
