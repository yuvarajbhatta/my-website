"use client";

import dynamic from "next/dynamic";
import { SceneFrame } from "./scene-frame";
import { DecorFallback } from "./decor-fallback";

const ConnectScene = dynamic(() => import("./connect-scene"), { ssr: false });

export function ConnectVisual() {
  return (
    <SceneFrame scene={ConnectScene} fallback={<DecorFallback tone="violet" />} className="connect-visual" />
  );
}
