"use client";

import dynamic from "next/dynamic";
import { SceneFrame } from "./scene-frame";
import { DecorFallback } from "./decor-fallback";

const JourneyScene = dynamic(() => import("./journey-scene"), { ssr: false });

export function AboutJourneyVisual() {
  return (
    <SceneFrame
      scene={JourneyScene}
      fallback={<DecorFallback tone="cyan" />}
      className="journey-visual"
    />
  );
}
