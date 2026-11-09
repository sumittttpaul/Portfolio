import type { Article } from "lib/blog";
import ArticleVideo from "./ArticleVideo";
import CodeBlock from "./CodeBlock";

export default function ArticleBody({ article }: { article: Article }) {
  let h = 0;
  // Everything after the last divider is the article's closing thought
  const lastSeparator = article.content.map((c) => c.type).lastIndexOf("separator");
  const body = lastSeparator === -1 ? article.content : article.content.slice(0, lastSeparator);
  const closing = lastSeparator === -1 ? [] : article.content.slice(lastSeparator + 1);
  return (
    <div className="flex flex-col">
      {body.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const item = article.outline[h++];
            return (
              <h2
                key={i}
                id={item?.id}
                className="mb-6 mt-14 scroll-mt-32 text-heading-40 font-medium text-bone first:mt-0"
              >
                {block.value as string}
              </h2>
            );
          }
          case "description":
            return (
              <p key={i} className="body-read mb-6">
                {block.value as string}
              </p>
            );
          case "point":
            return (
              <ul key={i} className="mb-6 flex flex-col gap-2.5 rounded-[14px] bg-ink-800 p-5 sm:p-6">
                {(block.value as string[]).map((p, j) => (
                  <li key={j} className="flex gap-3 text-[18px] leading-[28.8px] text-bone">
                    <span className="mt-[12px] size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            );
          case "code":
            return <CodeBlock key={i} code={block.value as string} path={block.path} />;
          case "video":
            return <ArticleVideo key={i} src={block.value as string} poster={block.thumbnail} />;
          case "separator":
            return <hr key={i} className="my-10 border-dashed border-white/15" />;
          case "spacing":
            return <div key={i} className="h-6" aria-hidden="true" />;
          default:
            return null;
        }
      })}
      {closing.length > 0 && (
        <aside id="takeaway" className="mt-8 scroll-mt-32 rounded-2xl bg-ink-800 p-6 sm:p-8">
          <h2 className="eyebrow">Takeaway</h2>
          {closing.map((block, i) => (
            <p key={i} className="mt-4 text-[clamp(1.25rem,1.7vw,1.5rem)] font-medium leading-[1.35] tracking-[-0.02em] text-bone">
              {block.value as string}
            </p>
          ))}
        </aside>
      )}
    </div>
  );
}
