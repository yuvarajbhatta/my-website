import Image from "next/image";

const focusAreas = [
  {
    eyebrow: "Full-Stack Delivery",
    title: "Building across application layers, not just one part of the stack.",
    copy:
      "I work across backend systems, data flows, and delivery pipelines with experience spanning Java services, Oracle-backed systems, containerized workflows, and event-driven tooling.",
  },
  {
    eyebrow: "Professional Foundation",
    title: "Grounded in both software engineering and data science.",
    copy:
      "My academic background combines a bachelor's degree in computer science with a master's degree in data science, giving me both engineering discipline and analytical depth.",
  },
  {
    eyebrow: "Creative Edge",
    title: "Technical by profession, artistic by instinct.",
    copy:
      "Alongside software development, I stay closely connected to music and performance through singing, instruments, and dance.",
  },
];

const experiencePoints = [
  "Software Developer at Paychex since 2022, contributing as a full-stack engineer in a production environment.",
  "Works with technologies across backend development, databases, integration workflows, and delivery automation.",
  "Experience includes Java, Oracle, CI/CD pipelines, Docker, and Kafka within practical software delivery contexts.",
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

const skills = [
  "Java",
  "Oracle",
  "SQL",
  "REST APIs",
  "Docker",
  "Kafka",
  "Git",
  "CI/CD",
  "Full-Stack Development",
  "Data Science",
  "System Integration",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuva-raj-bhatta-/",
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
  {
    label: "Instagram",
    href: "https://www.instagram.com/yr.bhatta/",
    value: "@yr.bhatta",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@yuvaraj.bhatta1",
    value: "@yuvaraj.bhatta1",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/yuvaraj.bhatta1",
    value: "yuvaraj.bhatta1",
  },
];

function SocialIcon({ label }: { label: string }) {
  const className = "h-5 w-5 text-[var(--color-ivory)]";

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

export default function Home() {
  return (
    <main className="bg-[var(--color-ink)] text-[var(--color-ivory)]">
      <section className="hero-shell">
        <div className="hero-noise" />
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="text-base font-medium uppercase tracking-[0.32em] text-[var(--color-sand)] md:text-lg">
            Yuva Raj Bhatta
          </div>
          <nav className="hidden gap-8 text-sm text-white/72 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-end gap-12 px-6 pb-10 pt-8 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:pb-16">
          <div className="space-y-8">
            <p className="max-w-xl text-sm uppercase tracking-[0.28em] text-[var(--color-sand)]">
              Software developer, full-stack engineer, and technology-driven
              creative based in Fort Worth, Texas
            </p>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl leading-[0.96] tracking-[-0.05em] md:text-7xl lg:text-[6.5rem]">
                Engineer by profession, creator by passion.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                I am a full-stack software developer currently working at
                Paychex. With academic foundations in computer science and data
                science, I bring a practical engineering mindset to modern
                software systems while staying strongly connected to music,
                performance, and creative expression.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/Yuva_Raj_Bhatta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                View resume
              </a>
              <a href="#about" className="button-secondary">
                About me
              </a>
              <a href="#contact" className="button-secondary">
                Connect
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-glow" />
            <div className="headshot-media">
              <Image
                src="/yuva-headshot.PNG"
                alt="Portrait of Yuva Raj Bhatta"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="metric-card">
            <div className="text-4xl tracking-[-0.08em] text-white">2022</div>
            <div className="text-sm text-white/60">Started at Paychex</div>
          </div>
          <div className="metric-card">
            <div className="text-4xl tracking-[-0.08em] text-white">2</div>
            <div className="text-sm text-white/60">
              Completed degrees in computing disciplines
            </div>
          </div>
          <div className="metric-card">
            <div className="text-4xl tracking-[-0.08em] text-white">2</div>
            <div className="text-sm text-white/60">
              Languages spoken: English and Nepali
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div className="space-y-4">
          <p className="section-label">About</p>
          <h2 className="text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
            My path has been shaped by engineering discipline and creative
            curiosity.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-white/72">
          <p>
            I am originally from Nepal and now based in Fort Worth, Texas. I
            have built my path around technology, problem solving, and
            continuous growth. My work reflects a balance between structured
            engineering practice and genuine curiosity about how systems behave,
            scale, and evolve.
          </p>
          <p>
            Outside of software, music remains a meaningful part of my identity.
            I enjoy singing, playing instruments, and dancing, which brings a
            more human and expressive side to an otherwise highly technical
            career.
          </p>
        </div>
      </section>

      <section
        id="strengths"
        className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((item) => (
            <article key={item.title} className="feature-card">
              <p className="section-label">{item.eyebrow}</p>
              <h3 className="mt-6 text-3xl leading-tight tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/68">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10"
      >
        <div className="showcase-panel">
          <div className="showcase-copy">
            <p className="section-label">Experience</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-tight tracking-[-0.05em] text-white md:text-6xl">
              A technical career, without reducing the whole story to work
              alone.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-white/70">
              {experiencePoints.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <p>
                My career is an important part of the picture, but this site is
                meant to show the person behind the role as well: someone shaped
                by culture, movement, music, and a long-term interest in
                technology.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="feature-card min-h-0">
              <p className="section-label">Current role</p>
              <h3 className="mt-5 text-3xl leading-tight tracking-[-0.04em] text-white">
                Software Developer
              </h3>
              <p className="mt-3 text-base leading-7 text-white/68">
                Paychex
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--color-sand)]">
                2022 to Present
              </p>
            </div>
            <div className="feature-card min-h-0">
              <p className="section-label">Core stack</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/72"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="feature-card min-h-0">
            <p className="section-label">Education</p>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.degree} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-2xl leading-tight tracking-[-0.04em] text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-base text-white/68">{item.school}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[var(--color-sand)]">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="feature-card min-h-0">
            <p className="section-label">Personal side</p>
            <h2 className="mt-6 max-w-2xl text-4xl leading-tight tracking-[-0.05em] text-white">
              A personal website should feel like a person, not only a profile.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              This space brings together my professional experience, academic
              background, roots in Nepal, life in Texas, and creative interests
              into one place that can be shared across professional networks and
              social platforms.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/70">
              My goal is to make a strong first impression that remains polished
              while still feeling personal, grounded, and real.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-24 md:px-10"
      >
        <p className="section-label">Connect</p>
        <div className="flex flex-col gap-8 border-t border-white/12 pt-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Open to professional connections, opportunities, and meaningful
              conversations around technology.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              You can connect through the platforms below or reach out directly
              by email.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="metric-card transition hover:-translate-y-0.5 hover:border-white/24"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-badge">
                    <SocialIcon label={item.label} />
                  </span>
                  <p className="section-label">{item.label}</p>
                </div>
                <p className="mt-4 text-xl tracking-[-0.03em] text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-white/55">
                  Open {item.label}
                </p>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:yuvarajbhatta@outlook.com"
              className="button-primary"
            >
              yuvarajbhatta@outlook.com
            </a>
            <a
              href="mailto:yuvabhatta01@gmail.com"
              className="button-primary"
            >
              yuvabhatta01@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-10">
        <div className="footer-shell">
          <p className="text-sm text-white/55">
            © 2026 Yuva Raj Bhatta. All rights reserved.
          </p>
          <p className="text-sm text-white/45">
            Built with intention, shaped by technology and creativity.
          </p>
        </div>
      </footer>
    </main>
  );
}
