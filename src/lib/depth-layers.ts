import { TOTAL_DEPTH } from "./world";

export interface DepthLayer {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  opacity: number;
}

const COLORS = ["#22d3ee", "#8b5cf6", "#3b82f6", "#67e8f9"];

export function generateDepthLayers(count: number): DepthLayer[] {
  const layers: DepthLayer[] = [];
  for (let i = 0; i < count; i += 1) {
    const seed = i * 137.508;
    const spread = ((seed % 360) / 360) * Math.PI * 2;
    const radius = 4 + ((seed % 97) / 97) * 5;
    layers.push({
      x: Math.cos(spread) * radius,
      y: Math.sin(spread * 1.3) * radius * 0.6,
      z: -((i + 0.5) / count) * TOTAL_DEPTH,
      size: 0.4 + ((seed % 53) / 53) * 1.1,
      color: COLORS[i % COLORS.length],
      opacity: 0.04 + ((seed % 31) / 31) * 0.05,
    });
  }
  return layers;
}
