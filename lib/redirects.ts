/**
 * Legacy WordPress paths. Sources come from the closed import branch.
 * "/", "/studio" and "/the-path" are omitted: those routes already exist.
 * The five kept essays point at /writing; every other path points at /.
 */
const writingDestinations: Record<string, string> = {
  "/internet-taught-me-build-products": "/writing/the-education-system-didnt-prepare-me",
  "/building-saas-with-ai-retention": "/writing/seven-weeks-building-with-ai-retention",
  "/the-art-of-writing-rules-for-ai-agents": "/writing/the-art-of-writing-rules-for-ai-agents",
  "/15-lessons-learned-in-6-years-of-entrepreneurship":
    "/writing/15-lessons-learned-in-6-years-of-entrepreneurship",
  "/from-freelance-services-to-indie-software": "/writing/staying-pure-player",
};

const legacySources = [
  "/edtech-services",
  "/terms-and-conditions",
  "/maintenance-page",
  "/love-temple",
  "/blog",
  "/contact",
  "/about",
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
  return legacySources.flatMap((source) => {
    const destination = writingDestinations[source] ?? "/";
    return [
      { source, destination, permanent: true as const },
      { source: `${source}/`, destination, permanent: true as const },
    ];
  });
}
