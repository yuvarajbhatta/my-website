"use client";

import { Canvas } from "@react-three/fiber";
import { useWorldProgress } from "@/hooks/use-world-progress";
import { CHAPTER_IDS, TOTAL_DEPTH } from "@/lib/world";
import { CameraRig } from "./camera-rig";
import { LightingRig } from "./lighting-rig";
import { ChapterGroup } from "./chapter-group";
import { DepthField } from "./depth-field";
import { HeroChapter } from "./chapters/hero-chapter";
import { AboutChapter } from "./chapters/about-chapter";
import { ProjectsChapter } from "./chapters/projects-chapter";
import { SkillsChapter } from "./chapters/skills-chapter";
import { CreativeChapter } from "./chapters/creative-chapter";
import { ContactChapter } from "./chapters/contact-chapter";

export default function WorldCanvas({
  active,
  isCompact,
  reduceMotion,
  featuredProjectTitle,
}: {
  active: boolean;
  isCompact: boolean;
  reduceMotion: boolean;
  featuredProjectTitle: string;
}) {
  const world = useWorldProgress(CHAPTER_IDS);

  return (
    <Canvas
      dpr={[1, isCompact ? 1.4 : 1.9]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 0], fov: 42, near: 0.1, far: TOTAL_DEPTH + 20 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <fog attach="fog" args={["#050814", 6, 26]} />

      <LightingRig world={world} />
      <CameraRig world={world} reduceMotion={reduceMotion} />
      <DepthField count={isCompact ? 16 : 34} />

      <ChapterGroup id="home" world={world}>
        <HeroChapter reduceMotion={reduceMotion} particleCount={isCompact ? 120 : 260} showLabels={!isCompact} />
      </ChapterGroup>

      <ChapterGroup id="about" world={world}>
        <AboutChapter reduceMotion={reduceMotion} />
      </ChapterGroup>

      <ChapterGroup id="projects" world={world}>
        <ProjectsChapter title={featuredProjectTitle} reduceMotion={reduceMotion} />
      </ChapterGroup>

      <ChapterGroup id="skills" world={world}>
        <SkillsChapter reduceMotion={reduceMotion} showLabels={!isCompact} />
      </ChapterGroup>

      <ChapterGroup id="creative" world={world}>
        <CreativeChapter reduceMotion={reduceMotion} />
      </ChapterGroup>

      <ChapterGroup id="contact" world={world}>
        <ContactChapter reduceMotion={reduceMotion} particleCount={isCompact ? 50 : 90} />
      </ChapterGroup>
    </Canvas>
  );
}
