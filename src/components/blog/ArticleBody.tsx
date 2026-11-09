import type { Article } from "lib/blog";
import CodeBlock from "./CodeBlock";

export default function ArticleBody({ article }: { article: Article }) {
  let h = 0;
  return (
    <div className="flex flex-col">
      {article.content.map((block, i) => {
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
            return (
              <figure key={i} className="mb-6 overflow-hidden rounded-[14px] bg-ink-950">
                <video
                  className="block h-auto w-full"
                  src={block.value as string}
                  poster={block.thumbnail}
                  controls
                  playsInline
                  preload="none"
                />
              </figure>
            );
          case "separator":
            return <hr key={i} className="my-10 border-dashed border-white/15" />;
          case "spacing":
            return <div key={i} className="h-6" aria-hidden="true" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
