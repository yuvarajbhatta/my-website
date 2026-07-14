"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { skillGroups } from "@/lib/data";
import { DepthLabel } from "../depth-label";

const COLORS = ["#22d3ee", "#8b5cf6", "#3b82f6", "#67e8f9"];

function OrbitNode({
  radius,
  speed,
  offset,
  label,
  color,
  reduceMotion,
  showLabel,
}: {
  radius: number;
  speed: number;
  offset: number;
  label: string;
  color: string;
  reduceMotion: boolean;
  showLabel: boolean;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = reduceMotion ? offset : clock.getElapsedTime() * speed + offset;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.7) * 0.5, Math.sin(t) * radius);
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.15, 20, 20]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
      {showLabel ? (
        <DepthLabel position={[0, 0, 0]}>
          <span className="whitespace-nowrap rounded-full border border-cyan-300/20 bg-[#050814]/75 px-2 py-0.5 font-mono text-[10px] tracking-wide text-cyan-100/75">
            {label}
          </span>
        </DepthLabel>
      ) : null}
    </group>
  );
}

export function SkillsChapter({ reduceMotion, showLabels }: { reduceMotion: boolean; showLabels: boolean }) {
  const core = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (core.current && !reduceMotion) {
      core.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0.75} />
      </mesh>

      {skillGroups.map((group, index) => {
        const radius = 1.9 + index * 0.4;
        const speed = 0.12 + index * 0.03;
        const color = COLORS[index % COLORS.length];
        return (
          <group key={group.id}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[radius, 0.004, 8, 96]} />
              <meshBasicMaterial color={color} transparent opacity={0.18} />
            </mesh>
            <OrbitNode
              radius={radius}
              speed={speed}
              offset={index * 1.7}
              label={group.title}
              color={color}
              reduceMotion={reduceMotion}
              showLabel={showLabels}
            />
          </group>
        );
      })}
    </group>
  );
}
