export const CHAPTER_IDS = ["home", "about", "projects", "skills", "creative", "contact"] as const;

export type ChapterId = (typeof CHAPTER_IDS)[number];

export const TOTAL_DEPTH = 100;

export const CHAPTER_TINTS: Record<ChapterId, string> = {
  home: "#22d3ee",
  about: "#22d3ee",
  projects: "#8b5cf6",
  skills: "#3b82f6",
  creative: "#8b5cf6",
  contact: "#22d3ee",
};
