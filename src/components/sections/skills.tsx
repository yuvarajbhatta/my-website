import { SectionHeader } from "@/components/ui/section-header";
import { focusCards, skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeader
        eyebrow="Technical Focus"
        title="Focused on practical systems that need to run, scale, integrate, and improve."
      />

      <div className="focus-grid mt-10">
        {focusCards.map((item, index) => (
          <article key={item.title} className="focus-card reveal-up">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 glass-panel p-6 md:p-8 reveal-up">
        <p className="section-kicker">Capability Map</p>
        <h3 className="section-title mt-3 text-xl">
          Skills grouped by where they show up in a system.
        </h3>
        <div className="skill-map mt-8">
          {skillGroups.map((group) => (
            <div key={group.id} className="skill-group">
              <h4>{group.title}</h4>
              <p>{group.description}</p>
              <div className="chip-row mt-4">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
