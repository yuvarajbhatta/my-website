import { SectionHeader } from "@/components/ui/section-header";
import { journey } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="About"
          title="A software engineer with data depth, infrastructure curiosity, and creative range."
        />
        <div className="glass-panel space-y-5 p-6 text-base leading-relaxed text-slate-300 md:p-7 reveal-up">
          <p>
            I am a Texas-based software developer originally from Nepal, with
            a background shaped by software engineering, data science, and a
            creative mindset. My work is grounded in building reliable systems
            while staying curious about how technology can become more useful,
            automated, and personal.
          </p>
          <p>
            My Master of Science in Data Science adds analytical depth to my
            engineering foundation. I like working where backend systems,
            cloud infrastructure, self-hosted tools, AI automation, and
            full-stack delivery meet.
          </p>
        </div>
      </div>

      <ol className="journey-line mt-10">
        {journey.map((step) => (
          <li key={step.title} className="journey-step reveal-up">
            <span className="journey-marker" aria-hidden="true" />
            <p className="section-kicker">{step.year}</p>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
