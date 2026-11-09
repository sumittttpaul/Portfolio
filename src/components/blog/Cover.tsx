import type { Article } from "lib/blog";

const palettes = [
  ["#a78bfa", "#60a5fa", "#f472b6", "#fbbf24"],
  ["#60a5fa", "#34d399", "#a78bfa", "#f9a8d4"],
  ["#f472b6", "#fb923c", "#818cf8", "#67e8f9"],
  ["#34d399", "#a78bfa", "#fbbf24", "#60a5fa"],
  ["#fb923c", "#f472b6", "#60a5fa", "#a3e635"],
  ["#818cf8", "#f472b6", "#22d3ee", "#fde68a"],
];

/**
 * Article cover drawn in code: title, category and a snippet of the article's
 * own code on a soft gradient, so every post gets a consistent cover.
 */
export default function Cover({ article, large = false }: { article: Article; large?: boolean }) {
  const [a, b, c, d] = palettes[Number(article.id) % palettes.length];
  const lines = article.snippet.split("\n").slice(0, large ? 7 : 5);
  return (
    <div
      className="relative aspect-[405/228] w-full overflow-hidden rounded-[12px] bg-[#e7e6e2]"
      style={{ containerType: "inline-size" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(40% 60% at 92% 10%, ${a}cc, transparent 70%), radial-gradient(35% 55% at 70% 95%, ${c}b3, transparent 70%), radial-gradient(30% 50% at 100% 70%, ${b}b3, transparent 70%), radial-gradient(30% 40% at 55% 0%, ${d}80, transparent 70%)`,
        }}
      />
      <div className="absolute inset-0 flex justify-between gap-[4%] p-[6%]">
        <div className="flex w-[48%] flex-col">
          <span className="self-start rounded-full bg-white/80 px-2 py-[3px] font-mono text-[clamp(6px,1.6cqw,9px)] font-semibold uppercase tracking-[0.06em] text-ink-900">
            {article.category}
          </span>
          <p className="mt-auto text-[clamp(13px,5.6cqw,30px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink-900">
            {article.title}
          </p>
          <p className="mt-[6%] font-mono text-[clamp(5px,1.5cqw,8px)] text-ink-900/60">
            {article.publishedAt} · by Sumeet Paul
          </p>
          <p className="mt-[3%] font-mega text-[clamp(7px,2.4cqw,12px)] tracking-[0.02em] text-ink-900">FRONTEND LAB</p>
        </div>
        <div className="flex w-[48%] items-center">
          <div className="w-full overflow-hidden rounded-[6px] bg-[#16171a]/95 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)]">
            <div className="flex gap-[3px] border-b border-white/10 px-[6%] py-[4%]">
              <span className="size-[5px] rounded-full bg-white/25" />
              <span className="size-[5px] rounded-full bg-white/25" />
              <span className="size-[5px] rounded-full bg-white/25" />
            </div>
            <pre className="overflow-hidden px-[6%] py-[5%] font-mono text-[clamp(4.5px,1.45cqw,8px)] leading-[1.6] text-white/80">
              {lines.map((l, i) => (
                <span key={i} className="block truncate">
                  {l || " "}
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
