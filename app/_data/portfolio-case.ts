/**
 * Case study shown on /studio/portfolio: everything designed around SkillxTube.
 * Single source: the "The Portfolio" content proposal. Nothing here is invented;
 * the facts that are still unknown are listed in `toFill` and shown as discreet
 * placeholders while SHOW_TO_FILL is true.
 *
 * Gallery files live in public/portfolio/. A file that is not there yet shows a
 * placeholder (or nothing, when SHOW_TO_FILL is false).
 */
import type { Localized } from "./projects";

/** Show the "to fill" placeholders (missing facts, links and images). */
export const SHOW_TO_FILL = true;

export const CONTACT_EMAIL = "hello@angelinepoitout.com";

export const hero = {
  kicker: { EN: "SkillxTube Design System", FR: "Design system SkillxTube" },
  tagline: {
    EN: "A brand, an app, a mascot, and a few side projects along the way.",
    FR: "Une marque, une app, une mascotte, et quelques projets parallèles en chemin.",
  },
  meta: [
    { label: { EN: "Role", FR: "Rôle" }, value: { EN: "Founder, Art Director, Designer", FR: "Fondatrice, directrice artistique, designer" } },
    { label: { EN: "Period", FR: "Période" }, value: { EN: "July to October 2026", FR: "Juillet à octobre 2026" } },
    { label: { EN: "Method", FR: "Méthode" }, value: { EN: "Made 100% with AI", FR: "Réalisé à 100 % avec l'IA" } },
    { label: { EN: "Type", FR: "Type" }, value: { EN: "Brand / Product / Character", FR: "Marque / Produit / Personnage" } },
  ],
};

export const overview: Localized[] = [
  {
    EN: "A personal digital studio exploring how generative AI can accelerate research, design decisions, development and creative direction.",
    FR: "Un studio digital personnel qui explore comment l'IA générative accélère la recherche, les décisions de design, le développement et la direction artistique.",
  },
  {
    EN: "Its first case is SkillxTube. I designed everything the product touches: the identity, the marketing site, the dashboard, the community, pricing, the demo paths and a cast of characters built for short-form video. No design software. I direct, I decide, the AI draws and codes.",
    FR: "Son premier cas est SkillxTube. J'ai conçu tout ce que le produit touche : l'identité, le site marketing, le dashboard, la communauté, les tarifs, les parcours de démo et une galerie de personnages pensée pour la vidéo courte. Aucun logiciel de design. Je dirige, je décide, l'IA dessine et code.",
  },
];

export const role: Localized[] = [
  { EN: "Founder and art director of SkillxTube", FR: "Fondatrice et directrice artistique de SkillxTube" },
  { EN: "Brand identity and design system", FR: "Identité de marque et design system" },
  {
    EN: "Product and UI design (landing, dashboard, gamification, community, pricing, forms)",
    FR: "Design produit et UI (landing, dashboard, gamification, communauté, tarifs, formulaires)",
  },
  { EN: "Character design and storytelling (Zip and the crew)", FR: "Character design et storytelling (Zip et sa bande)" },
  { EN: "Social content direction (TikTok / Shorts)", FR: "Direction des contenus sociaux (TikTok / Shorts)" },
  { EN: "Front-end integration in Next.js via Cursor", FR: "Intégration front-end en Next.js via Cursor" },
];

export type DesignItem = { label?: Localized; text: Localized };
export type DesignBlock = { title: Localized; lead: Localized; items?: DesignItem[]; closing?: Localized };

export const designed: DesignBlock[] = [
  {
    title: { EN: "Brand identity", FR: "Identité de marque" },
    lead: {
      EN: "A red badge with a white lightning bolt, five colours, two typefaces. Rules that got stricter with every screen until they were non-negotiable in every Cursor prompt.",
      FR: "Un badge rouge avec un éclair blanc, cinq couleurs, deux typographies. Des règles resserrées à chaque écran, jusqu'à devenir non négociables dans chaque prompt Cursor.",
    },
    items: [
      {
        label: { EN: "Palette", FR: "Palette" },
        text: {
          EN: "Red #FF4D4D (action), Blue #75AFF3 (info), Peach #FBB1A9 (warmth, illustrations), Pale pink #FFE8EA (tints), Ink #2F4858 (secondary text)",
          FR: "Rouge #FF4D4D (action), Bleu #75AFF3 (info), Pêche #FBB1A9 (chaleur, illustrations), Rose pâle #FFE8EA (teintes), Encre #2F4858 (texte secondaire)",
        },
      },
      {
        label: { EN: "Type", FR: "Typographie" },
        text: {
          EN: "Nunito Black for headlines, Nunito 700 for body, JetBrains Mono for numbers",
          FR: "Nunito Black pour les titres, Nunito 700 pour le texte, JetBrains Mono pour les chiffres",
        },
      },
      {
        label: { EN: "Rules", FR: "Règles" },
        text: {
          EN: "No gradients, no drop shadows, no emoji in data, 0.5 px hairlines, 12 px radius, sentence case, black pill CTA",
          FR: "Pas de dégradés, pas d'ombres portées, pas d'emoji dans les données, filets de 0,5 px, rayon de 12 px, casse de phrase, CTA en pilule noire",
        },
      },
      {
        label: { EN: "Logo set", FR: "Déclinaisons du logo" },
        text: {
          EN: "Primary, inverted, icon-only (app, PWA, XP token), tested from 128 px down to a 16 px favicon, with a clear-space rule",
          FR: "Principal, inversé, icône seule (app, PWA, jeton XP), testé de 128 px jusqu'au favicon de 16 px, avec une règle de zone de protection",
        },
      },
    ],
  },
  {
    title: { EN: "Marketing site (skillxtube.com)", FR: "Site marketing (skillxtube.com)" },
    lead: {
      EN: "Three versions of the landing page: a neo-brutalist first draft, a calmer light-grey version with white cards, then a ShipFast-style structure (hero, problem, feature accordion, pricing, FAQ). The feature accordion set a rule used everywhere since: colour only on the active element.",
      FR: "Trois versions de la landing page : une première version néo-brutaliste, une version gris clair plus calme avec des cartes blanches, puis une structure façon ShipFast (hero, problème, accordéon de fonctionnalités, tarifs, FAQ). L'accordéon a posé une règle appliquée partout depuis : la couleur uniquement sur l'élément actif.",
    },
  },
  {
    title: { EN: "App", FR: "App" },
    lead: {
      EN: "Every screen of the product, held to the same rules.",
      FR: "Chaque écran du produit, tenu aux mêmes règles.",
    },
    items: [
      {
        label: { EN: "Dashboard", FR: "Dashboard" },
        text: {
          EN: "“One primary CTA dominates.” Everything else steps back; the side column is styled like an analytics tool, with mono numbers, black progress bars and green kept for “done.”",
          FR: "« Un seul CTA principal domine. » Tout le reste passe au second plan ; la colonne latérale a le style d'un outil d'analytics, avec des chiffres en mono, des barres de progression noires et le vert réservé à « terminé ».",
        },
      },
      {
        label: { EN: "Wall of Fame", FR: "Wall of Fame" },
        text: {
          EN: "V1 had a gold, silver and bronze podium. Verdict: “Christmas tree.” V2 uses white cards with fine hairlines; #1 stands out only through a red border and a slightly bigger size.",
          FR: "La V1 avait un podium or, argent et bronze. Verdict : « sapin de Noël ». La V2 utilise des cartes blanches à filets fins ; le n° 1 ressort uniquement par une bordure rouge et une taille légèrement plus grande.",
        },
      },
      {
        label: { EN: "Community spaces", FR: "Espaces communautaires" },
        text: {
          EN: "A space switcher, collapsible channel groups, pinned posts, a clickable events calendar, and locked channels you unlock with credits.",
          FR: "Un sélecteur d'espaces, des groupes de canaux repliables, des posts épinglés, un calendrier d'événements cliquable et des canaux verrouillés qu'on débloque avec des crédits.",
        },
      },
      {
        label: { EN: "Pricing", FR: "Tarifs" },
        text: {
          EN: "From a 7-step credit slider to three clear cards (3, 7 and 14-day paths: $9, $19, $29), a one-time / monthly toggle, and the middle card marked with a border instead of a pink fill.",
          FR: "D'un curseur de crédits en 7 étapes à trois cartes claires (parcours de 3, 7 et 14 jours : 9 $, 19 $, 29 $), un sélecteur paiement unique / mensuel, et la carte du milieu signalée par une bordure plutôt qu'un fond rose.",
        },
      },
      {
        label: { EN: "Maker Projects leaderboard", FR: "Classement Maker Projects" },
        text: {
          EN: "Flame votes (one free vote per visitor per project) plus side ad slots.",
          FR: "Des votes « flamme » (un vote gratuit par visiteur et par projet) et des emplacements publicitaires latéraux.",
        },
      },
      {
        label: { EN: "Affiliate form as a chat", FR: "Formulaire d'affiliation en chat" },
        text: {
          EN: "Five questions, inline validation, quick replies, a typing indicator and a step counter.",
          FR: "Cinq questions, une validation en ligne, des réponses rapides, un indicateur de saisie et un compteur d'étapes.",
        },
      },
      {
        label: { EN: "Demo paths", FR: "Parcours de démo" },
        text: {
          EN: "Four live paths (TikTok Organic 3 days, Google Ads 3 days, CapCut 7 days, YouTube SEO 14 days). White background, black type, black player and timeline; the 14-day timeline folds into two weeks of seven columns.",
          FR: "Quatre parcours en ligne (TikTok Organic 3 jours, Google Ads 3 jours, CapCut 7 jours, YouTube SEO 14 jours). Fond blanc, texte noir, lecteur et timeline noirs ; la timeline de 14 jours se replie en deux semaines de sept colonnes.",
        },
      },
    ],
  },
  {
    title: { EN: "Zip, the mascot", FR: "Zip, la mascotte" },
    lead: {
      EN: "A small creature whose quiff echoes the logo's lightning bolt. Character sheet with three key poses (Hello, “I'm watching for you”, Day complete), a silhouette test, legibility at 96, 48 and 24 px, and its own palette. Yellow is deliberately left out.",
      FR: "Une petite créature dont la houppette reprend l'éclair du logo. Fiche personnage avec trois poses clés (Hello, « Je regarde pour toi », Journée terminée), un test de silhouette, la lisibilité à 96, 48 et 24 px, et sa propre palette. Le jaune est volontairement exclu.",
    },
    items: [
      {
        label: { EN: "25 reactions", FR: "25 réactions" },
        text: {
          EN: "One expression for every moment of a path, from welcome to “See you tomorrow.”",
          FR: "Une expression pour chaque moment d'un parcours, de l'accueil à « À demain ».",
        },
      },
      {
        label: { EN: "Zip becomes your avatar", FR: "Zip devient ton avatar" },
        text: {
          EN: "Each learner builds a companion with 6 colours, 7 accessories, a mood and a name. The lightning quiff always stays visible.",
          FR: "Chaque apprenant crée son compagnon avec 6 couleurs, 7 accessoires, une humeur et un prénom. La houppette en éclair reste toujours visible.",
        },
      },
      {
        label: { EN: "Mini-game, Zip vs the Brainrot", FR: "Mini-jeu, Zip vs the Brainrot" },
        text: {
          EN: "Built on Astrocade and placed in the community space. Zip sorts brainrot from real knowledge; six mistakes ends the run; each round won earns 150 SkillXP.",
          FR: "Réalisé sur Astrocade et intégré à l'espace communautaire. Zip trie le brainrot du vrai savoir ; six erreurs et la partie s'arrête ; chaque manche gagnée rapporte 150 SkillXP.",
        },
      },
    ],
  },
  {
    title: { EN: "Zip and the crew", FR: "Zip et sa bande" },
    lead: {
      EN: "Six characters, six small pieces of YouTube life: a visible flaw, a hidden fear, a running gag. You laugh at the flaw and get attached to the fear.",
      FR: "Six personnages, six petits morceaux de vie YouTube : un défaut visible, une peur cachée, un running gag. On rit du défaut et on s'attache à la peur.",
    },
    items: [
      {
        label: { EN: "Zip", FR: "Zip" },
        text: {
          EN: "The calm centre. “He watches YouTube so you don't have to.”",
          FR: "Le centre calme. « Il regarde YouTube pour que tu n'aies pas à le faire. »",
        },
      },
      {
        label: { EN: "Buffer", FR: "Buffer" },
        text: {
          EN: "The loading circle, always half a second behind. Afraid of being a burden.",
          FR: "Le cercle de chargement, toujours une demi-seconde en retard. A peur d'être un poids.",
        },
      },
      {
        label: { EN: "Ding", FR: "Ding" },
        text: {
          EN: "The notification bell that rings whenever it feels something. Afraid of being muted.",
          FR: "La cloche de notification qui sonne dès qu'elle ressent quelque chose. A peur d'être mise en sourdine.",
        },
      },
      {
        label: { EN: "Skip", FR: "Skip" },
        text: {
          EN: "The “Skip ad” button. Impatient, blunt, only speaks after a 5-second countdown. Secretly Buffer's big brother.",
          FR: "Le bouton « Passer l'annonce ». Impatient, direct, ne parle qu'après un compte à rebours de 5 secondes. Secrètement le grand frère de Buffer.",
        },
      },
      {
        label: { EN: "Later", FR: "Later" },
        text: {
          EN: "The “Watch later” burrito, wrapped around a growing pile of videos. Afraid of starting, not finishing.",
          FR: "Le burrito « À regarder plus tard », enroulé autour d'une pile de vidéos qui grandit. A peur de commencer, pas de finir.",
        },
      },
      {
        label: { EN: "Thumby", FR: "Thumby" },
        text: {
          EN: "The shocked-face thumbnail who overreacts to everything. Without the O-mouth, nobody recognises him.",
          FR: "La miniature à la tête choquée qui surréagit à tout. Sans sa bouche en O, personne ne le reconnaît.",
        },
      },
      {
        label: { EN: "CC", FR: "CC" },
        text: {
          EN: "The subtitles, Zip's secret crush, introduced as a riddle in episode 7.",
          FR: "Les sous-titres, le crush secret de Zip, introduits comme une énigme dans l'épisode 7.",
        },
      },
    ],
    closing: {
      EN: "Each character has its own sheet (three poses, silhouette test, legibility, palette). The latest crew deck (v3, 21 slides) adds CC's sheet, a storyboard for each of the seven Season 0 episodes (timed beats, on-screen text, sound cues, end card) and a three-step reveal plan for CC. It also has a relationship map (“who cares about whom”) and a slide on why the crew is easy to love: group dynamics, visible continuity, fragility with no moral, silhouettes readable in 0.5 s.",
      FR: "Chaque personnage a sa propre fiche (trois poses, test de silhouette, lisibilité, palette). Le dernier deck de la bande (v3, 21 slides) ajoute la fiche de CC, un storyboard pour chacun des sept épisodes de la saison 0 (temps forts minutés, textes à l'écran, indications sonores, carton de fin) et un plan de révélation de CC en trois étapes. Il contient aussi une carte des relations (« qui tient à qui ») et une slide sur ce qui rend la bande attachante : dynamique de groupe, continuité visible, fragilité sans morale, silhouettes lisibles en 0,5 s.",
    },
  },
  {
    title: { EN: "Social: Zip on TikTok", FR: "Social : Zip sur TikTok" },
    lead: {
      EN: "Short English videos that never look educational: relatable YouTube moments, never preachy, never putting creators down.",
      FR: "Des vidéos courtes en anglais qui n'ont jamais l'air pédagogiques : des moments YouTube familiers, jamais moralisateurs, jamais aux dépens des créateurs.",
    },
    items: [
      {
        label: { EN: "Season 0", FR: "Saison 0" },
        text: {
          EN: "Seven Shorts: Zip meets one friend per episode, then the crew comes together",
          FR: "Sept Shorts : Zip rencontre un ami par épisode, puis la bande se forme",
        },
      },
      {
        label: { EN: "Series", FR: "Séries" },
        text: {
          EN: "POV series and “Zip watched it so you don't have to”",
          FR: "Une série POV et « Zip watched it so you don't have to »",
        },
      },
      {
        label: { EN: "Format", FR: "Format" },
        text: {
          EN: "22 to 28 s, vertical 9:16, readable with the sound off, 7 storyboards",
          FR: "22 à 28 s, vertical 9:16, lisible sans le son, 7 storyboards",
        },
      },
      {
        label: { EN: "Episode taglines", FR: "Accroches des épisodes" },
        text: {
          EN: "“Episode 1 of a lot.” · “He's not even that surprised.” · “Ding has never been noticed before.” · “He took 5 seconds to say 3 words.” · “It's been tomorrow for 3 years.” · “He'll finish it. Someday.”",
          FR: "“Episode 1 of a lot.” · “He's not even that surprised.” · “Ding has never been noticed before.” · “He took 5 seconds to say 3 words.” · “It's been tomorrow for 3 years.” · “He'll finish it. Someday.”",
        },
      },
      {
        label: { EN: "Sign-off", FR: "Signature" },
        text: { EN: "From “Watch later” to “I made this.”", FR: "From “Watch later” to “I made this.”" },
      },
    ],
  },
  {
    title: { EN: "Community content", FR: "Contenus communautaires" },
    lead: {
      EN: "73 resources (PDF guides, PNG diagrams, Excel workbooks, code files) across ten spaces. Each space signs its footers and diagram headers with its own accent colour. In workbooks, input cells are yellow and everything else is calculated.",
      FR: "73 ressources (guides PDF, schémas PNG, classeurs Excel, fichiers de code) réparties dans dix espaces. Chaque espace signe ses pieds de page et ses en-têtes de schémas de sa propre couleur d'accent. Dans les classeurs, les cellules à saisir sont jaunes, tout le reste est calculé.",
    },
  },
  {
    title: { EN: "Side projects", FR: "Projets parallèles" },
    lead: {
      EN: "Ideas tested at full speed, alongside the product.",
      FR: "Des idées testées à pleine vitesse, en parallèle du produit.",
    },
    items: [
      {
        label: { EN: "RankBid.Body", FR: "RankBid.Body" },
        text: {
          EN: "Live bidding on ad spots placed on a body, front and back. Built in one hour in static HTML, then refined with parallax tilt on hover, a light reflection, embossed anatomical markers, zoom and pan.",
          FR: "Des enchères en direct sur des emplacements publicitaires placés sur un corps, de face et de dos. Construit en une heure en HTML statique, puis affiné avec une inclinaison en parallaxe au survol, un reflet de lumière, des repères anatomiques en relief, du zoom et du déplacement.",
        },
      },
      {
        label: { EN: "Behance", FR: "Behance" },
        text: {
          EN: "Henrri Financial Assistant (AI finance), Coursekey (AI course summaries), Thought Companion (AI thinking partner).",
          FR: "Henrri Financial Assistant (finance et IA), Coursekey (résumés de cours par IA), Thought Companion (partenaire de réflexion IA).",
        },
      },
    ],
  },
];

export const processSteps: { title: Localized; text: Localized }[] = [
  {
    title: { EN: "Reference", FR: "Référence" },
    text: {
      EN: "A site that already does the job well, borrowed for its structure, never its language or colours.",
      FR: "Un site qui fait déjà bien le travail, emprunté pour sa structure, jamais pour son langage ni ses couleurs.",
    },
  },
  {
    title: { EN: "HTML preview", FR: "Aperçu HTML" },
    text: {
      EN: "Often several variants side by side with a switcher.",
      FR: "Souvent plusieurs variantes côte à côte, avec un sélecteur.",
    },
  },
  {
    title: { EN: "Verdict", FR: "Verdict" },
    text: {
      EN: "Too busy, too generic, not pro enough: start again until it's a yes.",
      FR: "Trop chargé, trop générique, pas assez pro : on recommence jusqu'au oui.",
    },
  },
  {
    title: { EN: "Cursor prompt", FR: "Prompt Cursor" },
    text: {
      EN: "Targeted files, enforced brand rules, reviewed in preview before production.",
      FR: "Des fichiers ciblés, les règles de marque imposées, une relecture en preview avant la production.",
    },
  },
];

export const processClosing: Localized = {
  EN: "The portfolio itself follows the same loop: Next.js, React, TypeScript and Tailwind, a gallery inspired by Mild Sugar, versioned on GitHub and deployed on Vercel.",
  FR: "Le portfolio lui-même suit la même boucle : Next.js, React, TypeScript et Tailwind, une galerie inspirée de Mild Sugar, versionnée sur GitHub et déployée sur Vercel.",
};

export const tools: { tool: string; use: Localized }[] = [
  {
    tool: "Claude",
    use: {
      EN: "HTML previews, mockups, mascot and character sheets, PDF and Excel resources",
      FR: "Aperçus HTML, maquettes, fiches de la mascotte et des personnages, ressources PDF et Excel",
    },
  },
  { tool: "Claude Design", use: { EN: "Character boards for Zip and the crew", FR: "Planches de personnages pour Zip et sa bande" } },
  { tool: "Cursor", use: { EN: "Integrating screens into the Next.js app", FR: "Intégration des écrans dans l'app Next.js" } },
  { tool: "Claude Code and Desktop", use: { EN: "Stripe, database, content imports", FR: "Stripe, base de données, imports de contenus" } },
  { tool: "Grok", use: { EN: "Strategy, research and QA bots", FR: "Stratégie, recherche et bots de QA" } },
  { tool: "Astrocade", use: { EN: "Zip vs the Brainrot mini-game", FR: "Mini-jeu Zip vs the Brainrot" } },
  {
    tool: "ChatGPT custom GPTs, PartyRock",
    use: { EN: "Early AI products (Behance, 2024)", FR: "Premiers produits IA (Behance, 2024)" },
  },
  {
    tool: "Next.js · React · TypeScript · Tailwind · GitHub · Vercel",
    use: { EN: "Portfolio and product stack", FR: "Stack du portfolio et du produit" },
  },
];

export const toolsClosing: Localized = { EN: "Zero Figma.", FR: "Zéro Figma." };

/** 05b · Content & SEO system of skillxtube.com. */
export const contentSeo = {
  lead: {
    EN: "Every content page on skillxtube.com was written and produced with AI under one editorial line: play doesn't count, proof does. Each page argues one idea in plain, short sentences, then ends on a tool, a demo or a path.",
    FR: "Chaque page de contenu de skillxtube.com a été écrite et produite avec l'IA sous une seule ligne éditoriale : jouer ne compte pas, la preuve si. Chaque page défend une idée en phrases simples et courtes, puis se termine sur un outil, une démo ou un parcours.",
  },
  source: {
    EN: "Counts come from skillxtube.com/sitemap.xml (82 URLs in total, last updated 28 Sept to 17 Oct 2026) and the site's own links, checked on 19 Oct 2026.",
    FR: "Les chiffres viennent de skillxtube.com/sitemap.xml (82 URL au total, mises à jour du 28 septembre au 17 octobre 2026) et des liens du site, vérifiés le 19 octobre 2026.",
  },
  rows: [
    {
      section: { EN: "Free tools", FR: "Outils gratuits" },
      pages: { EN: "14 (hub + 6 standalone tools + 7 demo-feature pages)", FR: "14 (hub + 6 outils autonomes + 7 pages de fonctionnalités de démo)" },
      urls: "/freetools · /freetools/shipped-or-watched, /monday-edit, /playlist-to-path, /video-worth-it, /playlist-hours, /unused-training-budget · /generate-path, /today, /challenge, /hint, /proof, /progress, /events",
    },
    {
      section: { EN: "Use cases", FR: "Cas d'usage" },
      pages: {
        EN: "4 (hub + 3 pages); the hub lists 7 cases, 4 of which point to Learn paths",
        FR: "4 (hub + 3 pages) ; le hub liste 7 cas, dont 4 renvoient vers des parcours Learn",
      },
      urls: "/use-cases, /use-cases/tutorial-to-project, /daily-habit, /client-ready-skill · cards → /learn/capcut, /tiktok-organic, /youtube-seo, /prompt-engineering",
    },
    {
      section: { EN: "Guides", FR: "Guides" },
      pages: { EN: "8 (no hub page; /guides returns 404)", FR: "8 (pas de page hub ; /guides renvoie une 404)" },
      urls: "/guides/playlist-is-not-a-path, /watched-is-not-shipped, /certificate-vs-file, /a-course-is-not-practice, /hours-are-not-skill, /a-tutorial-is-not-an-edit, /a-thumbnail-is-not-a-lesson, /learn-from-youtube-without-distraction",
    },
    {
      section: { EN: "Alternatives", FR: "Alternatives" },
      pages: { EN: "8 (hub + 7)", FR: "8 (hub + 7)" },
      urls: "/alternatives, /alternatives/youtube, /chatgpt, /skillshare, /udemy, /coursera, /notion, /youtube-premium",
    },
    {
      section: { EN: "Learn", FR: "Learn" },
      pages: { EN: "18 (hub + 17 skill paths)", FR: "18 (hub + 17 parcours de compétences)" },
      urls: "/learn + capcut, tiktok-organic, youtube-seo, social-media-strategy, sql, linkedin, prompt-engineering, excel, canva, notion, seo, google-analytics-4, premiere-pro, n8n, zapier, cursor-ai-coding, figma",
    },
    {
      section: { EN: "Answers", FR: "Réponses" },
      pages: { EN: "8 (no hub; /answers returns 404)", FR: "8 (pas de hub ; /answers renvoie une 404)" },
      urls: "/answers/what-is-a-learning-path, what-counts-as-proof, why-playlists-fail, path-vs-course, what-is-a-daily-challenge, what-does-proof-unlock, how-long-is-a-skillxtube-path, what-is-shipped-work",
    },
  ],
  total: { EN: "60 content pages", FR: "60 pages de contenu" },
  mechanics: [
    {
      label: { EN: "Guides use an “X is not Y” formula", FR: "Les guides suivent la formule « X n'est pas Y »" },
      text: {
        EN: "A playlist is not a path, Watched is not shipped, Hours are not skill… Each one turns a habit into a clear distinction, then gives a side-by-side table, a “Do this tonight” list of three steps and a “Common mistake” box, and ends with links to the demo, a path and a tool.",
        FR: "A playlist is not a path, Watched is not shipped, Hours are not skill… Chacun transforme une habitude en distinction claire, puis donne un tableau comparatif, une liste « À faire ce soir » en trois étapes et un encadré « Erreur fréquente », et se termine par des liens vers la démo, un parcours et un outil.",
      },
    },
    {
      label: { EN: "Free tools are calculators, not lead magnets", FR: "Les outils gratuits sont des calculateurs, pas des aimants à leads" },
      text: {
        EN: "They need no account and make no YouTube fetch. Each gives a score or verdict with Copy / Save / Download PNG / Copy for LinkedIn, and links to a matching path (“Play doesn't count. Proof does.”).",
        FR: "Ils ne demandent aucun compte et n'interrogent pas YouTube. Chacun donne un score ou un verdict avec Copier / Enregistrer / Télécharger en PNG / Copier pour LinkedIn, et renvoie vers le parcours correspondant (« Play doesn't count. Proof does. »).",
      },
    },
    {
      label: { EN: "Alternatives pages share one structure", FR: "Les pages Alternatives partagent une seule structure" },
      text: {
        EN: "“[Tool] is good at X, but…”, then the same three-part answer: Today, a Challenge, Deposit proof.",
        FR: "« [Outil] est bon pour X, mais… », puis la même réponse en trois temps : Today, un Challenge, Deposit proof.",
      },
    },
    {
      label: { EN: "Learn pages are written for search", FR: "Les pages Learn sont écrites pour la recherche" },
      text: {
        EN: "“Learn [skill] from YouTube in 7 days”, each listing the real topics it covers.",
        FR: "« Learn [skill] from YouTube in 7 days », chacune listant les vrais sujets couverts.",
      },
    },
    {
      label: { EN: "Answers are short definitions", FR: "Les réponses sont des définitions courtes" },
      text: {
        EN: "They pin down the product's vocabulary: path, proof, shipped work, daily challenge.",
        FR: "Elles fixent le vocabulaire du produit : parcours, preuve, travail livré, défi quotidien.",
      },
    },
    {
      label: { EN: "Characters cross over", FR: "Les personnages circulent" },
      text: {
        EN: "Thumby's shocked face shows up on the “A thumbnail is not a lesson” guide and in the site banner (“Find Thumby”).",
        FR: "La tête choquée de Thumby apparaît dans le guide « A thumbnail is not a lesson » et dans la bannière du site (« Find Thumby »).",
      },
    },
  ],
  toFill: {
    EN: "Organic traffic, indexed pages and top queries (Search Console), plus tool usage, if tracked",
    FR: "Trafic organique, pages indexées et principales requêtes (Search Console), et usage des outils, si mesuré",
  },
};

/** 05c · Early AI design, Behance 2024. */
export const earlyAi = {
  lead: {
    EN: "Where it started: three AI product concepts published on Behance in February 2024, well before SkillxTube. They show the same reflex that drives SkillxTube: take a model, give it one job and a clean interface.",
    FR: "Là où tout a commencé : trois concepts de produits IA publiés sur Behance en février 2024, bien avant SkillxTube. Ils montrent le même réflexe que SkillxTube : prendre un modèle, lui donner une seule mission et une interface nette.",
  },
  framing: {
    EN: "2024: first experiments. Three assistants, three single-purpose interfaces. SkillxTube is what happened when one of them grew up.",
    FR: "2024 : premières expériences. Trois assistants, trois interfaces à usage unique. SkillxTube, c'est ce qui s'est passé quand l'un d'eux a grandi.",
  },
  projects: [
    {
      title: "Henrri Financial Assistant",
      subtitle: "Votre assistant finance AI",
      href: "https://www.behance.net/gallery/190756749/Henrri-Financial-Assistant-Votre-assistant-finance-AI",
      published: { EN: "5 Feb 2024", FR: "5 févr. 2024" },
      text: {
        EN: "Chat interface: “Build a financial assistant and visualize it into Python,” with suggested prompts (help me, what kind of financial data, build a financial model for my business). 20 views.",
        FR: "Interface de chat : « Build a financial assistant and visualize it into Python », avec des prompts suggérés (help me, what kind of financial data, build a financial model for my business). 20 vues.",
      },
    },
    {
      title: "Coursekey",
      subtitle: "Générateur IA de résumés de cours",
      href: "https://www.behance.net/gallery/190755881/Coursekey-Gnerateur-IAde-rsums-de-cours",
      published: { EN: "Feb 2024", FR: "Févr. 2024" },
      text: {
        EN: "An app built on PartyRock: “CourseKey – Course to Keys Summaries.” Paste a course description, get the key points and actionable steps. 9 views.",
        FR: "Une app construite sur PartyRock : « CourseKey – Course to Keys Summaries ». On colle la description d'un cours, on obtient les points clés et les étapes concrètes. 9 vues.",
      },
    },
    {
      title: "Thought Companion",
      subtitle: "Votre partenaire de pensées AI",
      href: "https://www.behance.net/gallery/191389231/Thought-Companion-Votre-partenaire-de-penses-AI",
      published: { EN: "13 Feb 2024", FR: "13 févr. 2024" },
      text: {
        EN: "A thinking partner set up as a custom GPT in ChatGPT, shown with an AIPRM prompt panel. 5 views.",
        FR: "Un partenaire de réflexion configuré comme GPT personnalisé dans ChatGPT, présenté avec un panneau de prompts AIPRM. 5 vues.",
      },
    },
  ],
  profile: {
    EN: "Profile: behance.net/angelinepoitout, member since Dec 2022, 34 project views, 3 appreciations.",
    FR: "Profil : behance.net/angelinepoitout, membre depuis décembre 2022, 34 vues de projets, 3 appréciations.",
  },
  toFill: {
    EN: "One line per project on the intent and what was learned; exact publication date of Coursekey",
    FR: "Une ligne par projet sur l'intention et ce qui en a été appris ; date de publication exacte de Coursekey",
  },
};

/** Facts from the source files. `value` is the figure shown big, `text` the rest of the line. */
export const outcomes: { value: string; text: Localized }[] = [
  {
    value: "12",
    text: {
      EN: "design workstreams shipped between July and October 2026",
      FR: "chantiers de design livrés entre juillet et octobre 2026",
    },
  },
  { value: "4", text: { EN: "demo paths live", FR: "parcours de démo en ligne" } },
  { value: "73", text: { EN: "community resources across 10 spaces", FR: "ressources communautaires dans 10 espaces" } },
  {
    value: "25",
    text: {
      EN: "Zip reactions, plus a customisable avatar system (6 colours, 7 accessories)",
      FR: "réactions de Zip, et un système d'avatar personnalisable (6 couleurs, 7 accessoires)",
    },
  },
  {
    value: "6+1",
    text: {
      EN: "characters, each with a full sheet, plus 7 TikTok storyboards for Season 0",
      FR: "personnages, chacun avec sa fiche complète, et 7 storyboards TikTok pour la saison 0",
    },
  },
  { value: "1", text: { EN: "playable mini-game built into the product", FR: "mini-jeu jouable intégré au produit" } },
  {
    value: "60",
    text: {
      EN: "AI-produced content pages on skillxtube.com: 14 free-tool pages, 18 Learn pages, 8 guides, 8 answers, 8 alternatives, 4 use-case pages",
      FR: "pages de contenu produites avec l'IA sur skillxtube.com : 14 pages d'outils gratuits, 18 pages Learn, 8 guides, 8 réponses, 8 alternatives, 4 pages de cas d'usage",
    },
  },
];

/** Still unknown: shown as discreet placeholders while SHOW_TO_FILL is true. */
export const toFill: Localized[] = [
  {
    EN: "Live date for skillxtube.com / number of users or sign-ups",
    FR: "Date de mise en ligne de skillxtube.com / nombre d'utilisateurs ou d'inscriptions",
  },
  { EN: "TikTok results (views, followers) once Season 0 is out", FR: "Résultats TikTok (vues, abonnés) après la sortie de la saison 0" },
  { EN: "Mini-game plays, if tracked", FR: "Parties jouées sur le mini-jeu, si mesurées" },
];

export const links: { label: Localized; href?: string }[] = [
  { label: { EN: "SkillxTube", FR: "SkillxTube" }, href: "https://skillxtube.com/" },
  { label: { EN: "Angéline Poitout", FR: "Angéline Poitout" }, href: "https://angelinepoitout.com/" },
  { label: { EN: "GitHub", FR: "GitHub" }, href: "https://github.com/Angelinei" },
  { label: { EN: "Behance", FR: "Behance" }, href: "https://www.behance.net/angelinepoitout" },
  // TO FILL: URL of the Astrocade game.
  { label: { EN: "Zip vs the Brainrot on Astrocade", FR: "Zip vs the Brainrot sur Astrocade" } },
];

export type GalleryItem = {
  /** File names in public/portfolio/. Two files are shown side by side. */
  files: string[];
  caption: Localized;
  alt: Localized;
  /** Spans the full width of the grid. */
  wide?: boolean;
};

export const gallery: GalleryItem[] = [
  {
    files: ["pdf-portfolio-p-1.png"],
    wide: true,
    caption: {
      EN: "SkillxTube identity: one badge, five colours, two typefaces.",
      FR: "Identité SkillxTube : un badge, cinq couleurs, deux typographies.",
    },
    alt: {
      EN: "Portfolio page showing the SkillxTube red lightning badge, its five-colour palette and its two typefaces.",
      FR: "Page du portfolio montrant le badge rouge à éclair de SkillxTube, sa palette de cinq couleurs et ses deux typographies.",
    },
  },
  {
    files: ["pdf-portfolio-p-2.png", "pdf-portfolio-p-3.png"],
    wide: true,
    caption: {
      EN: "Brand guidelines, landing in three versions, dashboard, Wall of Fame, community spaces.",
      FR: "Charte de marque, landing en trois versions, dashboard, Wall of Fame, espaces communautaires.",
    },
    alt: {
      EN: "Two portfolio pages: SkillxTube brand guidelines, the three landing page versions, the dashboard, the Wall of Fame and the community spaces.",
      FR: "Deux pages du portfolio : la charte de marque SkillxTube, les trois versions de la landing, le dashboard, le Wall of Fame et les espaces communautaires.",
    },
  },
  {
    files: ["pdf-portfolio-p-4.png"],
    wide: true,
    caption: {
      EN: "Pricing, Maker Projects leaderboard, chat-style affiliate form, four demo paths.",
      FR: "Tarifs, classement Maker Projects, formulaire d'affiliation en chat, quatre parcours de démo.",
    },
    alt: {
      EN: "Portfolio page with the SkillxTube pricing cards, the Maker Projects leaderboard, the chat-style affiliate form and the four demo paths.",
      FR: "Page du portfolio avec les cartes de tarifs SkillxTube, le classement Maker Projects, le formulaire d'affiliation en chat et les quatre parcours de démo.",
    },
  },
  {
    files: ["pdf-portfolio-p-5.png", "pdf-portfolio-p-6.png"],
    wide: true,
    caption: {
      EN: "Zip, the mini-game, the crew, the TikTok plan and the 73 resources.",
      FR: "Zip, le mini-jeu, la bande, le plan TikTok et les 73 ressources.",
    },
    alt: {
      EN: "Two portfolio pages presenting Zip the mascot, the Zip vs the Brainrot mini-game, the crew of characters, the TikTok plan and the community resources.",
      FR: "Deux pages du portfolio présentant la mascotte Zip, le mini-jeu Zip vs the Brainrot, la bande de personnages, le plan TikTok et les ressources communautaires.",
    },
  },
  {
    files: ["pdf-portfolio-p-7.png"],
    wide: true,
    caption: {
      EN: "RankBid.Body, other AI products, and the method: see it before coding it.",
      FR: "RankBid.Body, d'autres produits IA, et la méthode : le voir avant de le coder.",
    },
    alt: {
      EN: "Portfolio page showing RankBid.Body, the other AI products and the see-it-before-coding-it method.",
      FR: "Page du portfolio montrant RankBid.Body, les autres produits IA et la méthode « le voir avant de le coder ».",
    },
  },
  {
    files: ["zip-sheet.png"],
    caption: {
      EN: "Zip: three key poses, silhouette test, legibility from 96 to 24 px.",
      FR: "Zip : trois poses clés, test de silhouette, lisibilité de 96 à 24 px.",
    },
    alt: {
      EN: "Zip's character sheet with three key poses, a black silhouette test and the mascot shown at 96, 48 and 24 pixels.",
      FR: "Fiche personnage de Zip avec trois poses clés, un test de silhouette en noir et la mascotte affichée à 96, 48 et 24 pixels.",
    },
  },
  {
    files: ["zip-25-reactions.png"],
    caption: {
      EN: "25 reactions, one for every moment of a learning path.",
      FR: "25 réactions, une pour chaque moment d'un parcours d'apprentissage.",
    },
    alt: {
      EN: "Grid of 25 Zip expressions, from the welcome to “See you tomorrow.”",
      FR: "Grille de 25 expressions de Zip, de l'accueil à « À demain ».",
    },
  },
  {
    files: ["zip-avatar.png"],
    caption: {
      EN: "Zip becomes your avatar: colour, accessory, mood, name.",
      FR: "Zip devient ton avatar : couleur, accessoire, humeur, prénom.",
    },
    alt: {
      EN: "Avatar builder where a learner picks Zip's colour, accessory, mood and name.",
      FR: "Créateur d'avatar où l'apprenant choisit la couleur, l'accessoire, l'humeur et le prénom de Zip.",
    },
  },
  {
    files: ["deck-crew-slide-01.png"],
    caption: {
      EN: "Zip and the crew, the cast of the SkillxTube Shorts.",
      FR: "Zip et sa bande, le casting des Shorts SkillxTube.",
    },
    alt: {
      EN: "Title slide of the crew deck: Zip surrounded by the other characters of the SkillxTube Shorts.",
      FR: "Slide de titre du deck de la bande : Zip entouré des autres personnages des Shorts SkillxTube.",
    },
  },
  {
    files: ["deck-crew-slide-02.png"],
    caption: {
      EN: "Six characters, six small pieces of YouTube life.",
      FR: "Six personnages, six petits morceaux de vie YouTube.",
    },
    alt: {
      EN: "Slide introducing the six characters of the crew, each tied to a piece of the YouTube interface.",
      FR: "Slide présentant les six personnages de la bande, chacun lié à un élément de l'interface YouTube.",
    },
  },
  {
    files: ["buffer.png"],
    caption: { EN: "Buffer, always half a second behind.", FR: "Buffer, toujours une demi-seconde en retard." },
    alt: {
      EN: "Character sheet of Buffer, the loading circle, with three poses and its palette.",
      FR: "Fiche personnage de Buffer, le cercle de chargement, avec trois poses et sa palette.",
    },
  },
  {
    files: ["ding.png"],
    caption: { EN: "Ding, who rings whenever she feels something.", FR: "Ding, qui sonne dès qu'elle ressent quelque chose." },
    alt: {
      EN: "Character sheet of Ding, the notification bell, with three poses and its palette.",
      FR: "Fiche personnage de Ding, la cloche de notification, avec trois poses et sa palette.",
    },
  },
  {
    files: ["skip.png"],
    caption: {
      EN: "Skip, who only talks after the countdown. Except for Buffer.",
      FR: "Skip, qui ne parle qu'après le compte à rebours. Sauf pour Buffer.",
    },
    alt: {
      EN: "Character sheet of Skip, the “Skip ad” button, with three poses and its palette.",
      FR: "Fiche personnage de Skip, le bouton « Passer l'annonce », avec trois poses et sa palette.",
    },
  },
  {
    files: ["later.png"],
    caption: {
      EN: "Later, an early sheet, before he became the burrito of the v3 deck.",
      FR: "Later, une première fiche, avant qu'il devienne le burrito du deck v3.",
    },
    alt: {
      EN: "Early character sheet of Later, the “Watch later” character, with three poses and its palette.",
      FR: "Première fiche personnage de Later, le personnage « À regarder plus tard », avec trois poses et sa palette.",
    },
  },
  {
    files: ["thumby.png"],
    caption: { EN: "Thumby, who overreacts to absolutely everything.", FR: "Thumby, qui surréagit à absolument tout." },
    alt: {
      EN: "Character sheet of Thumby, the shocked-face thumbnail with an O-shaped mouth, with three poses and its palette.",
      FR: "Fiche personnage de Thumby, la miniature à la bouche en O, avec trois poses et sa palette.",
    },
  },
  {
    files: ["deck-crew-slide-09.png"],
    caption: { EN: "Who cares about whom: Zip at the centre.", FR: "Qui tient à qui : Zip au centre." },
    alt: {
      EN: "Relationship map of the crew, with Zip in the middle and arrows showing who cares about whom.",
      FR: "Carte des relations de la bande, avec Zip au centre et des flèches indiquant qui tient à qui.",
    },
  },
  {
    files: ["deck-crew-slide-10.png"],
    caption: { EN: "Why people get attached: four mechanics, no moral.", FR: "Pourquoi on s'attache : quatre mécaniques, aucune morale." },
    alt: {
      EN: "Slide listing the four mechanics that make the crew easy to love.",
      FR: "Slide listant les quatre mécaniques qui rendent la bande attachante.",
    },
  },
  {
    files: ["deck-crew-slide-11.png"],
    caption: { EN: "“He watches YouTube so you don't have to.”", FR: "« Il regarde YouTube pour que tu n'aies pas à le faire. »" },
    alt: {
      EN: "Closing slide with Zip and the line “He watches YouTube so you don't have to.”",
      FR: "Slide de clôture avec Zip et la phrase « Il regarde YouTube pour que tu n'aies pas à le faire. »",
    },
  },
  {
    files: ["crew-v3-p12.png"],
    caption: {
      EN: "Season 0: seven Shorts, one new friend per episode.",
      FR: "Saison 0 : sept Shorts, un nouvel ami par épisode.",
    },
    alt: {
      EN: "Crew deck v3 slide giving the plan of Season 0: seven Shorts, one new friend per episode.",
      FR: "Slide du deck v3 présentant le plan de la saison 0 : sept Shorts, un nouvel ami par épisode.",
    },
  },
  {
    files: ["crew-v3-p13.png"],
    caption: {
      EN: "Episode 1 storyboard: six beats in 26 seconds.",
      FR: "Storyboard de l'épisode 1 : six temps forts en 26 secondes.",
    },
    alt: {
      EN: "Storyboard of episode 1 in six timed beats, with on-screen text and sound cues.",
      FR: "Storyboard de l'épisode 1 en six temps forts minutés, avec textes à l'écran et indications sonores.",
    },
  },
  {
    files: ["crew-v3-p19.png"],
    caption: {
      EN: "Episode 7: the whole crew, and a subtitle nobody wrote.",
      FR: "Épisode 7 : toute la bande, et un sous-titre que personne n'a écrit.",
    },
    alt: {
      EN: "Storyboard of episode 7 with the whole crew together and a mysterious subtitle.",
      FR: "Storyboard de l'épisode 7 avec toute la bande réunie et un sous-titre mystérieux.",
    },
  },
  {
    files: ["crew-v3-p9.png"],
    caption: {
      EN: "CC: she subtitles everything, except her feelings for Zip.",
      FR: "CC : elle sous-titre tout, sauf ses sentiments pour Zip.",
    },
    alt: {
      EN: "Character sheet of CC, the subtitles, with her poses and palette.",
      FR: "Fiche personnage de CC, les sous-titres, avec ses poses et sa palette.",
    },
  },
  {
    files: ["crew-v3-p20.png"],
    caption: {
      EN: "CC's arrival, staged as a riddle in three steps.",
      FR: "L'arrivée de CC, mise en scène comme une énigme en trois étapes.",
    },
    alt: {
      EN: "Slide of the three-step plan that reveals CC as a riddle.",
      FR: "Slide du plan en trois étapes qui révèle CC comme une énigme.",
    },
  },
  {
    files: ["site-guide-playlist.png"],
    caption: {
      EN: "A guide page: the claim, the comparison, the task for tonight.",
      FR: "Une page guide : l'affirmation, la comparaison, la tâche du soir.",
    },
    alt: {
      EN: "Screenshot of the skillxtube.com guide “A playlist is not a path”, with its comparison table and its task for tonight.",
      FR: "Capture du guide skillxtube.com « A playlist is not a path », avec son tableau comparatif et sa tâche du soir.",
    },
  },
  {
    files: ["site-freetools.png"],
    caption: {
      EN: "The free-tools hub: one result a day, no account.",
      FR: "Le hub des outils gratuits : un résultat par jour, sans compte.",
    },
    alt: {
      EN: "Screenshot of the skillxtube.com free-tools hub listing the calculators.",
      FR: "Capture du hub des outils gratuits de skillxtube.com listant les calculateurs.",
    },
  },
  {
    files: ["site-tool-shipped-or-watched.png"],
    caption: {
      EN: "Shipped or watched?: score a video by what it produced.",
      FR: "Shipped or watched? : noter une vidéo selon ce qu'elle a produit.",
    },
    alt: {
      EN: "Screenshot of the “Shipped or watched?” tool giving a score to a video.",
      FR: "Capture de l'outil « Shipped or watched? » qui attribue un score à une vidéo.",
    },
  },
  {
    files: ["site-learn.png"],
    caption: {
      EN: "17 skill paths built from real YouTube lessons.",
      FR: "17 parcours de compétences construits à partir de vraies leçons YouTube.",
    },
    alt: {
      EN: "Screenshot of the skillxtube.com Learn hub with its 17 skill paths.",
      FR: "Capture du hub Learn de skillxtube.com avec ses 17 parcours de compétences.",
    },
  },
  {
    files: ["site-use-cases.png"],
    caption: {
      EN: "Seven use cases, one promise: a file by Day 7.",
      FR: "Sept cas d'usage, une promesse : un fichier au jour 7.",
    },
    alt: {
      EN: "Screenshot of the skillxtube.com use-cases hub with its seven cases.",
      FR: "Capture du hub des cas d'usage de skillxtube.com avec ses sept cas.",
    },
  },
  {
    files: ["site-alternatives.png"],
    caption: {
      EN: "Alternatives: SkillxTube against YouTube, ChatGPT, Udemy and others.",
      FR: "Alternatives : SkillxTube face à YouTube, ChatGPT, Udemy et d'autres.",
    },
    alt: {
      EN: "Screenshot of the skillxtube.com alternatives hub comparing SkillxTube with YouTube, ChatGPT, Udemy and others.",
      FR: "Capture du hub Alternatives de skillxtube.com comparant SkillxTube à YouTube, ChatGPT, Udemy et d'autres.",
    },
  },
  {
    files: ["behance-henrri.png"],
    caption: {
      EN: "Henrri Financial Assistant (2024): an early AI assistant concept.",
      FR: "Henrri Financial Assistant (2024) : un premier concept d'assistant IA.",
    },
    alt: {
      EN: "Behance cover of Henrri Financial Assistant, a chat interface for an AI finance assistant.",
      FR: "Couverture Behance de Henrri Financial Assistant, une interface de chat pour un assistant financier IA.",
    },
  },
  {
    files: ["behance-thought-companion.png"],
    caption: {
      EN: "Thought Companion (2024): a thinking partner built as a custom GPT.",
      FR: "Thought Companion (2024) : un partenaire de réflexion construit comme un GPT personnalisé.",
    },
    alt: {
      EN: "Behance cover of Thought Companion, a custom GPT shown with an AIPRM prompt panel.",
      FR: "Couverture Behance de Thought Companion, un GPT personnalisé présenté avec un panneau de prompts AIPRM.",
    },
  },
  {
    files: ["behance-coursekey-cover.png"],
    caption: {
      EN: "Coursekey (2024): course-to-key-points summaries, built on PartyRock.",
      FR: "Coursekey (2024) : des résumés de cours en points clés, construits sur PartyRock.",
    },
    alt: {
      EN: "Behance cover of Coursekey, a PartyRock app that turns a course description into key points.",
      FR: "Couverture Behance de Coursekey, une app PartyRock qui transforme la description d'un cours en points clés.",
    },
  },
];
