export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Creative", href: "#creative" },
  { label: "Contact", href: "#contact" },
] as const;

export const metrics = [
  { value: "2022", label: "Building production software at Paychex" },
  { value: "MS", label: "Data Science foundation" },
  { value: "Full Stack", label: "Backend, cloud, integrations, UI" },
] as const;

export type ProjectCategory =
  | "Infrastructure"
  | "Product System"
  | "Automation"
  | "Analytics"
  | "Identity";

export interface Project {
  title: string;
  eyebrow: ProjectCategory;
  copy: string;
  tags: string[];
  status: "Live" | "In Progress" | "Concept";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    eyebrow: "Infrastructure",
    title: "Self-hosted cloud infrastructure",
    copy: "A personal lab for cloud services, Linux systems, networking, deployment workflows, secure access, and long-running services.",
    tags: ["Linux", "Docker", "Cloudflare", "Self Hosting"],
    status: "In Progress",
    featured: true,
  },
  {
    eyebrow: "Product System",
    title: "Family tree and lineage platform",
    copy: "A structured platform concept for preserving family history, relationships, cultural context, and lineage data with durable digital records.",
    tags: ["Full Stack", "Data Modeling", "UX"],
    status: "Concept",
  },
  {
    eyebrow: "Automation",
    title: "AI automation experiments",
    copy: "Explorations around AI-assisted workflows, developer productivity, task automation, and useful agents for repetitive technical work.",
    tags: ["AI", "Python", "Developer Tooling"],
    status: "In Progress",
  },
  {
    eyebrow: "Analytics",
    title: "Data science and analytics work",
    copy: "Applied data analysis, modeling, and reporting work shaped by a graduate data science background and practical engineering delivery.",
    tags: ["Data Science", "SQL", "Python"],
    status: "In Progress",
  },
  {
    eyebrow: "Identity",
    title: "Personal website and digital identity system",
    copy: "A modern developer portfolio designed to connect professional credibility, technical focus, creative identity, and public presence.",
    tags: ["Next.js", "TypeScript", "Design Systems"],
    status: "Live",
    liveUrl: "https://yrbhatta.com",
    featured: true,
  },
];

export const focusCards = [
  {
    title: "Backend Systems",
    copy: "Production-oriented services, APIs, database-backed workflows, integration boundaries, and maintainable business logic.",
  },
  {
    title: "AI & Automation",
    copy: "Practical automation experiments that combine AI tools, scripts, workflows, and developer productivity patterns.",
  },
  {
    title: "Cloud & DevOps",
    copy: "Cloud infrastructure, self-hosted environments, deployment pipelines, containers, DNS, and operational discipline.",
  },
  {
    title: "Data Science",
    copy: "Analytical thinking, structured data work, modeling foundations, and the ability to connect engineering decisions to data.",
  },
  {
    title: "Full Stack Development",
    copy: "End-to-end feature delivery across backend, frontend, databases, APIs, and the user-facing parts of a system.",
  },
  {
    title: "Infrastructure Security",
    copy: "Secure access, network-aware architecture, responsible configuration, and pragmatic protection for systems that stay online.",
  },
] as const;

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Services, APIs, and business logic that hold up in production.",
    skills: ["Java", "Spring Boot", "REST APIs", "Kafka"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Interfaces built on the same systems thinking as the backend.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "data",
    title: "Databases & Data Science",
    description: "Structured storage plus the analytical layer on top of it.",
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQL", "Python"],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description: "Deployment, delivery, and the systems that keep things running.",
    skills: ["Docker", "Linux", "Cloudflare", "CI/CD", "Git", "GitHub"],
  },
];

export const experience = [
  {
    role: "Software Developer, Paychex",
    period: "2022 to Present",
    points: [
      "Contributes to production software delivery as a Software Developer at Paychex.",
      "Works across backend systems, database workflows, integrations, and automation.",
      "Brings a full-stack mindset to engineering problems that require reliability, clarity, and practical execution.",
    ],
  },
] as const;

export const education = [
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
] as const;

export const journey = [
  {
    year: "Origin",
    title: "Growing up in Nepal",
    copy: "A foundation shaped by curiosity, resourcefulness, and a strong sense of family and culture.",
  },
  {
    year: "Education",
    title: "Computer science, then data science",
    copy: "A BS in Computer Science in Oklahoma followed by an MS in Data Science, building an analytical layer on top of an engineering foundation.",
  },
  {
    year: "Now",
    title: "Building software in Texas",
    copy: "Living and working in Texas as a software developer, contributing to production systems while staying rooted in where I came from.",
  },
] as const;

export const githubCards = [
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
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuva-raj-bhatta-900ab923a",
    value: "yuva-raj-bhatta-900ab923a",
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
] as const;

export const emails = [
  "contact@yrbhatta.com",
  // "yuvabhatta01@gmail.com",
] as const;

export const documentsUrl = "https://cloud.yrbhatta.com/s/4QqPcSm4Kbc4xf3";

export const creativeInterests = [
  {
    title: "Music & Singing",
    copy: "A creative outlet alongside engineering work, drawing on Nepalese musical roots and life in the United States.",
  },
  {
    title: "Instruments & Performance",
    copy: "Time spent with instruments and performance as a way to stay creative outside of software.",
  },
  {
    title: "Dance & Cultural Expression",
    copy: "Dance and cultural practice connect back to family and community roots in Nepal.",
  },
  {
    title: "Creative Technology",
    copy: "Where engineering and creative interests meet: this website, personal tools, and small experiments.",
  },
] as const;
