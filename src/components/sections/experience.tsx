import { SectionHeader } from "@/components/ui/section-header";
import { education, experience } from "@/lib/data";

export function Experience() {
  return (
    <>
      <section id="experience" className="section-wrap">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass-panel p-6 md:p-8 reveal-up">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title mt-4 max-w-xl">
              Production software delivery with a backend-first foundation.
            </h2>
          </div>
          <div className="timeline-panel reveal-up">
            {experience.map((role) => (
              <div key={role.role} className="timeline-item">
                <div className="timeline-dot" />
                <div>
                  <p className="section-kicker">{role.period}</p>
                  <h3>{role.role}</h3>
                  <div className="mt-5 space-y-4 text-slate-300">
                    {role.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Education"
          title="Computer science foundation with graduate-level data science depth."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="education-card reveal-up">
              <p className="section-kicker">{item.location}</p>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
