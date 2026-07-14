"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { generateSpherePositions } from "@/lib/particles";
import { DepthLabel } from "../depth-label";

const LABELS = [
  { text: "Engineering", position: [2.6, 0.9, 0] as [number, number, number] },
  { text: "Data", position: [-2.4, -1.1, 0.6] as [number, number, number] },
  { text: "Infrastructure", position: [0.4, -2.2, -1] as [number, number, number] },
  { text: "Creativity", position: [-0.6, 2.3, 1] as [number, number, number] },
];

function OrbitalRing({
  radius,
  rotation,
  color,
  speed,
  reduceMotion,
}: {
  radius: number;
  rotation: [number, number, number];
  color: string;
  speed: number;
  reduceMotion: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current && !reduceMotion) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.008, 8, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

export function HeroChapter({
  reduceMotion,
  particleCount,
  showLabels,
}: {
  reduceMotion: boolean;
  particleCount: number;
  showLabels: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  const positions = useMemo(() => generateSpherePositions(particleCount), [particleCount]);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (group.current && !reduceMotion) {
      const targetX = pointer.y * 0.1;
      const targetY = pointer.x * 0.14;
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta);
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta);
    }
    if (core.current && !reduceMotion) {
      core.current.rotation.y += delta * 0.08;
      core.current.rotation.x += delta * 0.04;
    }
    if (pointsRef.current && !reduceMotion) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.85}
          emissive="#22d3ee"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[1.0, 2]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          roughness={0.25}
          metalness={0.1}
          transparent
          opacity={0.16}
          emissive="#8b5cf6"
          emissiveIntensity={0.25}
        />
      </mesh>

      <OrbitalRing radius={2.3} rotation={[Math.PI / 2.4, 0, 0]} color="#22d3ee" speed={0.06} reduceMotion={reduceMotion} />
      <OrbitalRing radius={2.75} rotation={[Math.PI / 3.2, Math.PI / 5, 0]} color="#8b5cf6" speed={-0.045} reduceMotion={reduceMotion} />
      <OrbitalRing radius={3.15} rotation={[Math.PI / 1.8, Math.PI / 8, Math.PI / 6]} color="#3b82f6" speed={0.03} reduceMotion={reduceMotion} />

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#67e8f9" size={0.028} sizeAttenuation transparent opacity={0.55} />
      </points>

      {showLabels
        ? LABELS.map((label) => (
            <DepthLabel key={label.text} position={label.position}>
              <span className="whitespace-nowrap rounded-full border border-cyan-300/20 bg-[#050814]/70 px-2.5 py-1 font-mono text-[10px] tracking-wide text-cyan-100/70">
                {label.text}
              </span>
            </DepthLabel>
          ))
        : null}
    </group>
  );
}
