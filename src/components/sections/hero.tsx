import Image from "next/image";
import { metrics, documentsUrl } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="hero-section relative">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_23.5rem] lg:gap-14">
        <div className="hero-content space-y-7">
          <div className="status-pill">
            <span className="status-dot" />
            Software Developer • AI Automation • Cloud Infrastructure
          </div>

          <div className="space-y-6">
            <p className="terminal-line">
              <span>yuva@portfolio</span>:~$ ship reliable systems
            </p>
            <h1 className="hero-title hero-heading">
              Building reliable backend, automation, cloud, and data systems.
            </h1>
            <p className="hero-copy">
              I am Yuva Bhatta, a Texas-based software developer originally
              from Nepal. I build across backend systems, integrations, cloud
              infrastructure, data workflows, and developer tooling with a
              practical full-stack mindset.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={documentsUrl} target="_blank" rel="noreferrer" className="button-primary">
              View Documents
            </a>
            <a href="https://github.com/yuvarajbhatta" target="_blank" rel="noreferrer" className="button-secondary">
              GitHub
            </a>
            <a href="#contact" className="button-secondary">
              Contact
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.value} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="profile-card hero-content w-full max-w-[23.5rem] justify-self-center lg:justify-self-end">
          <div className="profile-scanline" />
          <div className="headshot-frame">
            <Image
              src="/yuva-headshot.PNG"
              alt="Portrait of Yuva Bhatta"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 23.5rem"
              className="object-cover object-top"
            />
          </div>
          <div className="profile-card-footer">
            <div>
              <p>Yuva Bhatta</p>
              <span>Software Developer</span>
            </div>
            <span className="availability-chip">Online</span>
          </div>
        </aside>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-indicator-track">
          <span className="scroll-indicator-dot" />
        </span>
        Scroll
      </a>
    </section>
  );
}
