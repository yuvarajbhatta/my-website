"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { SceneCanvas } from "./scene-canvas";

const STOPS = [
  { label: "Nepal", t: 0.02 },
  { label: "Education", t: 0.5 },
  { label: "Texas", t: 0.98 },
];

function JourneyPath({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.6, -0.9, 0),
      new THREE.Vector3(-0.9, 1.1, 0.6),
      new THREE.Vector3(0.8, -0.6, -0.4),
      new THREE.Vector3(2.6, 0.8, 0),
    ]);
  }, []);

  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 120, 0.025, 8, false), [curve]);

  useFrame((_, delta) => {
    if (group.current && !reduceMotion) {
      group.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={tubeGeometry}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {STOPS.map((stop) => {
        const point = curve.getPointAt(stop.t);
        return (
          <group key={stop.label} position={point}>
            <mesh>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.7} />
            </mesh>
            <Html center wrapperClass="pointer-events-none select-none">
              <span className="whitespace-nowrap rounded-full border border-cyan-300/20 bg-[#050814]/70 px-2 py-0.5 font-mono text-[10px] tracking-wide text-cyan-100/70">
                {stop.label}
              </span>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function JourneyScene({
  active,
  isCompact,
  reduceMotion,
}: {
  active: boolean;
  isCompact: boolean;
  reduceMotion: boolean;
}) {
  return (
    <SceneCanvas active={active} isCompact={isCompact} camera={{ position: [0, 0, 5], fov: 40 }}>
      <JourneyPath reduceMotion={reduceMotion} />
    </SceneCanvas>
  );
}
