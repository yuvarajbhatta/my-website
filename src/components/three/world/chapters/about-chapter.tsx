"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { DepthLabel } from "../depth-label";

const STOPS = [
  { label: "Nepal", t: 0.02 },
  { label: "Education", t: 0.5 },
  { label: "Texas", t: 0.98 },
];

export function AboutChapter({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.2, -1.1, 0),
      new THREE.Vector3(-1.1, 1.3, 0.8),
      new THREE.Vector3(1.0, -0.8, -0.5),
      new THREE.Vector3(3.2, 1.0, 0),
    ]);
  }, []);

  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 120, 0.03, 8, false), [curve]);

  useFrame((_, delta) => {
    if (group.current && !reduceMotion) {
      group.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={tubeGeometry}>
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} transparent opacity={0.85} />
      </mesh>

      {STOPS.map((stop) => {
        const point = curve.getPointAt(stop.t);
        const position: [number, number, number] = [point.x, point.y, point.z];
        return (
          <group key={stop.label} position={position}>
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.7} />
            </mesh>
            <DepthLabel position={[0, 0, 0]}>
              <span className="whitespace-nowrap rounded-full border border-cyan-300/20 bg-[#050814]/70 px-2 py-0.5 font-mono text-[10px] tracking-wide text-cyan-100/70">
                {stop.label}
              </span>
            </DepthLabel>
          </group>
        );
      })}
    </group>
  );
}
