import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { githubCards } from "@/lib/data";

export function GithubActivity() {
  return (
    <section id="github" className="section-wrap">
      <SectionHeader
        eyebrow="GitHub Activity"
        title="A developer profile layer built around public activity and technical presence."
        copy="External analytics are embedded as progressive enhancements. The layout remains intact if a provider is temporarily unavailable."
      />
      <div className="github-grid mt-10">
        {githubCards.map((card) => (
          <article key={card.title} className="github-card reveal-up">
            <div className="github-card-header">
              <span className="status-dot" />
              <p>{card.title}</p>
            </div>
            <Image
              src={card.src}
              alt={`${card.title} for Yuva Bhatta GitHub profile`}
              width={540}
              height={330}
              loading="lazy"
              unoptimized
            />
          </article>
        ))}
      </div>
    </section>
  );
}
