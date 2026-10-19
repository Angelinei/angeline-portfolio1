/**
 * "The Path – Brick method", migrated verbatim from
 * https://angelinepoitout.com/the-path/, with a French translation (thePathFr).
 *
 * Inline markup: **bold**, *italic*, [label](https://url).
 */

export type PathBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "role"; title: string; subtitle?: string; meta: string; description?: string; items: string[] };

export type PathSection = { title: string; note?: string; blocks: PathBlock[] };

export const thePath = {
  source: "https://angelinepoitout.com/the-path/",
  title: "The Path",
  subtitle: "Brick method",
  tagline:
    "Building AI agents & micro-SaaS for education | 7+ EdTech partnerships in France | Internationalization in progress",
  intro:
    "Algolicious | From FR to expanding in bubbles only international EN Edtechs Tech Art. So, building a learning AI agent ecosystem based on social medias . Go connect !",
  location: "📍 Digital Nomad (From France)",
  links: [
    { label: "🌐 indiepa.ge/madship", href: "https://indiepa.ge/madship" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/angelinepoitoutpro/" },
    { label: "GitHub", href: "https://github.com/Angelinei" },
  ],
  sections: [
    {
      title: "Professional Summary",
      blocks: [
        {
          type: "p",
          text: "Passionate EdTech advocate and independent builder with 8+ years in digital project management, web marketing, training, and community building. Transitioned from corporate/freelance roles to **Indie Hacking** in 2026 (preparation for technical in parallal in 2024-2025), focusing on AI agents and automation for B2C/B2B EdTech solutions. Expert in WordPress, analytics, instructional design, and scaling educational experiences. Proven track record in partnerships (Google Ateliers Numériques, Studi, OpenClassrooms, etc.), content strategy, and high-impact events. Currently launching AI-powered micro-products while expanding internationally.",
        },
        {
          type: "p",
          text: "In parallal, I love music, art indé, tech revolution, digital nomadism, aerial disciplines and chill in real life. I love minding my business too.",
        },
      ],
    },
    {
      title: "Current Focus (2025–2027)",
      blocks: [
        {
          type: "list",
          items: [
            "**Indie Hacking in EdTech**: Rapid development of AI agents and micro-SaaS solutions tailored for B2C and B2B education ecosystems.",
          ],
        },
        { type: "p", text: "**Key Milestones**:" },
        {
          type: "list",
          items: [
            "7+ EdTech partnerships secured in France.",
            "1st place (team) at **DigiEduHack 2024** – “Building Open Source Data-Driven Content for Tomorrow’s Educators”.",
            "Unactive communities but it existed, and Meetup was too pricy for the needs of the moment; I understand why and will come back later because I like it : WebNewbies (2,400+ members) and Padawebies (1,300+ members) – 19 webinars organized with 4.5–4.6/5 satisfaction.",
            "Ongoing learning by praticing: Python, Informatic General, LLMS, Generative AI, AI Agents, sales of micro products, and customer support (since 2025, after Bali)",
          ],
        },
      ],
    },
    {
      title: "Key Experiences",
      blocks: [
        {
          type: "role",
          title: "Independent – Angéline Poitout Studio",
          subtitle: "EdTech Trainer, Consultant & AI Builder",
          meta: "2020 – Present (Remote / France)",
          items: [
            "Trainer & coach for major EdTech platforms : **Studi, Senza Formation, Iscod/Visiplus, OpenClassrooms**, **Digitaforma**",
            "Instructional design, exam juries, 1:1 coaching (+70 students accompanied, 4.8/5 rating).",
            "Google Ateliers Numériques Coach (2022–2024): Conferences, webinars, moderation.",
            "Community & Content: Meetup organizer, author of *Hack Ton Stage / Alternance* (Amazon), speaker at Café Freelance, Salon Business Africa, etc.",
            "2020 side projects: Hack La Crise (coordinator), Makesense Sprint coordinator.",
          ],
        },
        {
          type: "role",
          title: "Siparex XAnge Venture – Digital Project Manager",
          meta: "2018 – 2019 | Paris",
          description: "Venture capital firm managing €450M, investing in impactful startups (Ledger, Wandercraft, etc.).",
          items: [
            "Full social media management (LinkedIn, Twitter, Instagram, etc.) and community building (#ParlerCommeUnVC).",
            "CMS (WordPress) management, SEO, newsletter (Mailjet), press releases.",
            "Event support and reporting (Excel/PowerPoint).",
            "Instagram account creation and growth from scratch.",
            "Siparex site updates and FCPI content relay.",
          ],
        },
        {
          type: "role",
          title: "Ministère des Armées – Digital Project Officer (BLMN)",
          meta: "2017 – 2018",
          items: [
            "Refonte and animation of extranet (Drupal).",
            "Monthly newsletter management.",
            "Co-organization of events (seminars, JDC, Salon Mondial du Tourisme).",
            "Content marketing and stakeholder relations.",
          ],
        },
        {
          type: "role",
          title: "Hubstart Center – Communication Officer",
          meta: "2016 – 2017 | Tremblay-en-France",
          description: "Incubator & coworking space.",
          items: [
            "Digital & print communication strategy (Facebook, Twitter, LinkedIn).",
            "Website/CMS management, SEO, analytics.",
            "Newsletter (SendInBlue), incubator directory creation.",
            "Event organization (conferences, networking).",
          ],
        },
      ],
    },
    {
      title: "Skills",
      note: "Because entrepreneurship lead to multiexpertises",
      blocks: [
        {
          type: "list",
          items: [
            "**EdTech & Learning**: Instructional Design, Training & Coaching, E-learning Development, Curriculum Creation.",
            "**Digital Marketing**: Web Marketing, Community Management, SEO/GEO, Analytics, WordPress, Content Strategy.",
            "**AI & Product**: AI Agents, Generative AI, Python (foundations), Rapid Prototyping, Micro-SaaS Development.",
            "**Project & Operations**: Project Management, Event Organization, Partnership Development, Analytics & Reporting.",
          ],
        },
      ],
    },
    {
      title: "Projects & Achievements",
      blocks: [
        {
          type: "list",
          items: [
            "**6 years of entrepreneurship / digital nomad** – Bonus : it all grew me and allowed me to heal smartly and compartimentedly from the harassment scholar I lived in master degree (class side). Algorithm continuity real continuing unlock since this.",
            "**Hack Ton Stage / Alternance** – E-book on Amazon (2020). – not sold but opened me the opportunity to do a workshop free forEfrei’s students + Google Ateliers Numériques signed",
            "**100 Days of Webmarketing** – Free challenge never released. Come on theres AI, even the founder of idea who acquire a good audience (whereas I’m following another levers) [**have pivoted recently**](https://www.100school.com/).",
            "**Meetups** : High engagement and satisfaction rates.",
            "**Hackathons**: DigiEduHack winner, AWS PartyRock, etc.",
            "**Open Source / GitHub**: Contributions to education-focused projects.",
            "Music & creative side projects (Instagram @angeline.poitout.music) – the project is to do live in bubbles like Bali and attract musician of the world. My current work will finance it entirely (or huge part) to get the maximum independance into my vision. Indie everywheeere.",
          ],
        },
      ],
    },
    {
      title: "Education & Certifications",
      blocks: [
        { type: "p", text: "Pedagogy Engineering Diploma Openclassrooms. Master degree in Efrei Paris." },
        {
          type: "p",
          text: "Continuous learner in AI, pedagogy, and digital (Google certifications, Codecademy AI Bootcamp, Lion School, etc.).",
        },
        { type: "p", text: "Background in Tourism BTS + international experiences." },
      ],
    },
    {
      title: "Languages",
      blocks: [
        {
          type: "list",
          items: [
            "French (Native)",
            "English (Professional / International business level)",
            "Learning mandarin in the next 10 years (so complex, it reminds me the difficulty of russian in school for new alphabet)",
          ],
        },
      ],
    },
  ] satisfies PathSection[],
  contact: "Want a professional contact? Let’s discuss on",
  contactOr: "or by email at",
  signoff: ["Techie yours", "Angéline"],
};

export const thePathFr: typeof thePath = {
  ...thePath,
  tagline:
    "Agents IA et micro-SaaS pour l'éducation | 7+ partenariats EdTech en France | Internationalisation en cours",
  intro:
    "Algolicious | De la France vers une expansion dans des bulles internationales uniquement : EdTech anglophones, Tech, Art. Je construis donc un écosystème d'agents IA d'apprentissage basé sur les réseaux sociaux. On se connecte !",
  location: "📍 Digital Nomad (From France)",
  sections: [
    {
      title: "Résumé professionnel",
      blocks: [
        {
          type: "p",
          text: "Passionnée d'EdTech et créatrice indépendante, avec plus de 8 ans d'expérience en gestion de projets digitaux, webmarketing, formation et animation de communautés. Passage des postes en entreprise et en freelance à l'**Indie Hacking** en 2026 (préparation technique en parallèle en 2024-2025), avec un focus sur les agents IA et l'automatisation pour des solutions EdTech B2C/B2B. Experte WordPress, analytics, ingénierie pédagogique et passage à l'échelle d'expériences éducatives. Résultats concrets en partenariats (Google Ateliers Numériques, Studi, OpenClassrooms, etc.), stratégie de contenu et événements à fort impact. Je lance actuellement des micro-produits propulsés par l'IA tout en me développant à l'international.",
        },
        {
          type: "p",
          text: "En parallèle, j'aime la musique, l'art indé, la révolution tech, le nomadisme digital, les disciplines aériennes et le chill dans la vraie vie. J'aime aussi m'occuper de mes affaires.",
        },
      ],
    },
    {
      title: "Focus actuel (2025–2027)",
      blocks: [
        {
          type: "list",
          items: [
            "**Indie Hacking dans l'EdTech** : développement rapide d'agents IA et de solutions micro-SaaS pensés pour les écosystèmes éducatifs B2C et B2B.",
          ],
        },
        { type: "p", text: "**Étapes clés** :" },
        {
          type: "list",
          items: [
            "7+ partenariats EdTech signés en France.",
            "1re place (en équipe) au **DigiEduHack 2024** – « Building Open Source Data-Driven Content for Tomorrow’s Educators ».",
            "Communautés inactives, mais elles ont existé, et Meetup était trop cher pour les besoins du moment ; je comprends pourquoi et j'y reviendrai plus tard parce que j'aime ça : WebNewbies (2 400+ membres) et Padawebies (1 300+ membres) – 19 webinaires organisés avec une satisfaction de 4,5–4,6/5.",
            "Apprentissage continu par la pratique : Python, informatique générale, LLM, IA générative, agents IA, vente de micro-produits et support client (depuis 2025, après Bali).",
          ],
        },
      ],
    },
    {
      title: "Expériences clés",
      blocks: [
        {
          type: "role",
          title: "Indépendante – Angéline Poitout Studio",
          subtitle: "Formatrice EdTech, consultante et AI builder",
          meta: "2020 – aujourd'hui (à distance / France)",
          items: [
            "Formatrice et coach pour de grandes plateformes EdTech : **Studi, Senza Formation, Iscod/Visiplus, OpenClassrooms**, **Digitaforma**",
            "Ingénierie pédagogique, jurys d'examen, coaching individuel (+70 étudiants accompagnés, note de 4,8/5).",
            "Coach Google Ateliers Numériques (2022–2024) : conférences, webinaires, animation.",
            "Communauté et contenu : organisatrice de Meetups, autrice de *Hack Ton Stage / Alternance* (Amazon), intervenante au Café Freelance, au Salon Business Africa, etc.",
            "Projets annexes 2020 : Hack La Crise (coordinatrice), coordinatrice de sprint Makesense.",
          ],
        },
        {
          type: "role",
          title: "Siparex XAnge Venture – Cheffe de projet digital",
          meta: "2018 – 2019 | Paris",
          description: "Société de capital-risque gérant 450 M€, qui investit dans des startups à impact (Ledger, Wandercraft, etc.).",
          items: [
            "Gestion complète des réseaux sociaux (LinkedIn, Twitter, Instagram, etc.) et animation de communauté (#ParlerCommeUnVC).",
            "Gestion du CMS (WordPress), SEO, newsletter (Mailjet), communiqués de presse.",
            "Soutien aux événements et reporting (Excel/PowerPoint).",
            "Création et croissance du compte Instagram en partant de zéro.",
            "Mises à jour du site Siparex et relais des contenus FCPI.",
          ],
        },
        {
          type: "role",
          title: "Ministère des Armées – Chargée de projet digital (BLMN)",
          meta: "2017 – 2018",
          items: [
            "Refonte et animation de l'extranet (Drupal).",
            "Gestion de la newsletter mensuelle.",
            "Co-organisation d'événements (séminaires, JDC, Salon Mondial du Tourisme).",
            "Marketing de contenu et relations avec les parties prenantes.",
          ],
        },
        {
          type: "role",
          title: "Hubstart Center – Chargée de communication",
          meta: "2016 – 2017 | Tremblay-en-France",
          description: "Incubateur et espace de coworking.",
          items: [
            "Stratégie de communication digitale et print (Facebook, Twitter, LinkedIn).",
            "Gestion du site et du CMS, SEO, analytics.",
            "Newsletter (SendInBlue), création de l'annuaire de l'incubateur.",
            "Organisation d'événements (conférences, networking).",
          ],
        },
      ],
    },
    {
      title: "Compétences",
      note: "Parce que l'entrepreneuriat mène à la multi-expertise",
      blocks: [
        {
          type: "list",
          items: [
            "**EdTech et apprentissage** : ingénierie pédagogique, formation et coaching, développement e-learning, création de programmes.",
            "**Marketing digital** : webmarketing, community management, SEO/GEO, analytics, WordPress, stratégie de contenu.",
            "**IA et produit** : agents IA, IA générative, Python (bases), prototypage rapide, développement micro-SaaS.",
            "**Projet et opérations** : gestion de projet, organisation d'événements, développement de partenariats, analytics et reporting.",
          ],
        },
      ],
    },
    {
      title: "Projets et réalisations",
      blocks: [
        {
          type: "list",
          items: [
            "**6 ans d'entrepreneuriat / de nomadisme digital** – Bonus : tout cela m'a fait grandir et m'a permis de guérir intelligemment, en compartimentant, du harcèlement scolaire vécu en master (côté classe). Depuis, l'algorithme continue réellement de se débloquer.",
            "**Hack Ton Stage / Alternance** – E-book sur Amazon (2020). Pas vendu, mais il m'a ouvert l'opportunité d'animer un atelier gratuit pour les étudiants de l'Efrei, et d'être signée chez Google Ateliers Numériques.",
            "**100 Days of Webmarketing** – Challenge gratuit jamais sorti. Allez, il y a l'IA : même le fondateur de l'idée, qui avait une belle audience (alors que je suis d'autres leviers), [**a pivoté récemment**](https://www.100school.com/).",
            "**Meetups** : taux d'engagement et de satisfaction élevés.",
            "**Hackathons** : gagnante du DigiEduHack, AWS PartyRock, etc.",
            "**Open source / GitHub** : contributions à des projets tournés vers l'éducation.",
            "Projets musicaux et créatifs (Instagram @angeline.poitout.music) – l'idée est de jouer en live dans des bulles comme Bali et d'attirer des musiciens du monde entier. Mon travail actuel le financera entièrement (ou en grande partie) pour garder un maximum d'indépendance dans ma vision. Indie everywheeere.",
          ],
        },
      ],
    },
    {
      title: "Formation et certifications",
      blocks: [
        { type: "p", text: "Diplôme d'ingénierie pédagogique OpenClassrooms. Master à l'Efrei Paris." },
        {
          type: "p",
          text: "Apprentissage continu en IA, pédagogie et digital (certifications Google, Codecademy AI Bootcamp, Lion School, etc.).",
        },
        { type: "p", text: "Formation initiale : BTS Tourisme + expériences internationales." },
      ],
    },
    {
      title: "Langues",
      blocks: [
        {
          type: "list",
          items: [
            "Français (langue maternelle)",
            "Anglais (niveau professionnel / affaires internationales)",
            "Apprendre le mandarin dans les 10 prochaines années (tellement complexe, ça me rappelle la difficulté du russe à l'école avec un nouvel alphabet)",
          ],
        },
      ],
    },
  ],
  contact: "Envie d'un contact professionnel ? Échangeons sur",
  contactOr: "ou par mail à",
  signoff: ["Techie yours", "Angéline"],
};
