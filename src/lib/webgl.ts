export function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

export function isLowPowerDevice(): boolean {
  if (typeof navigator === "undefined") return false;

  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const isSmallViewport = typeof window !== "undefined" && window.innerWidth < 768;

  return cores <= 4 && (memory <= 4 || isSmallViewport);
}
