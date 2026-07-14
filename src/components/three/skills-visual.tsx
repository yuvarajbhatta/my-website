"use client";

import dynamic from "next/dynamic";
import { SceneFrame } from "./scene-frame";
import { DecorFallback } from "./decor-fallback";

const SkillsScene = dynamic(() => import("./skills-scene"), { ssr: false });

export function SkillsVisual() {
  return (
    <SceneFrame scene={SkillsScene} fallback={<DecorFallback tone="violet" />} className="skills-visual" />
  );
}
