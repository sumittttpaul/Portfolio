import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "components/ui/Reveal";
import { GradientButton } from "components/ui/Button";
import ArticleBody from "components/blog/ArticleBody";
import ArticleCard from "components/blog/ArticleCard";
import Share from "components/blog/Share";
import Toc from "components/blog/Toc";
import { getArticle, getArticles, getRelatedArticles } from "lib/blog";
import { site } from "content/site";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return { title: "Article not found", robots: { index: false, follow: true } };
  const url = `/blog/${a.slug}`;
  return {
    title: a.title,
    description: a.excerpt,
    keywords: a.keywords,
    authors: [{ name: site.name, url: site.url }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: a.title,
      description: a.excerpt,
      publishedTime: a.date,
      authors: [site.name],
      tags: a.keywords,
      images: [{ url: a.banner, width: 1919, height: 1079, alt: a.title }],
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.excerpt, images: [a.banner] },
    other: { "twitter:label1": "Reading time", "twitter:data1": a.readTime },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const related = getRelatedArticles(article.slug, 3);
  const url = `${site.url}/blog/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: article.banner,
    keywords: article.keywords.join(", "),
    url,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative overflow-hidden pb-16 pt-[140px] sm:pb-20 sm:pt-[160px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(40% 70% at 15% 30%, rgba(107,79,163,0.55), transparent 70%), radial-gradient(35% 60% at 55% 10%, rgba(176,110,60,0.35), transparent 70%), radial-gradient(40% 80% at 90% 40%, rgba(70,90,140,0.45), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-site gap-10 px-[18px] sm:px-9 lg:grid-cols-[200px_1fr] xl:px-4">
          <div className="hidden lg:block" />
          <div className="min-w-0 max-w-[720px]">
            <Reveal y={10}>
              <p className="eyebrow">
                <Link href="/blog" className="hover:text-bone">
                  Blog
                </Link>{" "}
                / {article.category}
              </p>
            </Reveal>
            <SplitText as="h1" text={article.title} className="mt-5 text-display-lg font-medium text-bone" />
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase leading-[16.8px] text-bone">
                <span className="flex items-center gap-2">
                  <Image src={site.avatar} alt="" width={20} height={20} className="size-5 rounded-full object-cover" />
                  {site.name}
                </span>
                <time dateTime={article.date} className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  {article.publishedAt}
                </time>
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  {article.readTime} read
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-site grid-cols-[minmax(0,1fr)] gap-12 px-[18px] pb-10 sm:px-9 lg:grid-cols-[200px_minmax(0,1fr)] xl:px-4">
        <aside className="hidden lg:block">
          <div className="sticky top-[120px] flex flex-col gap-8">
            <Toc items={article.outline} />
            <div className="border-t border-white/10 pt-6">
              <Share url={url} title={article.title} />
            </div>
            <div className="rounded-[14px] bg-ink-800 p-4">
              <div className="flex items-center gap-3">
                <Image src={site.avatar} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
                <div>
                  <p className="text-[14px] font-medium text-bone">Need a hand?</p>
                  <p className="text-[12px] leading-snug text-mute">I build frontends like this for a living.</p>
                </div>
              </div>
              <GradientButton href="/contact" className="mt-4 w-full [&>span]:w-full">
                Get in touch
              </GradientButton>
            </div>
          </div>
        </aside>

        <div className="min-w-0 max-w-[720px]">
          <ArticleBody article={article} />

          <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8">
            <ul className="flex flex-wrap gap-2" aria-label="Keywords">
              {article.keywords.map((k) => (
                <li key={k} className="rounded-full bg-ink-800 px-3 py-1.5 text-[13px] text-bone/75">
                  {k}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a
                href={article.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-bone underline decoration-white/30 underline-offset-4 hover:decoration-bone"
              >
                View the source on GitHub ↗
              </a>
              <div className="lg:hidden">
                <Share url={url} title={article.title} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section aria-label="More articles" className="container-site py-24">
          <h2 className="mb-10 text-heading-40 font-medium text-bone">More from the lab</h2>
          <ul className="grid gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {related.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 0.06}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
