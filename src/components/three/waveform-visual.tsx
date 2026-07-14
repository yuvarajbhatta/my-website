"use client";

import dynamic from "next/dynamic";
import { SceneFrame } from "./scene-frame";
import { DecorFallback } from "./decor-fallback";

const WaveformScene = dynamic(() => import("./waveform-scene"), { ssr: false });

export function WaveformVisual() {
  return (
    <SceneFrame scene={WaveformScene} fallback={<DecorFallback tone="cyan" />} className="waveform-visual" />
  );
}
