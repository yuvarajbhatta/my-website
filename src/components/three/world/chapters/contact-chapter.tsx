"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { generateSpherePositions } from "@/lib/particles";

export function ContactChapter({ reduceMotion, particleCount }: { reduceMotion: boolean; particleCount: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const core = useRef<THREE.Mesh>(null);
  const positions = useMemo(() => generateSpherePositions(particleCount), [particleCount]);

  useFrame((_, delta) => {
    if (pointsRef.current && !reduceMotion) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
    if (core.current && !reduceMotion) {
      const s = 1 + Math.sin(performance.now() * 0.0015) * 0.08;
      core.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#67e8f9" size={0.035} sizeAttenuation transparent opacity={0.6} />
      </points>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.45, 2]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35}
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
