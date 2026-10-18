/**
 * Essays published on /writing, newest first.
 * Each slug is the file content/blog/<slug>.en.mdx.
 * Replace an entry (and its file) to swap a text.
 */
export const writing = [
  "the-education-system-didnt-prepare-me",
  "the-art-of-writing-rules-for-ai-agents",
  "seven-weeks-building-with-ai-retention",
  "staying-pure-player",
  "15-lessons-learned-in-6-years-of-entrepreneurship",
] as const;

export type WritingSlug = (typeof writing)[number];

export type WritingPost = {
  slug: WritingSlug;
  title: string;
  date: string;
  excerpt: string;
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
