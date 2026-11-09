import type { Metadata } from "next";
import { Reveal, SplitText } from "components/ui/Reveal";
import BlogIndex from "components/blog/BlogIndex";
import { getArticles } from "lib/blog";

const description =
  "A collection of real-world frontend edge cases, systems engineering and architectural patterns, bridging the gap between feature implementation and scalable architecture.";

export const metadata: Metadata = {
  title: "Blog: Frontend Lab",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Frontend Lab • Sumeet Kumar Paul",
    description,
    images: ["https://res.cloudinary.com/frontendddlab/image/upload/v1770710099/poster_nrye8c.png"],
  },
};

export default function BlogPage() {
  const articles = getArticles();
  return (
    <section className="container-site pb-10 pt-[150px] sm:pt-[170px]">
      <div className="mb-16 flex flex-col items-center text-center sm:mb-20">
        <Reveal y={10}>
          <p className="eyebrow">Blog · Frontend Lab</p>
        </Reveal>
        <SplitText
          as="h1"
          text={"Frontend edge cases,\nsolved in the open"}
          className="mt-5 text-display-blog font-medium text-bone"
        />
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-[620px] font-inter text-[18px] leading-[25.2px] text-bone">{description}</p>
        </Reveal>
      </div>
      <BlogIndex articles={articles} />
    </section>
  );
}
