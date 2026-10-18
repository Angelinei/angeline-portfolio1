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
  | "writing"
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
  /** Section heading, shown when it changes from the previous entry. */
  group?: Localized;
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
  /** Entry list, used by "Les Archives Studio" and "Le Cimetière". */
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
    marquee: 'From "watch later" to "I made this"',
    tags: ["AI", "EdTech", "Product design", "Next.js"],
    year: "2026",
    visual: "skill",
    tint: "#FFF7F7",
    marqueeColor: "#F86058",
    ink: "#C2313C",
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
    // Taken from the former WordPress portfolio page (angelinepoitout.com/studio/).
    archive: [
      {
        group: { EN: "MadshipAI", FR: "MadshipAI" },
        title: "Substack",
        description: {
          EN: "Rapid product development, AI agents and the fast-moving EdTech landscape: an experiment in innovation, 12 micro products in 12 months, followed live.",
          FR: "Développement produit rapide, agents IA et un paysage EdTech en mouvement : une expérience d'innovation, 12 micro-produits en 12 mois, suivie en direct.",
        },
        href: "https://easywebie.substack.com/",
        tags: ["AI agents", "EdTech"],
      },
      {
        group: { EN: "MadshipAI", FR: "MadshipAI" },
        title: "LinkedIn",
        description: {
          EN: "Building AI agents for EdTechs: 12 micro agents in 12 months, 7+ partnerships signed in France and internationally. Results after daily posting and reposting.",
          FR: "Construire des agents IA pour les EdTechs : 12 micro-agents en 12 mois, plus de 7 partenariats signés en France et à l'international. Résultats après une publication quotidienne.",
        },
        href: "https://www.linkedin.com/in/angelinepoitoutpro/",
        tags: ["AI agents", "Personal branding"],
      },
      {
        group: { EN: "MadshipAI", FR: "MadshipAI" },
        title: "Medium",
        href: "https://medium.com/@angelinepfreelance",
        tags: ["Writing"],
      },
      {
        group: { EN: "MadshipAI", FR: "MadshipAI" },
        title: "Instagram",
        year: "2025",
        description: {
          EN: "Real music with clips powered by editing (CapCut) and AI. Launched on 29 April 2025.",
          FR: "De la vraie musique, avec des clips montés sur CapCut et avec l'IA. Lancé le 29 avril 2025.",
        },
        href: "https://www.instagram.com/angeline.poitout.music/",
        tags: ["Music", "AI"],
      },
      {
        group: { EN: "DigiEduHack 2024", FR: "DigiEduHack 2024" },
        title: "Human + AI in Education — Learnflow",
        year: "2024",
        description: {
          EN: "5th edition of DigiEduHack (8–17 November 2024), supporting people-driven digital transformation in education. Solution submitted: Learnflow.",
          FR: "5e édition de DigiEduHack (8–17 novembre 2024), pour une transformation numérique de l'éducation portée par les personnes. Solution soumise : Learnflow.",
        },
        tags: ["Hackathon", "AI", "Education"],
      },
      {
        group: { EN: "DigiEduHack 2024", FR: "DigiEduHack 2024" },
        title: "Building Open Source Data-Driven Content for Tomorrow's Educators",
        year: "2024",
        description: {
          EN: "In a team of two: 8 units built from A to Z in 48 hours. Our curriculum was selected along with another team's.",
          FR: "En binôme : 8 unités construites de A à Z en 48 heures. Notre curriculum a été sélectionné avec celui d'une autre équipe.",
        },
        tags: ["Hackathon", "Instructional design"],
      },
      {
        group: { EN: "AIAI — When AI met EdTechs", FR: "AIAI — Quand l'IA a rencontré les EdTechs" },
        title: "EAA",
        href: "https://chimerical-eclair-21431a.netlify.app/",
        tags: ["AI", "EdTech"],
      },
      {
        group: { EN: "AIAI — When AI met EdTechs", FR: "AIAI — Quand l'IA a rencontré les EdTechs" },
        title: "X",
        description: {
          EN: "Learning Python to build micro-SaaS for my industry, and a weekly digest of tips for EdTechs.",
          FR: "Apprendre Python pour créer des micro-SaaS pour mon secteur, et un digest hebdomadaire de conseils pour les EdTechs.",
        },
        href: "https://x.com/AngelinePoitout",
        tags: ["Python", "EdTech"],
      },
      {
        group: { EN: "AIAI — When AI met EdTechs", FR: "AIAI — Quand l'IA a rencontré les EdTechs" },
        title: "OpenAI — Thought Companion",
        description: {
          EN: "A custom GPT: a partner for reflective thinking and pattern discovery.",
          FR: "Un GPT personnalisé : un partenaire de réflexion et de découverte de schémas.",
        },
        href: "https://chatgpt.com/g/g-iZI9Ti527-thought-companion",
        tags: ["Custom GPT"],
      },
      {
        group: { EN: "AIAI — When AI met EdTechs", FR: "AIAI — Quand l'IA a rencontré les EdTechs" },
        title: "Hackathon AWS — CourseKey",
        description: {
          EN: "CourseKey: from a course to key summaries, built on AWS PartyRock.",
          FR: "CourseKey : d'un cours à ses résumés clés, réalisé sur AWS PartyRock.",
        },
        href: "https://partyrock.aws/u/angelinepoitout/iWDhDpYvN/CourseKey-Course-to-Keys-Summaries",
        tags: ["Hackathon", "AWS", "AI"],
      },
      {
        group: { EN: "AIAI — When AI met EdTechs", FR: "AIAI — Quand l'IA a rencontré les EdTechs" },
        title: "AI Financial Assistant",
        href: "https://henrrifinancialassistant-2150.chipp.ai",
        tags: ["AI assistant"],
      },
      {
        group: { EN: "AIAI — When AI met EdTechs", FR: "AIAI — Quand l'IA a rencontré les EdTechs" },
        title: "GitHub",
        github: GITHUB_PROFILE,
        tags: ["Code"],
      },
      {
        group: { EN: "100 Days of Webmarketing", FR: "100 Days of Webmarketing" },
        title: "100 Days of Webmarketing",
        description: {
          EN: "A free challenge inspired by 100DaysOfCode: master web marketing in 100 days, without any investment. The whole challenge, from the editorial line to deployment, lives in my Drive.",
          FR: "Un challenge gratuit inspiré de 100DaysOfCode : maîtriser le webmarketing en 100 jours, sans aucun investissement. Tout le challenge, de la ligne éditoriale au déploiement, tient dans mon Drive.",
        },
        href: "https://www.youtube.com/watch?v=gUTZ-V7_28E",
        tags: ["Web marketing", "Challenge"],
      },
      {
        group: { EN: "EdTech part 1 — Once upon a time", FR: "EdTech, partie 1 — Il était une fois" },
        title: "GAN",
        year: "2022–2024",
        description: {
          EN: "Supporting French learners in acquiring key skills in digital marketing, personal development and analytics (90% on site): face-to-face and remote conferences, Google hotline, YouTube lives (moderation) with StreamYard.",
          FR: "Accompagnement du public français dans l'acquisition de compétences clés en marketing digital, développement personnel et analytics (90 % en présentiel) : conférences en présentiel et à distance, hotline Google, lives YouTube (modération) avec StreamYard.",
        },
        tags: ["Training", "Digital marketing"],
      },
      {
        group: { EN: "EdTech part 1 — Once upon a time", FR: "EdTech, partie 1 — Il était une fois" },
        title: "Studi",
        year: "2022–",
        description: {
          EN: "100% remote: exam jury, instructional design, student forum answers and Studi lives.",
          FR: "100 % à distance : jury d'examen, ingénierie pédagogique, réponses sur le forum étudiant et lives Studi.",
        },
        tags: ["Instructional design", "Exam jury"],
      },
      {
        group: { EN: "EdTech part 1 — Once upon a time", FR: "EdTech, partie 1 — Il était une fois" },
        title: "Senza",
        year: "2022–",
        description: {
          EN: "Web marketing consultant trainer in 1:1 sessions, 100% remote. Two personalised programmes for project leaders (70+ people supported, 4.8/5 internal rating): social media and community management (12 h individual video training + 30 h e-learning), and web marketing and community management (10 h individual training + 30 h e-learning).",
          FR: "Consultante formatrice webmarketing en séances individuelles, 100 % à distance. Deux parcours personnalisés pour porteurs de projet (plus de 70 personnes accompagnées, 4,8/5 en note interne) : réseaux sociaux et community management (12 h de formation vidéo individuelle + 30 h d'e-learning), et webmarketing et community management (10 h de formation individuelle + 30 h d'e-learning).",
        },
        tags: ["Training", "Web marketing"],
      },
      {
        group: { EN: "EdTech part 1 — Once upon a time", FR: "EdTech, partie 1 — Il était une fois" },
        title: "Iscod / Visiplus",
        year: "2022–",
        description: {
          EN: "Learning coach for exams, 100% remote, across 8 programmes (Executive Bachelor, Executive Mastère, MBA in marketing and digital communication): 20+ learners supported, 100% admission rate.",
          FR: "Learning coach examens, 100 % à distance, sur 8 parcours (Executive Bachelor, Executive Mastère, MBA en marketing et communication digitale) : plus de 20 apprenants accompagnés, 100 % de réussite.",
        },
        tags: ["Learning coach"],
      },
      {
        group: { EN: "EdTech part 1 — Once upon a time", FR: "EdTech, partie 1 — Il était une fois" },
        title: "Rocket School",
        description: {
          EN: "Consulting on the school's launch in Montpellier.",
          FR: "Conseil pour l'implantation de l'école à Montpellier.",
        },
        tags: ["Consulting"],
      },
      {
        group: { EN: "EdTech part 1 — Once upon a time", FR: "EdTech, partie 1 — Il était une fois" },
        title: "OPC",
        description: {
          EN: "Digital Project Manager and Community Manager paths.",
          FR: "Parcours Chef de projet digital et Community manager.",
        },
        tags: ["Training"],
      },
      {
        group: { EN: "EdTech part 1 — Once upon a time", FR: "EdTech, partie 1 — Il était une fois" },
        title: "17 resources for entrepreneurs",
        description: {
          EN: "17 free web marketing resources, on Notion.",
          FR: "17 ressources webmarketing gratuites, sur Notion.",
        },
        href: "https://www.notion.so/angelinepoitout/2bd5326c622544a3998de7d3664fb18c?v=535dbd14e85f4538ac58ef6ff0941840",
        tags: ["Notion", "Web marketing"],
      },
      {
        group: { EN: "EdTech parts 2 & 3 — An EdTech love story", FR: "EdTech, parties 2 et 3 — Une histoire d'amour EdTech" },
        title: "Makesense Sprint",
        description: {
          EN: "Sprint coordinator with my teammate Anaïs: supporting high-impact entrepreneurial project leaders from concept to prototype, with the tools of the Makesense incubator.",
          FR: "Sprint coordinator avec ma coéquipière Anaïs : accompagner des porteurs de projets entrepreneuriaux à fort impact, de la conception au prototypage, avec les outils de l'incubateur Makesense.",
        },
        tags: ["Entrepreneurship", "Coaching"],
      },
      {
        group: { EN: "EdTech parts 2 & 3 — An EdTech love story", FR: "EdTech, parties 2 et 3 — Une histoire d'amour EdTech" },
        title: "Business Africa",
      },
      {
        group: { EN: "EdTech parts 2 & 3 — An EdTech love story", FR: "EdTech, parties 2 et 3 — Une histoire d'amour EdTech" },
        title: "E-book — Hack Ton Stage / Alternance",
        description: {
          EN: "Author of the e-book, and a webinar for EFREI Paris students. The organiser's feedback: “You succeeded in boosting our young people!”",
          FR: "Autrice de l'e-book, et un webinaire pour les étudiants de l'EFREI Paris. Retour de l'organisateur : « Vous avez réussi à booster nos jeunes ! »",
        },
        href: "https://www.amazon.fr/Hack-Ton-Stage-Alternance-d%C3%A9crocher-ebook/dp/B0889Y13TQ",
        tags: ["Writing", "Webinar"],
      },
      {
        group: { EN: "EdTech parts 2 & 3 — An EdTech love story", FR: "EdTech, parties 2 et 3 — Une histoire d'amour EdTech" },
        title: "Blacknetwork",
        description: {
          EN: "The power of a community inspired by excellence: visibility for businesses, an ambitious network and connections with investors.",
          FR: "La force d'une communauté inspirée par l'excellence : de la visibilité pour les entreprises, un réseau ambitieux et des liens avec des investisseurs.",
        },
        tags: ["Community"],
      },
      {
        group: { EN: "EdTech parts 2 & 3 — An EdTech love story", FR: "EdTech, parties 2 et 3 — Une histoire d'amour EdTech" },
        title: "Hack La Crise",
        year: "2020",
        description: {
          EN: "A 48-hour #techforgood hackathon against COVID-19: 10 solutions prototyped, 4 mentors. Creation, admin and social media management during the event.",
          FR: "Un hackathon #techforgood de 48 heures contre le COVID-19 : 10 solutions prototypées, 4 mentors. Création, administration et gestion des réseaux sociaux pendant l'événement.",
        },
        href: "https://www.20minutes.fr/societe/2746491-20200323-coronavirus-neuf-projets-contre-covid-19-48-heures-pari-fou-reussi-hack-crise",
        tags: ["Hackathon", "Social media"],
      },
      {
        group: { EN: "EdTech part 4 — Occasional engagements", FR: "EdTech, partie 4 — Interventions ponctuelles" },
        title: "Digitaforma",
        description: {
          EN: "Web marketing and community manager path, 1:1, with at most 3 participants per course.",
          FR: "Parcours webmarketing et community manager, en individuel, 3 participants maximum par formation.",
        },
        tags: ["Training"],
      },
      {
        group: { EN: "EdTech part 4 — Occasional engagements", FR: "EdTech, partie 4 — Interventions ponctuelles" },
        title: "IFOCOP",
      },
      {
        group: { EN: "EdTech part 4 — Occasional engagements", FR: "EdTech, partie 4 — Interventions ponctuelles" },
        title: "Formatech",
        description: {
          EN: "Instructional design: creating a training programme in web marketing, SEO and WordPress.",
          FR: "Ingénierie pédagogique : création d'un programme de formation en webmarketing, SEO et WordPress.",
        },
        tags: ["Instructional design"],
      },
      {
        group: { EN: "EdTech part 4 — Occasional engagements", FR: "EdTech, partie 4 — Interventions ponctuelles" },
        title: "Philiance",
        year: "2023",
        description: {
          EN: "Instructional design and teaching (2 replacement sessions in 2023), examiner, ads module.",
          FR: "Ingénierie pédagogique et enseignement (2 sessions de remplacement en 2023), examinatrice, module publicité.",
        },
        tags: ["Teaching", "Examiner"],
      },
      {
        group: { EN: "EdTech part 4 — Occasional engagements", FR: "EdTech, partie 4 — Interventions ponctuelles" },
        title: "Formawiin",
        description: {
          EN: "Created and hosted a webinar to sell the community manager course: 28 enrolments out of 47 participants.",
          FR: "Création et animation d'un webinaire pour vendre la formation community manager : 28 inscriptions sur 47 participants.",
        },
        href: "https://drive.google.com/file/d/1dLfVCu5174d3DbYmFWAvu1_-NCVCL3cq/view?usp=sharing",
        tags: ["Webinar"],
      },
      {
        group: { EN: "EdTech part 4 — Occasional engagements", FR: "EdTech, partie 4 — Interventions ponctuelles" },
        title: "CMA IDF",
      },
      {
        group: { EN: "Certifications — Continuous learning", FR: "Certifications — Formation continue" },
        title: "Bootcamp Codecademy",
        href: "https://www.codecademy.com/bootcamps/ai-1/certificates/666ee420a0828b00151c841f",
        tags: ["AI", "Certificate"],
      },
      {
        group: { EN: "Certifications — Continuous learning", FR: "Certifications — Formation continue" },
        title: "GCC Python",
        description: {
          EN: "Module 1: Crash Course on Python. Module 3: Introduction to Git and GitHub.",
          FR: "Module 1 : Crash Course on Python. Module 3 : Introduction to Git and GitHub.",
        },
        href: "https://coursera.org/share/de9467c77b2142383f271e790e33fed4",
        tags: ["Python", "Git"],
      },
      {
        group: { EN: "Certifications — Continuous learning", FR: "Certifications — Formation continue" },
        title: "Google",
        description: {
          EN: "Generative AI and Google Analytics.",
          FR: "IA générative et Google Analytics.",
        },
        tags: ["Generative AI", "Analytics"],
      },
      {
        group: { EN: "Certifications — Continuous learning", FR: "Certifications — Formation continue" },
        title: "OPC — Instructional engineering",
        description: {
          EN: "8 real-life projects to validate.",
          FR: "8 projets en situation réelle à valider.",
        },
        href: "https://drive.google.com/drive/folders/1Rn-TCDq7TL6hRE3Retp1XuUtotyW9hcM?usp=sharing",
        tags: ["Instructional design"],
      },
      {
        group: { EN: "Certifications — Continuous learning", FR: "Certifications — Formation continue" },
        title: "Lion",
        year: "2019",
        description: {
          EN: "Alumni, Savane Fall 2019 — Lion (Maria Schools).",
          FR: "Alumni, promotion Savane automne 2019 — Lion (Maria Schools).",
        },
        href: "https://medium.com/@angelinepoitout/hors-s%C3%A9rie-%C3%AAtre-%C3%A9l%C3%A8ve-chez-lion-une-exp%C3%A9rience-rrrenversante-8bac72156103",
        tags: ["Alumni"],
      },
      {
        group: { EN: "Certifications — Continuous learning", FR: "Certifications — Formation continue" },
        title: "Double Master",
      },
      {
        group: { EN: "Before EdTech", FR: "Avant les EdTechs" },
        title: "XAnge",
        href: "https://medium.com/@angelinepoitout/xange-loves-aussi-les-alternantes-who-rock-the-code-s-1d22af3e3e0c",
      },
      {
        group: { EN: "Before EdTech", FR: "Avant les EdTechs" },
        title: "Ministry of the Armed Forces",
        href: "https://drive.google.com/drive/folders/1LlQA05dFaeHTOear_lEH_-cAOCW2zfqN?usp=drive_link",
      },
      {
        group: { EN: "Before EdTech", FR: "Avant les EdTechs" },
        title: "Center Hubstart",
        description: {
          EN: "Website animation, Facebook and Twitter creation and management, a monthly newsletter for incubatees and founders, a founders directory, and consulting and communication missions for incubatees.",
          FR: "Animation du site web, création et animation Facebook et Twitter, newsletter mensuelle pour les incubés et fondateurs, annuaire des fondateurs, missions de conseil et de communication pour les incubés.",
        },
        tags: ["Communication", "Incubator"],
      },
      {
        group: { EN: "Before EdTech", FR: "Avant les EdTechs" },
        title: "EC Bristol",
        description: {
          EN: "Language stay, work and business option.",
          FR: "Séjour linguistique, option travail et business.",
        },
      },
      {
        group: { EN: "Before EdTech", FR: "Avant les EdTechs" },
        title: "Tourism BTS — GuideBook",
        description: {
          EN: "Designed and led the guided tour “A stroll through the Marais”.",
          FR: "Conception et animation de la visite guidée « Une balade dans le Marais ».",
        },
        href: "https://drive.google.com/drive/folders/1iZTB4KQDrPPLtNtTD0psqlsqHH6yjY49?usp=sharing",
        tags: ["Tourism"],
      },
      {
        group: { EN: "Hobbies", FR: "Loisirs" },
        title: "Contemporary dance",
        year: "2024",
        description: {
          EN: "Took part in a promotional video for Mimi's contemporary class, which gave me back the taste for dance (14 years of modern jazz).",
          FR: "Participation à une vidéo promotionnelle pour le cours de contemporain de Mimi, qui m'a redonné le goût de la danse (14 ans de modern jazz).",
        },
        tags: ["Dance"],
      },
      {
        group: { EN: "Hobbies", FR: "Loisirs" },
        title: "Gaming",
        description: {
          EN: "Clash of Clans (The Big Boss clan, chief associate) and Squad Busters on Twitch.",
          FR: "Clash of Clans (clan The Big Boss, chef adjointe) et Squad Busters sur Twitch.",
        },
        tags: ["Gaming"],
      },
      {
        group: { EN: "Hobbies", FR: "Loisirs" },
        title: "Music",
        description: {
          EN: "Independent art.",
          FR: "Art indépendant.",
        },
        href: "https://soundcloud.com/user-398626536",
        tags: ["Music"],
      },
      {
        group: { EN: "Hobbies", FR: "Loisirs" },
        title: "Acting",
        description: {
          EN: "Extra in the web series “Dans un autre monde”.",
          FR: "Figuration dans la websérie « Dans un autre monde ».",
        },
        tags: ["Acting"],
      },
    ],
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
    slug: "cimetiere",
    number: "04",
    title: "Le Cimetière",
    eyebrow: { EN: "CEMETERY · DISCONTINUED PROJECTS", FR: "CIMETIÈRE · PROJETS ARRÊTÉS" },
    summary: {
      EN: "Projects, channels and communities I have stopped, kept here as part of the path.",
      FR: "Les projets, chaînes et communautés que j'ai arrêtés, gardés ici comme une part du chemin.",
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
    // Taken from the "Cimetery" section of the former WordPress portfolio page, plus the Meetup groups.
    archive: [
      {
        title: "TikTok",
        description: {
          EN: "The reality is: I really don't like having no control over the content I'm exposed to…",
          FR: "La réalité : je n'aime vraiment pas n'avoir aucun contrôle sur les contenus auxquels je suis exposée…",
        },
      },
      {
        title: "Drive Freelance",
        description: {
          EN: "My first website and idea. Looks familiar on certain points, huh?",
          FR: "Mon premier site et ma première idée. Ça vous rappelle quelque chose sur certains points, non ?",
        },
      },
      {
        title: "YouTube music channel",
        href: "https://www.youtube.com/@angelinem4172",
        tags: ["Music"],
      },
      {
        title: "My first ugly website",
        year: "2016–2017",
        href: "https://angelinepoitout.wixsite.com/monsite",
        tags: ["Web"],
      },
      {
        title: "GalaTech de Co",
        href: "https://drive.google.com/drive/folders/1L2IDfjIErZnE_u70-O6UVImDQ5aY2KqJ?usp=sharing",
      },
      {
        title: "WebNewbies",
        year: "–2024",
        description: {
          EN: "Meetup group on web marketing, business and website creation (2,639 members): monthly face-to-face conferences until April 2024, democratising web marketing and AI.",
          FR: "Groupe Meetup webmarketing, business et création de site (2 639 membres) : une conférence en présentiel par mois jusqu'en avril 2024, pour démocratiser le webmarketing et l'IA.",
        },
        tags: ["Meetup", "Community"],
      },
      {
        title: "Padawebies",
        year: "–2024",
        description: {
          EN: "Meetup group on AI and Web3 (1,452 members): monthly face-to-face conferences until April 2024.",
          FR: "Groupe Meetup IA et Web3 (1 452 membres) : une conférence en présentiel par mois jusqu'en avril 2024.",
        },
        tags: ["Meetup", "Community"],
      },
    ],
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
