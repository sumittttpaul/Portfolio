import articlesData from "content/articles.json";

/**
 * Blog content is migrated verbatim from the Frontend Lab project
 * (FrontendLab/src/content/articles.json). This module adds the derived
 * fields the portfolio needs: slug, ISO date, excerpt, outline and category.
 */

export type ArticleBlock = {
  type: "heading" | "description" | "code" | "video" | "separator" | "spacing" | "point";
  value: string | string[];
  path?: string;
  thumbnail?: string;
};

type RawArticle = {
  id: string;
  title: string;
  publishedAt: string;
  readTime: string;
  banner: string;
  sourceLink: string;
  keywords: string[];
  content: ArticleBlock[];
};

export type Article = RawArticle & {
  slug: string;
  date: string;
  excerpt: string;
  category: string;
  outline: { id: string; label: string }[];
  snippet: string;
};

export const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toIsoDate = (value: string) => {
  const d = new Date(`${value} 00:00:00 UTC`);
  return Number.isNaN(d.getTime()) ? value : d.toISOString().slice(0, 10);
};

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

const articles: Article[] = (articlesData as RawArticle[])
  .map((a) => {
    const excerpt = (a.content.find((b) => b.type === "description")?.value as string) ?? "";
    const firstCode = (a.content.find((b) => b.type === "code")?.value as string) ?? "";
    const seen = new Map<string, number>();
    const outline = a.content
      .filter((b) => b.type === "heading")
      .map((b) => {
        const base = slugify(b.value as string);
        const n = seen.get(base) ?? 0;
        seen.set(base, n + 1);
        return { id: n ? `${base}-${n}` : base, label: b.value as string };
      });
    return {
      ...a,
      slug: slugify(a.title),
      date: toIsoDate(a.publishedAt),
      excerpt,
      category: titleCase(a.keywords[0] ?? "Frontend"),
      outline,
      snippet: firstCode.split("\n").slice(0, 7).join("\n"),
    };
  })
  // newest first
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : Number(b.id) - Number(a.id)));

export const getArticles = () => articles;
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const getRelatedArticles = (slug: string, max = 3) =>
  articles.filter((a) => a.slug !== slug).slice(0, max);
