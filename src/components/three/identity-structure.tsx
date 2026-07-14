"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { generateSpherePositions } from "@/lib/particles";

const LABELS = [
  { text: "Engineering", position: [2.6, 0.9, 0] as [number, number, number] },
  { text: "Data", position: [-2.4, -1.1, 0.6] as [number, number, number] },
  { text: "Infrastructure", position: [0.4, -2.2, -1] as [number, number, number] },
  { text: "Creativity", position: [-0.6, 2.3, 1] as [number, number, number] },
];

function ParticleField({ count }: { count: number }) {
  const positions = useMemo(() => generateSpherePositions(count), [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#67e8f9"
        size={0.028}
        sizeAttenuation
        transparent
        opacity={0.55}
      />
    </points>
  );
}

function OrbitalRing({
  radius,
  rotation,
  color,
  speed,
}: {
  radius: number;
  rotation: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
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

export function IdentityStructure({
  scrollRef,
  reduceMotion,
  particleCount,
  showLabels,
}: {
  scrollRef: React.RefObject<number>;
  reduceMotion: boolean;
  particleCount: number;
  showLabels: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;

    if (!reduceMotion) {
      const targetX = pointer.y * 0.18;
      const targetY = pointer.x * 0.22 + scrollRef.current * Math.PI * 0.35;
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta);
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta);
      group.current.position.y = THREE.MathUtils.damp(
        group.current.position.y,
        -scrollRef.current * 0.6,
        4,
        delta,
      );
    }

    if (core.current && !reduceMotion) {
      core.current.rotation.y += delta * 0.08;
      core.current.rotation.x += delta * 0.04;
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

      <OrbitalRing radius={2.3} rotation={[Math.PI / 2.4, 0, 0]} color="#22d3ee" speed={0.06} />
      <OrbitalRing radius={2.75} rotation={[Math.PI / 3.2, Math.PI / 5, 0]} color="#8b5cf6" speed={-0.045} />
      <OrbitalRing radius={3.15} rotation={[Math.PI / 1.8, Math.PI / 8, Math.PI / 6]} color="#3b82f6" speed={0.03} />

      <ParticleField count={particleCount} />

      {showLabels
        ? LABELS.map((label) => (
            <Html
              key={label.text}
              position={label.position}
              center
              occlude
              wrapperClass="pointer-events-none select-none"
            >
              <span className="whitespace-nowrap rounded-full border border-cyan-300/20 bg-[#050814]/70 px-2.5 py-1 font-mono text-[10px] tracking-wide text-cyan-100/70">
                {label.text}
              </span>
            </Html>
          ))
        : null}
    </group>
  );
}
