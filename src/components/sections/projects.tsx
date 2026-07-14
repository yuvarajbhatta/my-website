import { SectionHeader } from "@/components/ui/section-header";
import { TiltCard } from "@/components/ui/tilt-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Systems, experiments, and platforms that reflect how I build."
        copy="These are high-level project areas rather than fake repository links. Public links can be added as projects are published."
      />

      <div className="project-grid mt-10">
        {projects.map((project) => (
          <article key={project.title} className="contents">
            <TiltCard
              className={`project-card reveal-up ${project.featured ? "project-card-featured" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="section-kicker">{project.eyebrow}</p>
                <span className="status-chip" data-status={project.status}>
                  {project.status}
                </span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="chip-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
              {project.liveUrl || project.githubUrl ? (
                <div className="mt-4 flex gap-4 text-sm">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                      Visit site →
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                      Source →
                    </a>
                  ) : null}
                </div>
              ) : null}
            </TiltCard>
          </article>
        ))}
      </div>
    </section>
  );
}
