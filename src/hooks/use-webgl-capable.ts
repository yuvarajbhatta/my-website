"use client";

import { useSyncExternalStore } from "react";
import { isLowPowerDevice, isWebGLAvailable } from "@/lib/webgl";

let cached: boolean | null = null;

function subscribe() {
  return () => {};
}

function getSnapshot() {
  if (cached === null) {
    cached = isWebGLAvailable() && !isLowPowerDevice();
  }
  return cached;
}

function getServerSnapshot() {
  return false;
}

export function useWebglCapable(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
