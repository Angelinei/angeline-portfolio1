/**
 * Essays published on /writing, newest first.
 * Each slug is the file content/blog/<slug>.en.mdx.
 * Replace an entry (and its file) to swap a text.
 */
export const writing = [
  "the-education-system-didnt-prepare-me",
  "the-art-of-writing-rules-for-ai-agents",
  "dream-team",
  "seven-weeks-building-with-ai-retention",
  "technical-bible-productivity-hack",
  "ai-conversation",
  "ai-humans",
  "retention",
  "building-faster-design-stack-motion-tools",
  "business-model",
  "learn-with-grok-to-deploy-shipfast",
  "staying-pure-player",
  "the-ai-revolution",
  "what-is-indie-hacking-why-ai-agents",
  "edtechs-in-france-and-international",
  "vcs-beautiful-lexical",
  "learn-to-sell",
  "what-is-an-ai-agent",
  "10-lessons-learned-from-vcs",
  "fast-learning-and-ai",
  "15-lessons-learned-in-6-years-of-entrepreneurship",
  "almanack-introduction",
  "what-is-edtech",
  "edtech-beyond-k-12",
  "ai-in-education",
] as const;

export type WritingSlug = (typeof writing)[number];

export type WritingPost = {
  slug: WritingSlug;
  title: string;
  date: string;
  excerpt: string;
  /** Shorter title for search results and share cards (frontmatter `seoTitle`). */
  seoTitle?: string;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function isWritingSlug(slug: string): slug is WritingSlug {
  return (writing as readonly string[]).includes(slug);
}

/** English date, so a French UI still doesn't imply the essay was translated. */
export function formatWritingDate(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const month = MONTHS[Number(match[2]) - 1];
  if (!month) return iso;
  return `${Number(match[3])} ${month} ${match[1]}`;
}
