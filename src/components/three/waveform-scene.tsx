"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SceneCanvas } from "./scene-canvas";

const BAR_COUNT = 22;

function WaveformRing({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const bars = useRef<THREE.Mesh[]>([]);

  const layout = useMemo(() => {
    return Array.from({ length: BAR_COUNT }, (_, i) => {
      const angle = (i / BAR_COUNT) * Math.PI * 2;
      return {
        angle,
        x: Math.cos(angle) * 1.9,
        z: Math.sin(angle) * 1.9,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    if (group.current && !reduceMotion) {
      group.current.rotation.y += 0.0025;
    }
    const t = clock.getElapsedTime();
    bars.current.forEach((bar, i) => {
      if (!bar) return;
      const wave = reduceMotion ? 0.5 : 0.4 + Math.sin(t * 1.6 + i * 0.5) * 0.35 + 0.35;
      bar.scale.y = Math.max(0.2, wave);
      bar.position.y = (bar.scale.y * 0.5) - 0.4;
    });
  });

  return (
    <group ref={group}>
      {layout.map((item, i) => (
        <mesh
          key={i}
          position={[item.x, 0, item.z]}
          ref={(el) => {
            if (el) bars.current[i] = el;
          }}
        >
          <boxGeometry args={[0.08, 1, 0.08]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#22d3ee" : "#8b5cf6"}
            emissive={i % 2 === 0 ? "#22d3ee" : "#8b5cf6"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function WaveformScene({
  active,
  isCompact,
  reduceMotion,
}: {
  active: boolean;
  isCompact: boolean;
  reduceMotion: boolean;
}) {
  return (
    <SceneCanvas active={active} isCompact={isCompact} camera={{ position: [0, 2.4, 4.6], fov: 45 }}>
      <WaveformRing reduceMotion={reduceMotion} />
    </SceneCanvas>
  );
}
