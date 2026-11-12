import ArticleCard from "components/blog/ArticleCard";
import SectionHeading from "components/ui/SectionHeading";
import { LightButton } from "components/ui/Button";
import { Reveal } from "components/ui/Reveal";
import { getArticles } from "lib/blog";

export default function BlogPreview() {
  const articles = getArticles().slice(0, 3);
  return (
    <section aria-label="Blog" className="py-20 sm:py-[110px]">
      <div className="container-site">
        <SectionHeading eyebrow="Blog" title={"Notes on real-world\nfrontend engineering"} align="center" />
      </div>
      {/* Swipeable row on phones and tablets, three-column grid on desktop */}
      <ul
        className="mx-auto mt-10 flex max-w-site snap-x snap-mandatory scroll-pl-[18px] gap-4 overflow-x-auto px-[18px] pb-2 sm:scroll-pl-9 [scrollbar-width:none] sm:mt-14 sm:px-9 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-y-12 lg:overflow-visible xl:px-4 [&::-webkit-scrollbar]:hidden"
      >
        {articles.map((a, i) => (
          <Reveal as="li" key={a.slug} delay={i * 0.06} className="w-[82%] shrink-0 snap-start sm:w-[58%] lg:w-auto">
            <ArticleCard article={a} />
          </Reveal>
        ))}
      </ul>
      <Reveal className="container-site mt-10 flex justify-center sm:mt-14">
        <LightButton href="/blog" hoverText="Read the blog" className="w-full sm:w-auto">
          View all articles
        </LightButton>
      </Reveal>
    </section>
  );
}
