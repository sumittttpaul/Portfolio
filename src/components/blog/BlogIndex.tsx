"use client";

import { useMemo, useState } from "react";
import type { Article } from "lib/blog";
import { Reveal } from "components/ui/Reveal";
import ArticleCard from "./ArticleCard";

export default function BlogIndex({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((a) =>
      [a.title, a.excerpt, ...a.keywords].some((s) => s.toLowerCase().includes(q)),
    );
  }, [articles, query]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] text-mute" aria-live="polite">
          {results.length} {results.length === 1 ? "article" : "articles"}
        </p>
        <label className="flex h-10 w-full items-center gap-2 rounded-full bg-ink-800 px-4 text-mute transition-colors focus-within:bg-ink-750 sm:w-64">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keyword..."
            className="h-full w-full bg-transparent text-[14px] text-bone outline-none placeholder:text-dim"
          />
        </label>
      </div>
      {results.length ? (
        <ul className="grid gap-x-4 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {results.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={(i % 3) * 0.06}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <p className="py-20 text-center text-[15px] text-mute">No articles match &ldquo;{query}&rdquo;.</p>
      )}
    </>
  );
}
