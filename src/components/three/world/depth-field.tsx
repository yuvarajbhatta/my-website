"use client";

import { useMemo } from "react";
import { Billboard } from "@react-three/drei";
import { generateDepthLayers } from "@/lib/depth-layers";

export function DepthField({ count }: { count: number }) {
  const layers = useMemo(() => generateDepthLayers(count), [count]);

  return (
    <group>
      {layers.map((layer, i) => (
        <Billboard key={i} position={[layer.x, layer.y, layer.z]}>
          <mesh>
            <planeGeometry args={[layer.size, layer.size]} />
            <meshBasicMaterial color={layer.color} transparent opacity={layer.opacity} />
          </mesh>
        </Billboard>
      ))}
    </group>
  );
}
