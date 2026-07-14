"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { DepthLabel } from "../depth-label";

export function ProjectsChapter({ title, reduceMotion }: { title: string; reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current && !reduceMotion) {
      const t = clock.getElapsedTime();
      group.current.rotation.y = Math.sin(t * 0.25) * 0.18;
      group.current.rotation.x = Math.cos(t * 0.2) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0, -0.2]}>
        <planeGeometry args={[3.4, 2.1]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.1} roughness={0.3} />
      </mesh>
      <mesh>
        <planeGeometry args={[3.2, 1.9]} />
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
        <edgesGeometry args={[new THREE.PlaneGeometry(3.2, 1.9)]} />
        <lineBasicMaterial color="#67e8f9" transparent opacity={0.5} />
      </lineSegments>
      <DepthLabel position={[0, 0, 0]}>
        <span className="whitespace-nowrap rounded-full border border-cyan-300/25 bg-[#050814]/70 px-3 py-1 font-mono text-[11px] tracking-wide text-cyan-100/80">
          {title}
        </span>
      </DepthLabel>
    </group>
  );
}
