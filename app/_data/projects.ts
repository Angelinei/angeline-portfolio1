/**
 * Single source of truth for the projects shown in the gallery (/) and on
 * their detail pages (/studio/<slug>).
 *
 * Rule: only documented facts live here. Anything unknown stays `undefined`
 * (or an empty array): in development the detail page shows a "to complete"
 * placeholder for it, in production the section is simply hidden.
 *
 * Media: drop files in public/projects/<slug>/
 *   - cover.(jpg|png|webp|avif|mp4|webm) → gallery + detail cover (square)
 *   - any other image/video               → "Visuals" section, sorted by name
 */

export type Lang = "EN" | "FR";
export type Localized = Record<Lang, string>;
export type Visual =
  | "about"
  | "skill"
  | "portfolio"
  | "archive"
  | "cemetery"
  | "lab"
  | "path"
  | "contact";

/** Rich text: paragraphs and/or a bullet list. */
export type Rich = { paragraphs?: Localized[]; list?: Localized[] };

export type ProjectLink = {
  label: Localized;
  href: string;
  kind: "site" | "github" | "behance" | "other";
};

export type ArchiveEntry = {
  title: string;
  year?: string;
  description?: Localized;
  /** Live project / case study URL. */
  href?: string;
  /** GitHub repository URL. */
  github?: string;
  tags?: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle?: Localized;
  /** Category line shown above the title (without the number). */
  eyebrow: Localized;
  /** Short text used in the gallery and as SEO description. */
  summary: Localized;
  /** Giant background line. */
  marquee: string;
  tags: string[];
  year?: string;
  role?: Localized;
  visual: Visual;
  tint: string;
  marqueeColor: string;
  ink: string;

  intro?: Rich;
  context?: Rich;
  intention?: Rich;
  process?: Rich;
  /** Optional alt texts / captions for files of public/projects/<slug>/. */
  captions?: Record<string, { alt: Localized; caption?: Localized }>;
  links: ProjectLink[];
  /** Only for "Les Archives Studio". */
  archive?: ArchiveEntry[];
};

const GITHUB_PROFILE = "https://github.com/Angelinei";
const BEHANCE_PROFILE = "https://www.behance.net/angelinepoitout";

export const projects: Project[] = [
  {
    slug: "skillxtube",
    number: "01",
    title: "Skillxtube",
    subtitle: { EN: "Learn differently.", FR: "Apprendre autrement." },
    eyebrow: {
      EN: "DIGITAL PRODUCT · EDTECH · 2026",
      FR: "PRODUIT DIGITAL · EDTECH · 2026",
    },
    summary: {
      EN: "An AI-powered learning experience that transforms online videos into structured learning paths, notes and exercises.",
      FR: "Un produit EdTech qui explore comment l'IA peut transformer des vidéos en parcours d'apprentissage actifs.",
    },
    marquee: "Turn content into learning. Learn differently.",
    tags: ["AI", "EdTech", "Product design", "Next.js"],
    year: "2026",
    visual: "skill",
    tint: "#DCD3FF",
    marqueeColor: "#CFC3FB",
    ink: "#5940A5",
    intro: {
      paragraphs: [
        {
          EN: "An AI-powered learning platform designed to turn online videos into structured, engaging learning experiences.",
          FR: "Une plateforme d'apprentissage propulsée par l'IA, conçue pour transformer des vidéos en ligne en expériences d'apprentissage structurées et engageantes.",
        },
        {
          EN: "Watch. Understand. Practice. Keep going.",
          FR: "Regarder. Comprendre. Pratiquer. Continuer.",
        },
      ],
    },
    context: undefined,
    intention: {
      list: [
        {
          EN: "Transform video content into learning resources",
          FR: "Transformer des contenus vidéo en ressources d'apprentissage",
        },
        {
          EN: "Build structured learning paths with summaries and exercises",
          FR: "Construire des parcours structurés avec résumés et exercices",
        },
        {
          EN: "Make learning more engaging through gamification",
          FR: "Rendre l'apprentissage plus engageant grâce à la gamification",
        },
      ],
    },
    process: undefined,
    links: [
      {
        label: { EN: "Visit skillxtube.com", FR: "Visiter skillxtube.com" },
        href: "https://skillxtube.com/",
        kind: "site",
      },
    ],
  },
  {
    slug: "portfolio",
    number: "02",
    title: "The Portfolio",
    subtitle: { EN: "A studio built with AI.", FR: "Un studio construit avec l'IA." },
    eyebrow: {
      EN: "AI · CREATIVE DEVELOPMENT · 2026",
      FR: "IA · DÉVELOPPEMENT CRÉATIF · 2026",
    },
    summary: {
      EN: "A personal digital studio exploring how generative AI can accelerate research, design decisions, development and creative direction.",
      FR: "Un laboratoire vivant où direction artistique, IA générative et développement web se rencontrent.",
    },
    marquee: "A studio built with AI. A studio in the making.",
    tags: ["Generative AI", "Web design", "Vercel", "GitHub"],
    year: "2026",
    visual: "portfolio",
    tint: "#C9E7FF",
    marqueeColor: "#B3DCFB",
    ink: "#164E87",
    intro: {
      paragraphs: [
        {
          EN: "A personal digital studio exploring how generative AI can accelerate research, design decisions, development and creative direction.",
          FR: "Un laboratoire vivant où direction artistique, IA générative et développement web se rencontrent.",
        },
      ],
    },
    context: undefined,
    intention: undefined,
    process: {
      list: [
        {
          EN: "Built with Next.js, React, TypeScript and Tailwind CSS",
          FR: "Développé avec Next.js, React, TypeScript et Tailwind CSS",
        },
        {
          EN: "Project gallery composition and interactions inspired by mildsugardesign.jp/cases, adapted to my own visual identity",
          FR: "Composition et interactions de la galerie inspirées de mildsugardesign.jp/cases, adaptées à mon identité visuelle",
        },
        {
          EN: "Source code versioned on GitHub, deployed on Vercel",
          FR: "Code source versionné sur GitHub, déployé sur Vercel",
        },
      ],
    },
    links: [
      {
        label: { EN: "angelinepoitout.com", FR: "angelinepoitout.com" },
        href: "https://angelinepoitout.com/",
        kind: "site",
      },
      {
        label: { EN: "Source code on GitHub", FR: "Code source sur GitHub" },
        href: "https://github.com/Angelinei/angeline-portfolio1",
        kind: "github",
      },
    ],
  },
  {
    slug: "archives",
    number: "03",
    title: "Les Archives Studio",
    eyebrow: { EN: "ARCHIVE · PAST WORK", FR: "ARCHIVES · RÉALISATIONS PASSÉES" },
    summary: {
      EN: "An archive of my past work, with links to the projects and to GitHub when available.",
      FR: "L'archive de mes réalisations passées, avec liens vers les projets et GitHub lorsque disponibles.",
    },
    marquee: "Les Archives Studio — past work.",
    tags: ["Archive", "GitHub"],
    visual: "archive",
    tint: "#ECE6D8",
    marqueeColor: "#E0D7C2",
    ink: "#6B5A3A",
    intro: {
      paragraphs: [
        {
          EN: "An archive of my past work, with links to the projects and to GitHub when available.",
          FR: "L'archive de mes réalisations passées, avec liens vers les projets et GitHub lorsque disponibles.",
        },
      ],
    },
    context: undefined,
    intention: undefined,
    process: undefined,
    // Add one entry per past project. Leave href / github empty when unknown.
    archive: [],
    links: [
      {
        label: { EN: "GitHub repositories", FR: "Dépôts GitHub" },
        href: GITHUB_PROFILE,
        kind: "github",
      },
      {
        label: { EN: "Behance portfolio", FR: "Portfolio Behance" },
        href: BEHANCE_PROFILE,
        kind: "behance",
      },
    ],
  },
  {
    // Concept not documented yet: every editorial field is left empty on purpose.
    slug: "cimetiere",
    number: "04",
    title: "Le Cimetière",
    eyebrow: { EN: "COMING SOON", FR: "À VENIR" },
    summary: {
      EN: "This project is being documented. Its page will be completed soon.",
      FR: "Ce projet est en cours de documentation. Sa page sera bientôt complétée.",
    },
    marquee: "Le Cimetière",
    tags: [],
    visual: "cemetery",
    tint: "#E4E3DF",
    marqueeColor: "#D6D5D0",
    ink: "#4A4945",
    intro: undefined,
    context: undefined,
    intention: undefined,
    process: undefined,
    links: [],
  },
  {
    slug: "ai-experiments",
    number: "05",
    title: "AI Learning Lab",
    subtitle: {
      EN: "From experimentation to application.",
      FR: "De l'expérimentation à l'application.",
    },
    eyebrow: { EN: "AI · LEARNING DESIGN · 2026", FR: "IA · INGÉNIERIE PÉDAGOGIQUE · 2026" },
    summary: {
      EN: "A growing collection of experiments around prompting, AI-assisted workflows, learning experiences and practical adoption.",
      FR: "Des expérimentations autour du prompting, des workflows augmentés et de l'adoption concrète de l'IA.",
    },
    marquee: "From experimentation to application. Curiosity into capability.",
    tags: ["AI workflows", "Prompting", "Learning design"],
    year: "2026",
    visual: "lab",
    tint: "#FFE0C8",
    marqueeColor: "#FCD0AE",
    ink: "#974A20",
    intro: {
      paragraphs: [
        {
          EN: "An evolving collection of experiments, prototypes, and projects exploring Generative AI, AI-assisted development, automation, and digital learning.",
          FR: "Une collection évolutive d'expérimentations, de prototypes et de projets autour de l'IA générative, du développement assisté par IA, de l'automatisation et de l'apprentissage numérique.",
        },
      ],
    },
    context: undefined,
    intention: undefined,
    process: undefined,
    links: [
      {
        label: { EN: "GitHub repositories", FR: "Dépôts GitHub" },
        href: GITHUB_PROFILE,
        kind: "github",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectHref(slug: string) {
  return `/studio/${slug}`;
}
