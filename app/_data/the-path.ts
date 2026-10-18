/**
 * "The Path – Brick method", migrated verbatim from
 * https://angelinepoitout.com/the-path/ (English only, as on the original).
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
  location: "📍 Digital Nomad",
  links: [
    { label: "🌐 angelinepoitout.com/studio", href: "https://angelinepoitout.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/angelinepoitoutpro/" },
    { label: "Twitter/X", href: "https://twitter.com/AngelinePoitout" },
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
  contact: "Want a professionnal contact ? Let’s discuss on",
  signoff: ["Techie yours", "Angéline"],
};
