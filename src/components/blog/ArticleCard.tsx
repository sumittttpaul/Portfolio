import Image from "next/image";
import Link from "next/link";
import type { Article } from "lib/blog";
import { site } from "content/site";
import Cover from "./Cover";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group h-full">
      <Link href={`/blog/${article.slug}`} className="flex h-full flex-col">
        <div className="overflow-hidden rounded-[12px]">
          <div className="transition-transform duration-[1s] ease-expo group-hover:scale-[1.03]">
            <Cover article={article} />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Image src={site.avatar} alt="" width={20} height={20} className="size-5 rounded-full object-cover" />
          <span className="text-[14px] font-medium leading-[19.6px] text-bone">{site.shortName}</span>
          <span className="text-[14px] leading-[19.6px] text-mute">· {article.readTime} read</span>
        </div>
        <h3 className="mt-2.5 text-heading-28 font-medium text-bone transition-opacity duration-300 group-hover:opacity-80">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[14px] font-medium leading-[19.6px] text-mute">{article.excerpt}</p>
        <time dateTime={article.date} className="mt-auto pt-4 text-[14px] leading-[19.6px] text-mute">
          {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
        </time>
      </Link>
    </article>
  );
}
