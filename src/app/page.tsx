import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { GithubActivity } from "@/components/sections/github-activity";
import { Creative } from "@/components/sections/creative";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main className="site-shell text-slate-100">
      <div className="ambient-grid" />
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />

      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GithubActivity />
      <Creative />
      <Contact />
      <Footer />

      <ScrollReveal />
    </main>
  );
}
