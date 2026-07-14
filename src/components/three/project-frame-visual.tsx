"use client";

import dynamic from "next/dynamic";
import { SceneFrame } from "./scene-frame";
import { DecorFallback } from "./decor-fallback";

const ProjectFrameScene = dynamic(() => import("./project-frame-scene"), { ssr: false });

export function ProjectFrameVisual({ title }: { title: string }) {
  return (
    <SceneFrame
      scene={ProjectFrameScene}
      fallback={<DecorFallback tone="violet" />}
      className="project-frame-visual"
      sceneProps={{ title }}
    />
  );
}
