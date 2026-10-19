/**
 * Testimonials shown on the home stage, before Contact. Quotes are verbatim from
 * Temoignages_Angeline_Poitout_FR_EN.md (original typos kept); long letters and posts are
 * trimmed to the passage about Angéline, marked with […].
 *
 * Adobe customer comments: verbatim from Commentaires_Adobe_FR_EN.docx (support satisfaction
 * surveys, May–June 2026, the "for the portfolio" set only), anonymous, mixed into the list.
 *
 * To add one: append an object to `people` (or `adobe`). `source` is optional (see
 * TestimonialSource); `name_en` replaces `name` in English when the name itself is translated.
 */

export type TestimonialSource = "letter" | "linkedin" | "google" | "digitaforma" | "facebook" | "article" | "adobe";

export type Testimonial = {
  id: string;
  quote_fr: string;
  quote_en: string;
  name: string;
  name_en?: string;
  role_fr: string;
  role_en: string;
  source?: TestimonialSource;
};

const people: Testimonial[] = [
  {
    id: "alexandre-deniaud",
    quote_fr:
      "Pour cela, Angéline POITOUT a fait preuve d'une grande autonomie, efficacité et adaptabilité. En effet, elle a su s'adapter à différents publics, différentes problématiques (communication commerciale et communication institutionnelle) et a su chercher les bonnes réponses pour répondre au mieux à ses missions. […] Je recommande vivement les services d'Angéline POITOUT et me tiens à votre disposition pour toute demande d'information complémentaire la concernant.",
    quote_en:
      "In doing so, Angéline POITOUT has shown great autonomy, efficiency and adaptability. She adapted to different audiences and different issues (commercial and institutional communication) and sought out the right answers to carry out her assignments as well as possible. […] I warmly recommend Angéline POITOUT's services and remain at your disposal for any further information about her.",
    name: "Alexandre Deniaud",
    role_fr: "Chef de projet, Hubstart Center",
    role_en: "Project Manager, Hubstart Center",
    source: "letter",
  },
  {
    id: "guillaume-meulle",
    quote_fr:
      "Angéline a été une très bonne alternante chez XAnge. Elle a travaillé en autonomie sur notre communication digitale. Elle a eu la curiosité d'ouvrir un nouveau canal (Instagram) et de nouveaux formats (parlercommeunvc et nos stories vidéo). Angéline a vraiment boosté notre communication !",
    quote_en:
      "Angeline was a very good apprentice at XAnge. She worked in autonomy on our digital communication. She was curious enough to open new channel (Instagram) and new stories (parlercommeunvc and our video stories). Angeline really rocked our communication !",
    name: "Guillaume Meulle",
    role_fr: "Managing Partner, XAnge",
    role_en: "Managing Partner, XAnge",
    source: "linkedin",
  },
  {
    id: "manon-gazzotti",
    quote_fr:
      "Super expérience avec Angéline. Elle a beaucoup travaillé pour améliorer notre communication digitale, a été d'une grande aide et avait plein d'idées créatives !",
    quote_en:
      "Great experience with Angeline.She worked hard to improve our digital communication and help, had a lot of creative ideas !",
    name: "Manon Gazzotti",
    role_fr: "Chief of Staff, Welcome to the Jungle (équipe XAnge)",
    role_en: "Chief of Staff, Welcome to the Jungle (XAnge team)",
    source: "linkedin",
  },
  {
    id: "estelle-pierre",
    quote_fr:
      "Nous avons d'ailleurs pu compter sur l'aide d'un staff d'organisateurs exceptionnels et dévoués avec Marion Candellier, Anaïs Salson, Angeline Poitout et Cyril Blaecke, sans eux cet événement n'aurait pas pu avoir lieu.",
    quote_en:
      "We could also count on the help of an exceptional and dedicated team of organisers, Marion Candellier, Anaïs Salson, Angeline Poitout and Cyril Blaecke; without them this event could not have taken place.",
    name: "Estelle Pierre",
    role_fr: "Co-organisatrice du hackathon Hack la crise",
    role_en: "Co-organiser, Hack la crise hackathon",
    source: "article",
  },
  {
    id: "angelite",
    quote_fr:
      "Angeline nous a énormément aidé à rendre visible notre action Hack la crise et elle m'accompagne pour ma société Angelite. Je l'a recommande les yeux fermés.",
    quote_en:
      'Angeline helped us enormously to make our "Hack la crise" initiative visible, and she supports me with my company, Angelite. I recommend her with my eyes closed.',
    name: "Angelite",
    role_fr: "Entreprise accompagnée",
    role_en: "Client company",
    source: "google",
  },
  {
    id: "remi-gilliot",
    quote_fr:
      "Merci Angéline. Tu m'a apporté la dose de motivation et de compétences en Web Marketing (dont je ne connaissais absolument pas) nécessaires pour mettre en place une stratégie de communication efficace et rentable ! Tu m'a transmis ta passion et donné les codes et les outils de la communication en ligne que j'ai pu mettre en place pendant la formation et déjà avoir un retour positif ! Merci du fond du coeur, Rémi",
    quote_en:
      "Thank you, Angéline. You gave me the motivation and the web marketing skills (which I knew absolutely nothing about) I needed to put an effective, profitable communication strategy in place! You passed on your passion and gave me the codes and tools of online communication, which I was able to apply during the training and already get positive results! Thank you from the bottom of my heart, Rémi",
    name: "Rémi Gilliot",
    role_fr: "Formation Web Marketing",
    role_en: "Web marketing training",
    source: "google",
  },
  {
    id: "carla-de-barros",
    quote_fr:
      "Angéline est une formatrice AU TOP. On voit qu'elle a beaucoup d'expérience dans son domaine d'activité. Je sors de la formation qu'elle a animé enrichie et convaincue de vouloir travailler dans le domaine du digital ! Merci Angéline !!",
    quote_en:
      "Angéline is a TOP trainer. You can tell she has a lot of experience in her field. I came out of the training she led enriched and convinced that I want to work in digital! Thank you, Angéline!!",
    name: "Carla De Barros",
    role_fr: "Formation au digital",
    role_en: "Digital training",
    source: "google",
  },
  {
    id: "sophie-squarta",
    quote_fr:
      "Très bonne expérience et une formation personnalisée de qualité. Approche très professionnelle de bout en bout et formatrice au top! Je recommande vivement cet organisme de formation.",
    quote_en:
      "A very good experience and high-quality, personalised training. A very professional approach from start to finish and a top trainer! I highly recommend this training organisation.",
    name: "Sophie Squarta",
    role_fr: "Formation personnalisée, Digitaforma",
    role_en: "Personalised training, Digitaforma",
    source: "google",
  },
  {
    id: "morgane-cadou",
    quote_fr:
      "J'ai suivi la formation Community Manager d'1 semaine. Le contenu était très complet, les supports variés avec des outils concrets ensuite adaptés à mon projet. Angeline la formatrice est très à l'écoute, disponible et à répondu à chacune de mes interrogations. Je recommande cette formation +++ Un grand merci Angeline et Oussama !",
    quote_en:
      "I took the one-week Community Manager training. The content was very thorough, with varied materials and concrete tools, then adapted to my project. Angeline, the trainer, is a great listener, available, and answered every one of my questions. I highly recommend this training! A big thank you, Angeline and Oussama!",
    name: "Morgane Cadou",
    role_fr: "Formation Community Manager",
    role_en: "Community Manager training",
    source: "google",
  },
  {
    id: "marion-masseran",
    quote_fr:
      "Formation de Community Manager au top !! Angéline est vraiment une formatrice géniale ! Elle sait prendre le temps pour expliquer et elle s'adapte à notre rythme; Elle est attentive et motivante. Formation très complète. Je te remercie. A bientôt, Marion",
    quote_en:
      "A top Community Manager training!! Angéline is a truly brilliant trainer! She takes the time to explain and adapts to our pace; she is attentive and motivating. A very complete training. Thank you. See you soon, Marion",
    name: "Marion Masseran",
    role_fr: "Formation Community Manager",
    role_en: "Community Manager training",
    source: "google",
  },
  {
    id: "aya-hoareau",
    quote_fr:
      "Formatrice au top, compétente, à l'écoute et très bien informée sur l'actualité et les avancés numériques. Hyper pédagogue, patiente et passionnée, elle n'hésite pas à prendre plus de temps lorsque l'on rencontre des difficultés. Elle sait aisément transmettre son savoir, je la recommande 1000 fois. Merci Angéline !",
    quote_en:
      "A top trainer: skilled, attentive and very well informed about current digital news and developments. Extremely good at teaching, patient and passionate, she doesn't hesitate to take extra time when you run into difficulties. She passes on her knowledge with ease; I recommend her a thousand times. Thank you, Angéline!",
    name: "Aya Hoareau",
    role_fr: "Formation au digital",
    role_en: "Digital training",
    source: "google",
  },
  {
    id: "chahira-idir",
    quote_fr:
      "Une formation très enrichissante et une super formatrice, pédagogue et patiente. J'ai appris et mis en application énormément de choses. Je la recommande vivement 💯",
    quote_en:
      "A very enriching training and a great trainer, a good teacher and patient. I learned and put into practice an enormous amount. I highly recommend her 💯",
    name: "Chahira Idir",
    role_fr: "Formation au digital",
    role_en: "Digital training",
    source: "google",
  },
  {
    id: "raousati-mhd",
    quote_fr:
      "Une formation au top avec une superbe formatrice ! J'ai appris énormément de choses, c'était très enrichissant. A l'écoute et prends le temps de répondre aux questions. Je vous la recommande vivement",
    quote_en:
      "A top training with a superb trainer! I learned an enormous amount; it was very enriching. She listens and takes the time to answer questions. I highly recommend her.",
    name: "Raousati Mhd",
    role_fr: "Formation au digital",
    role_en: "Digital training",
    source: "google",
  },
  {
    id: "fabienne-rabagny",
    quote_fr:
      "Angéline, la formatrice que j'ai eu était top ! J'ai pris la formule individualisée qui est vraiment super pour pouvoir travailler sur ses propres projets. Le suivi de mon dossier par Digitaforma était très pro.",
    quote_en:
      "Angéline, the trainer I had, was great! I chose the one-to-one format, which is really great for working on your own projects. Digitaforma's follow-up of my file was very professional.",
    name: "Fabienne Rabagny",
    role_fr: "Formation individualisée, Digitaforma",
    role_en: "One-to-one training, Digitaforma",
    source: "digitaforma",
  },
  {
    id: "antoine-sibue",
    quote_fr:
      "Formation en community management avec Digitaforma. Super, que ce soit avant, pendant ou après la formation. Entre l'écoute et la bienveillance d'Oussama pour entendre mes besoins et individualiser au mieux sa proposition; les compétences d'Angéline notre formatrice sur place, et le contenu pédagogique proposé; la qualité du lieu de travail qu'est La Permanence à Lyon; l'accompagnement ensuite; tout est bien organisé et ma satisfaction est au rendez-vous. Je recommande vivement les interactions avec Digitaforma et son équipe. Pour ma part, bravo et merci à Oussama et Angéline. A très bientôt.",
    quote_en:
      "Community management training with Digitaforma. Great before, during and after the training. Between Oussama's attentiveness and kindness in hearing my needs and tailoring his offer; the skills of Angéline, our on-site trainer, and the course content; the quality of the venue, La Permanence in Lyon; and the follow-up afterwards: everything is well organised and I'm fully satisfied. I highly recommend working with Digitaforma and its team. As for me, well done and thank you to Oussama and Angéline. See you very soon.",
    name: "Antoine Sibué",
    role_fr: "Formation community management, Digitaforma",
    role_en: "Community management training, Digitaforma",
    source: "digitaforma",
  },
  {
    id: "magalie-kaddour",
    quote_fr:
      "🤩 Une nouvelle année qui commence fort !\nC'est avec une grande fierté que je vous annonce que je suis officiellement certifiée en tant que Community Manager !\nJe remercie du fond du cœur Senza formations et notamment Angéline Poitout pour ces trois derniers mois pendant lesquels j'ai été formée. Ce fut trois mois très enrichissants, tant personnellement que professionnellement.\nJ'en profite pour vous souhaiter à tous une excellente année, pour moi elle commence merveilleusement bien 😊\n#communitymanager #formation #certification",
    quote_en:
      "🤩 A new year that's starting strong!\nI'm very proud to announce that I'm officially certified as a Community Manager!\nA heartfelt thank you to Senza formations, and especially Angéline Poitout, for the last three months of training. They were three very enriching months, both personally and professionally.\nI'd like to wish you all an excellent year; mine is getting off to a wonderful start 😊\n#communitymanager #training #certification",
    name: "Magalie Kaddour",
    role_fr: "Community Manager freelance",
    role_en: "Freelance Community Manager",
    source: "linkedin",
  },
  {
    id: "laetitia-parmigiani",
    quote_fr:
      "👉Il paraît que l'on commence à vieillir quand on finit d'apprendre alors je suis retournée virtuellement sur les bancs de l'école 😄.\n👉Je remercie vivement Senza formations et Angéline Poitout pour leurs précieux conseils et leur suivi dans le cadre de ma formation LinkedIn🏆🏆🏆\n#rienestimpossible #quandonveutonpeut",
    quote_en:
      "👉They say you start getting old when you stop learning, so I went back to school, virtually 😄.\n👉A big thank you to Senza formations and Angéline Poitout for their valuable advice and follow-up during my LinkedIn training🏆🏆🏆\n#nothingisimpossible #wherethereisawill",
    name: "Laetitia Parmigiani",
    role_fr: "Chargée de recrutement et évaluation des compétences",
    role_en: "Recruitment and skills assessment",
    source: "linkedin",
  },
  {
    id: "ashley-arguello-blaison",
    quote_fr:
      "…! 💥Certification réussie 🙌🏽 https://lnkd.in/dM3NrW2D Merci Angéline Poitout pour tes expplications et toute ton aide ✨",
    quote_en: "…! 💥Certification passed 🙌🏽 Thank you, Angéline Poitout, for your explanations and all your help ✨",
    name: "Ashley Arguello Blaison",
    role_fr: "Stratégiste en médias sociaux, Railnova",
    role_en: "Social media strategist, Railnova",
    source: "linkedin",
  },
  {
    id: "laurelie-makuntima",
    quote_fr:
      "Et merci à toi, Angéline Poitout d'avoir été l'une des meilleures mentor, de toujours m'accompagner jusqu'au bout à chaque projet, de m'encourager, de me donner de bonnes méthodologies mais surtout d'avoir cet esprit humain qui fait de toi une belle personne et une bonne mentor.",
    quote_en:
      "And thank you, Angéline Poitout, for being one of the best mentors, for always supporting me to the very end of every project, for encouraging me, for giving me good methods, and above all for having that human spirit that makes you a beautiful person and a good mentor.",
    name: "Laurélie Makuntima",
    role_fr: "Parcours Community Manager, mentorat",
    role_en: "Community Manager programme, mentoring",
    source: "facebook",
  },
  {
    id: "astrid-focke",
    quote_fr:
      "Un immense merci à Google Ateliers Numériques et à sa coach Angéline pour son animation de l'atelier Comment créer sa visibilité sur le web à destination des artistes et des compagnies lors du festival Off Avignon (Officiel) impulsé et porté par les équipes Pôle emploi Spectacle de PACA, Belle de mai, Vaucluse et AVS Artistes Paris IDF.\nMerci à la quarantaine de participants professionnels pour vos questions toujours pertinentes 🤗 Grâce à vous, l'atelier a été particulièrement interactif 🙏\n#ExpertiseDavenirCulture #AvecPôleEmploi #SynergieDéquipes",
    quote_en:
      'A huge thank you to Google Ateliers Numériques and its coach Angéline for leading the workshop "How to build your visibility on the web", for artists and theatre companies, at the Festival Off Avignon, initiated and run by the Pôle emploi Spectacle teams of PACA, Belle de Mai, Vaucluse and AVS Artistes Paris IDF.\nThank you to the forty or so professional participants for your always relevant questions 🤗 Thanks to you, the workshop was particularly interactive 🙏\n#ExpertiseDavenirCulture #WithPôleEmploi #TeamSynergy',
    name: "Astrid Focké",
    role_fr: "Pôle emploi Culture Spectacle Audiovisuel",
    role_en: "Pôle emploi Culture Spectacle Audiovisuel",
    source: "linkedin",
  },
  {
    id: "sarah-lauvergeon",
    quote_fr:
      "💻 Aujourd'hui Pôle emploi Lyon Confluence accueillait, en visioconférence, la coach Angéline Poitout de Google Ateliers Numériques pour son atelier \"Quels outils numériques utiliser pour trouver un emploi ?\".\n📌 Au programme : tous les outils pratiques et incontournables pour réussir sa recherche d'emploi (et 28 participants ravis de l'après-midi) 👌 !\n➡️ Nous avons déjà hâte de proposer les prochains ateliers sur de nouvelles thématiques cc Lamia BEKKAOUI\n#recherchedemploi #emploi #google #atelier #avecPôleEmploi",
    quote_en:
      '💻 Today Pôle emploi Lyon Confluence welcomed, by video call, coach Angéline Poitout from Google Ateliers Numériques for her workshop "Which digital tools should you use to find a job?".\n📌 On the agenda: all the practical, essential tools for a successful job search (and 28 participants delighted with the afternoon) 👌!\n➡️ We\'re already looking forward to the next workshops on new topics cc Lamia BEKKAOUI\n#jobsearch #employment #google #workshop #withPôleEmploi',
    name: "Sarah Lauvergeon",
    role_fr: "Pôle emploi, Talents Experts & Cadres",
    role_en: "Pôle emploi, Talents Experts & Cadres",
    source: "linkedin",
  },
  {
    id: "abc-formation-continue",
    quote_fr:
      "Experte du digital, Angéline Poitout évoque avec nous son parcours atypique, l'importance du digital ainsi que sa vision de l'enseignement et du métier de formateur. Un grand merci à Angéline pour son témoignage inspirant !\n#formationcontinue #digital #témoignage #interview",
    quote_en:
      "Digital expert Angéline Poitout talks with us about her unusual career path, the importance of digital, and her vision of teaching and of the trainer's profession. A big thank you to Angéline for her inspiring testimony!\n#continuingeducation #digital #testimony #interview",
    name: "ABC Formation Continue",
    role_fr: "Organisme de formation, interview",
    role_en: "Training organisation, interview",
  },
];

const adobe: Testimonial[] = [
  {
    id: "adobe-1",
    quote_fr: "La conseillère était parfaite",
    quote_en: "The advisor was perfect.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, juin 2026",
    role_en: "Satisfaction survey ★5, June 2026",
    source: "adobe",
  },
  {
    id: "adobe-2",
    quote_fr: "tellement friendly comprehensive et efficace !",
    quote_en: "So friendly, understanding and efficient!",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, juin 2026",
    role_en: "Satisfaction survey ★5, June 2026",
    source: "adobe",
  },
  {
    id: "adobe-3",
    quote_fr: "Merci infiniment à Angeline",
    quote_en: "Thank you so much to Angeline.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, juin 2026",
    role_en: "Satisfaction survey ★5, June 2026",
    source: "adobe",
  },
  {
    id: "adobe-4",
    quote_fr:
      "Personne très agréable et qui a prit tout son temps pour résoudre mon problème. Très à l'écoute et bienveillante on sentait qu'elle souhaitait résoudre ce problème quitte à prendre le plus de temps possible. Merci à elle.",
    quote_en:
      "A very pleasant person who took all the time needed to solve my problem. Very attentive and caring; you could tell she wanted to solve it, even if it meant taking as much time as necessary. Thanks to her.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, juin 2026",
    role_en: "Satisfaction survey ★5, June 2026",
    source: "adobe",
  },
  {
    id: "adobe-5",
    quote_fr: "parfait avec Angelique",
    quote_en: "Perfect with Angelique.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, juin 2026",
    role_en: "Satisfaction survey ★5, June 2026",
    source: "adobe",
  },
  {
    id: "adobe-6",
    quote_fr: "Très bon accueil Opérateurs compétents et à l'écoute du client. Satisfaction complète",
    quote_en: "Very warm welcome. Skilled agents who listen to the customer. Complete satisfaction.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, mai 2026",
    role_en: "Satisfaction survey ★5, May 2026",
    source: "adobe",
  },
  {
    id: "adobe-7",
    quote_fr: "écoute et propositions interrésistantes par une personne aimable et compétente",
    quote_en: "Attentive listening and interesting suggestions from a kind and competent person.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, mai 2026",
    role_en: "Satisfaction survey ★5, May 2026",
    source: "adobe",
  },
  {
    id: "adobe-8",
    quote_fr: "Très réactif d'une patience et d'une gentillesse exemplaire",
    quote_en: "Very responsive, with exemplary patience and kindness.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, mai 2026",
    role_en: "Satisfaction survey ★5, May 2026",
    source: "adobe",
  },
  {
    id: "adobe-9",
    quote_fr: "Très bonne accueil efficace.",
    quote_en: "Very good, efficient welcome.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, mai 2026",
    role_en: "Satisfaction survey ★5, May 2026",
    source: "adobe",
  },
  {
    id: "adobe-10",
    quote_fr: "Très satisfaite",
    quote_en: "Very satisfied.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, mai 2026",
    role_en: "Satisfaction survey ★5, May 2026",
    source: "adobe",
  },
  {
    id: "adobe-11",
    quote_fr: "Très aimable et très patient. Bonne proposition de produits pour améliorer notre travail.",
    quote_en: "Very kind and very patient. Good product suggestions to improve our work.",
    name: "Avis client Adobe",
    name_en: "Adobe customer review",
    role_fr: "Enquête de satisfaction ★5, mai 2026",
    role_en: "Satisfaction survey ★5, May 2026",
    source: "adobe",
  },
];

/** People first, with one Adobe comment after every two of them so the rows stay mixed. */
export const testimonials: Testimonial[] = people
  .flatMap((item, i) => (i % 2 === 1 && adobe[(i - 1) / 2] ? [item, adobe[(i - 1) / 2]] : [item]))
  .concat(adobe.slice(Math.floor(people.length / 2)));
