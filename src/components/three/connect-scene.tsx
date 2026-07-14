"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SceneCanvas } from "./scene-canvas";
import { generateSpherePositions } from "@/lib/particles";

function ConvergingParticles({ reduceMotion }: { reduceMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const core = useRef<THREE.Mesh>(null);
  const count = 90;

  const start = useMemo(() => generateSpherePositions(count), [count]);
  const positions = useMemo(() => start.slice(), [start]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
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
        <icosahedronGeometry args={[0.4, 2]} />
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

export default function ConnectScene({
  active,
  isCompact,
  reduceMotion,
}: {
  active: boolean;
  isCompact: boolean;
  reduceMotion: boolean;
}) {
  return (
    <SceneCanvas active={active} isCompact={isCompact} camera={{ position: [0, 0, 5.5], fov: 42 }}>
      <ConvergingParticles reduceMotion={reduceMotion} />
    </SceneCanvas>
  );
}
