/**
 * Legacy WordPress paths. Sources come from the closed import branch.
 * "/", "/studio", "/the-path" and "/about" are omitted: those routes exist.
 * "/about/" still redirects to "/about".
 * Imported essays point at /writing; every other path points at /.
 */
const writingDestinations: Record<string, string> = {
  "/internet-taught-me-build-products": "/writing/the-education-system-didnt-prepare-me",
  "/building-saas-with-ai-retention": "/writing/seven-weeks-building-with-ai-retention",
  "/the-art-of-writing-rules-for-ai-agents": "/writing/the-art-of-writing-rules-for-ai-agents",
  "/15-lessons-learned-in-6-years-of-entrepreneurship":
    "/writing/15-lessons-learned-in-6-years-of-entrepreneurship",
  "/from-freelance-services-to-indie-software": "/writing/staying-pure-player",
  "/introduction": "/writing/almanack-introduction",
  "/fast-learning-and-ai": "/writing/fast-learning-and-ai",
  "/10-lessons-learned-from-vcs": "/writing/10-lessons-learned-from-vcs",
  "/learn-to-sell": "/writing/learn-to-sell",
  "/vcs-beautiful-lexical-non-exhaustive-list-with-definitions": "/writing/vcs-beautiful-lexical",
  "/analyze": "/writing/edtechs-in-france-and-international",
  "/what-is-indie-hacking-why-ai-agents": "/writing/what-is-indie-hacking-why-ai-agents",
  "/the-ai-revolution": "/writing/the-ai-revolution",
  "/ai-in-education": "/writing/ai-in-education",
  "/edtech-beyond-k-12": "/writing/edtech-beyond-k-12",
  "/what-is-edtech": "/writing/what-is-edtech",
  "/what-is-an-ai-agent-trend-or-tech-revolution-feedback-concrete-on-generative-ai-and-agents-for-developers-bootcamp-followed-aug-2-sep-6-6-weeks": "/writing/what-is-an-ai-agent",
  "/learn-with-grok-to-deploy-shipfast-to-teach-openclaw-to-replicate-wtf-era-of-possibilities-in-direct": "/writing/learn-with-grok-to-deploy-shipfast",
  "/business-model": "/writing/business-model",
  "/building-faster-design-stack-motion-tools": "/writing/building-faster-design-stack-motion-tools",
  "/retention": "/writing/retention",
  "/ai-humans": "/writing/ai-humans",
  "/ai-conversation": "/writing/ai-conversation",
  "/technical-bible-productivity-hack": "/writing/technical-bible-productivity-hack",
  "/dream-team": "/writing/dream-team",
};

const legacySources = [
  "/edtech-services",
  "/terms-and-conditions",
  "/maintenance-page",
  "/love-temple",
  "/blog",
  "/contact",
  "/introduction",
  "/gen-ai-training",
  "/ai-integration",
  "/automation",
  "/ai-edtech-usecases",
  "/category/society",
  "/category/technology",
  "/category/uncategorized",
  "/tag/edtech",
  "/tag/professional",
  "/15-lessons-learned-in-6-years-of-entrepreneurship",
  "/ai-humans",
  "/from-freelance-services-to-indie-software",
  "/the-ai-revolution",
  "/building-faster-design-stack-motion-tools",
  "/ai-conversation",
  "/retention",
  "/fast-learning-and-ai",
  "/what-is-indie-hacking-why-ai-agents",
  "/learn-with-grok-to-deploy-shipfast-to-teach-openclaw-to-replicate-wtf-era-of-possibilities-in-direct",
  "/learn-to-sell",
  "/vcs-beautiful-lexical-non-exhaustive-list-with-definitions",
  "/analyze",
  "/indie-hacking",
  "/building-saas-with-ai-retention",
  "/technical-bible-productivity-hack",
  "/10-lessons-learned-from-vcs",
  "/business-model",
  "/the-art-of-writing-rules-for-ai-agents",
  "/dream-team",
  "/internet-taught-me-build-products",
  "/what-is-an-ai-agent-trend-or-tech-revolution-feedback-concrete-on-generative-ai-and-agents-for-developers-bootcamp-followed-aug-2-sep-6-6-weeks",
  "/what-is-edtech",
  "/edtech-beyond-k-12",
  "/ai-in-education",
] as const;

export function legacyRedirects() {
  return [
    ...legacySources.flatMap((source) => {
      const destination = writingDestinations[source] ?? "/";
      return [
        { source, destination, permanent: true as const },
        { source: `${source}/`, destination, permanent: true as const },
      ];
    }),
    { source: "/about/", destination: "/about", permanent: true as const },
  ];
}
