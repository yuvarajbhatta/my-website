import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Focus", href: "#technical-focus" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "2022", label: "Building production software at Paychex" },
  { value: "MS", label: "Data Science foundation" },
  { value: "Full Stack", label: "Backend, cloud, integrations, UI" },
];

const projectCards = [
  {
    eyebrow: "Infrastructure",
    title: "Self-hosted cloud infrastructure",
    copy:
      "A personal lab for cloud services, Linux systems, networking, deployment workflows, secure access, and long-running services.",
    tags: ["Linux", "Docker", "Cloudflare", "Self Hosting"],
  },
  {
    eyebrow: "Product System",
    title: "Family tree and lineage platform",
    copy:
      "A structured platform concept for preserving family history, relationships, cultural context, and lineage data with durable digital records.",
    tags: ["Full Stack", "Data Modeling", "UX"],
  },
  {
    eyebrow: "Automation",
    title: "AI automation experiments",
    copy:
      "Explorations around AI-assisted workflows, developer productivity, task automation, and useful agents for repetitive technical work.",
    tags: ["AI", "Python", "Developer Tooling"],
  },
  {
    eyebrow: "Analytics",
    title: "Data science and analytics work",
    copy:
      "Applied data analysis, modeling, and reporting work shaped by a graduate data science background and practical engineering delivery.",
    tags: ["Data Science", "SQL", "Python"],
  },
  {
    eyebrow: "Identity",
    title: "Personal website and digital identity system",
    copy:
      "A modern developer portfolio designed to connect professional credibility, technical focus, creative identity, and public presence.",
    tags: ["Next.js", "TypeScript", "Design Systems"],
  },
];

const focusCards = [
  {
    title: "Backend Systems",
    copy:
      "Production-oriented services, APIs, database-backed workflows, integration boundaries, and maintainable business logic.",
  },
  {
    title: "AI & Automation",
    copy:
      "Practical automation experiments that combine AI tools, scripts, workflows, and developer productivity patterns.",
  },
  {
    title: "Cloud & DevOps",
    copy:
      "Cloud infrastructure, self-hosted environments, deployment pipelines, containers, DNS, and operational discipline.",
  },
  {
    title: "Data Science",
    copy:
      "Analytical thinking, structured data work, modeling foundations, and the ability to connect engineering decisions to data.",
  },
  {
    title: "Full Stack Development",
    copy:
      "End-to-end feature delivery across backend, frontend, databases, APIs, and the user-facing parts of a system.",
  },
  {
    title: "Infrastructure Security",
    copy:
      "Secure access, network-aware architecture, responsible configuration, and pragmatic protection for systems that stay online.",
  },
];

const techStack = [
  "Java",
  "Spring Boot",
  "Python",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "Docker",
  "Linux",
  "Git",
  "GitHub",
  "Cloudflare",
  "REST APIs",
  "Kafka",
  "CI/CD",
  "React",
  "Next.js",
  "TypeScript",
];

const experiencePoints = [
  "Contributes to production software delivery as a Software Developer at Paychex.",
  "Works across backend systems, database workflows, integrations, and automation.",
  "Brings a full-stack mindset to engineering problems that require reliability, clarity, and practical execution.",
];

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "University of the Cumberlands",
    location: "Williamsburg, Kentucky",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "East Central University",
    location: "Ada, Oklahoma",
  },
];

const githubCards = [
  {
    title: "Profile Summary",
    src: "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=yuvarajbhatta&theme=github_dark",
  },
  {
    title: "Language Profile",
    src: "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=yuvarajbhatta&theme=github_dark",
  },
  {
    title: "Commit Activity",
    src: "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=yuvarajbhatta&theme=github_dark&utcOffset=-5",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuva-raj-bhatta-900ab923a",
    value: "yuva-raj-bhatta-",
  },
  {
    label: "GitHub",
    href: "https://github.com/yuvarajbhatta",
    value: "yuvarajbhatta",
  },
  {
    label: "X",
    href: "https://x.com/YuvaBhatta",
    value: "@YuvaBhatta",
  },
  // {
  //   label: "Instagram",
  //   href: "https://www.instagram.com/yr.bhatta/",
  //   value: "@yr.bhatta",
  // },
  // {
  //   label: "TikTok",
  //   href: "https://www.tiktok.com/@yuvaraj.bhatta1",
  //   value: "@yuvaraj.bhatta1",
  // },
  // {
  //   label: "Facebook",
  //   href: "https://www.facebook.com/yuvaraj.bhatta1",
  //   value: "yuvaraj.bhatta1",
  // },
];

function SocialIcon({ label }: { label: string }) {
  const className = "h-5 w-5 text-cyan-100";

  switch (label) {
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.6 9.66h2.67v8.74H5.6V9.66Zm4.35 0h2.56v1.2h.04c.36-.68 1.22-1.4 2.5-1.4 2.67 0 3.16 1.76 3.16 4.04v4.9h-2.67v-4.34c0-1.03-.02-2.36-1.44-2.36-1.45 0-1.67 1.13-1.67 2.29v4.41H9.95V9.66Z"
          />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.46-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.52 1.01 1.52 1.01.88 1.53 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.92 0-1.08.39-1.96 1.02-2.66-.1-.25-.45-1.28.1-2.67 0 0 .83-.27 2.73 1.01a9.45 9.45 0 0 1 4.97 0c1.9-1.28 2.73-1 2.73-1 .54 1.39.2 2.42.1 2.67.64.7 1.02 1.58 1.02 2.66 0 3.83-2.34 4.66-4.57 4.91.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
          />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M18.9 3H21l-4.58 5.24L21.8 21h-4.22l-3.31-4.33L10.5 21H8.4l4.9-5.6L2.2 3h4.32l3 3.97L12.98 3h2.08L10.6 8.1l6.3 8.24h-1.42l-5.54-7.25L4.67 4.35H6.1l5.13 6.7L18.9 3Z"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2Zm0 1.75A3.5 3.5 0 0 0 3.75 7.25v9.5a3.5 3.5 0 0 0 3.5 3.5h9.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5h-9.5Zm9.88 1.31a1.06 1.06 0 1 1 0 2.13 1.06 1.06 0 0 1 0-2.13ZM12 6.72A5.28 5.28 0 1 1 6.72 12 5.29 5.29 0 0 1 12 6.72Zm0 1.75A3.53 3.53 0 1 0 15.53 12 3.54 3.54 0 0 0 12 8.47Z"
          />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M14.73 3c.34 1.93 1.52 3.52 3.27 4.4v2.53a7.03 7.03 0 0 1-3.23-.98v5.11A5.06 5.06 0 1 1 9.7 9h2.53a2.54 2.54 0 1 0 0 5.08V3h2.5Z"
          />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M13.5 21v-7h2.35l.4-2.74H13.5V9.5c0-.8.23-1.34 1.38-1.34h1.47V5.73c-.25-.03-1.11-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.61v2.02H8.4V14h2.35v7h2.75Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell text-slate-100">
      <div className="ambient-grid" />
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050814]/75 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="brand-mark" aria-label="Yuva Bhatta home">
            <span>YB</span>
            <div>
              <strong>Yuva Bhatta</strong>
              <small>Developer Portfolio</small>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_23.5rem] lg:gap-14">
          <div className="space-y-7">
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
              <a href="https://cloud.yrbhatta.com/s/4QqPcSm4Kbc4xf3" target="_blank" rel="noreferrer" className="button-primary">
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

          <aside className="profile-card w-full max-w-[23.5rem] justify-self-center lg:justify-self-end">
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
      </section>

      <section id="about" className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="About"
            title="A software engineer with data depth, infrastructure curiosity, and creative range."
          />
          <div className="glass-panel space-y-5 p-6 text-base leading-relaxed text-slate-300 md:p-7">
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
      </section>

      <section id="projects" className="section-wrap">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Systems, experiments, and platforms that reflect how I build."
          copy="These are high-level project areas rather than fake repository links. Public links can be added as projects are published."
        />
        <div className="project-grid mt-10">
          {projectCards.map((project) => (
            <article key={project.title} className="project-card">
              <p className="section-kicker">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="chip-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="technical-focus" className="section-wrap">
        <SectionHeader
          eyebrow="Technical Focus"
          title="Focused on practical systems that need to run, scale, integrate, and improve."
        />
        <div className="focus-grid mt-10">
          {focusCards.map((item, index) => (
            <article key={item.title} className="focus-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="glass-panel p-6 md:p-8">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Languages, frameworks, platforms, and tools I work with."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="stack-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-wrap">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass-panel p-6 md:p-8">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title mt-4 max-w-xl">
              Production software delivery with a backend-first foundation.
            </h2>
          </div>
          <div className="timeline-panel">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p className="section-kicker">2022 to Present</p>
                <h3>Software Developer, Paychex</h3>
                <div className="mt-5 space-y-4 text-slate-300">
                  {experiencePoints.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>
            </div>
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
            <article key={item.degree} className="education-card">
              <p className="section-kicker">{item.location}</p>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="github" className="section-wrap">
        <SectionHeader
          eyebrow="GitHub Activity"
          title="A developer profile layer built around public activity and technical presence."
          copy="External analytics are embedded as progressive enhancements. The layout remains intact if a provider is temporarily unavailable."
        />
        <div className="github-grid mt-10">
          {githubCards.map((card) => (
            <article key={card.title} className="github-card">
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

      <section id="contact" className="section-wrap pb-20">
        <div className="contact-panel">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="contact-title">Connect for engineering, automation, infrastructure, or data-focused conversations.</h2>
            <p>
              I am open to professional connections, meaningful technical
              conversations, and opportunities that align with backend systems,
              cloud infrastructure, AI automation, and full-stack engineering.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <span className="icon-badge">
                  <SocialIcon label={item.label} />
                </span>
                <div>
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="mailto:yuvarajbhatta@outlook.com" className="button-primary">
              yuvarajbhatta@outlook.com
            </a>
            <a href="mailto:yuvabhatta01@gmail.com" className="button-secondary">
              yuvabhatta01@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 text-sm text-slate-500 md:px-8">
        <div className="border-t border-white/10 pt-6">
          © 2026 Yuva Bhatta. Software Engineer -- portfolio and projects.
        </div>
      </footer>
    </main>
  );
}
