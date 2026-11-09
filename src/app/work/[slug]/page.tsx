import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "components/ui/Reveal";
import Cta from "components/home/Cta";
import ProjectGallery from "components/work/ProjectGallery";
import { getProject, projects } from "content/projects";
import { site } from "content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found", robots: { index: false } };
  return {
    title: p.name === p.type ? p.name : `${p.name}: ${p.type}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${p.slug}`,
      title: `${p.name} • ${site.name}`,
      description: p.summary,
      images: [{ url: p.cover, alt: p.name }],
    },
    twitter: { card: "summary_large_image", images: [p.cover] },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const brief = [
    { label: "Goal", text: project.goal },
    { label: "Focus", text: project.focus },
    { label: "Delivered", text: project.delivered },
  ];

  return (
    <>
      <section className="container-site pb-12 pt-[140px] text-center sm:pt-[150px]">
        <Reveal y={10}>
          <Link href="/work" className="eyebrow transition-colors hover:text-bone">
            Works / {project.type}
          </Link>
        </Reveal>
        <SplitText
          as="h1"
          text={project.headline}
          className="mx-auto mt-5 max-w-[1100px] text-display-xl font-medium text-bone"
        />
      </section>

      <Reveal className="container-site" y={40}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] sm:aspect-[16/8] sm:rounded-[20px]" style={{ backgroundColor: project.tint }}>
          <Image src={project.cover} alt={`${project.name} cover`} fill priority sizes="(min-width: 1600px) 1520px, 100vw" className="object-cover" />
        </div>
      </Reveal>

      <section className="container-site grid gap-10 py-16 sm:py-[110px] lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="text-heading-40 font-medium text-bone">About</h2>
          </Reveal>
          {project.about.map((p, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <p className="mt-6 max-w-[820px] font-inter text-[18px] leading-[28px] text-pale">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-6 rounded-[14px] bg-ink-800 p-6">
            <div>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-1.5 text-[15px] leading-[21px] text-bone">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">Type</dt>
              <dd className="mt-1.5 text-[15px] leading-[21px] text-bone">{project.type}</dd>
            </div>
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-1.5 text-[15px] leading-[21px] text-bone">Design &amp; development</dd>
            </div>
            {project.stack && (
              <div className="col-span-2">
                <dt className="eyebrow">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-full bg-ink-700 px-2.5 py-1 text-[12px] text-bone/80">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </section>

      <section aria-label="The brief" className="container-site pb-16 sm:pb-[110px]">
        <ul className="grid gap-3 md:grid-cols-3">
          {brief.map((b, i) => (
            <Reveal as="li" key={b.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl bg-ink-800 p-6 sm:p-8">
                <p className="eyebrow">{b.label}</p>
                <p className="mt-10 text-[clamp(1.25rem,1.7vw,1.5rem)] font-medium leading-[1.25] tracking-[-0.02em] text-bone">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-label="Highlights" className="container-site pb-16 sm:pb-[110px]">
        <Reveal>
          <p className="eyebrow">Highlights</p>
          <h2 className="mt-4 text-heading-40 font-medium text-bone">What shaped the experience</h2>
        </Reveal>
        <ol className="mt-10 grid md:grid-cols-2 md:gap-x-16">
          {project.highlights.map((h, i) => (
            <Reveal as="li" key={h.title} delay={(i % 2) * 0.05}>
              <div className="flex gap-6 border-t border-white/10 py-7">
                <span className="w-6 shrink-0 pt-1 text-[13px] tabular-nums text-dim">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[20px] font-medium leading-[23px] text-bone">{h.title}</h3>
                  <p className="mt-2.5 font-inter text-[16px] leading-[23.2px] text-mute">{h.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <ProjectGallery title={project.name} images={project.gallery} />

      <section aria-label="Next project" className="container-site py-24 sm:py-[110px]">
        <Link href={`/work/${next.slug}`} className="group grid items-center gap-8 rounded-[20px] bg-ink-800 p-3 md:grid-cols-[1fr_1.2fr]">
          <div className="px-4 py-6 sm:px-8">
            <p className="eyebrow">Next project</p>
            <p className="mt-4 text-heading-40 font-medium text-bone">{next.name}</p>
            <p className="body-copy-sm mt-3 max-w-[380px]">{next.summary}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-bone">
              See work
              <span className="transition-transform duration-500 ease-expo group-hover:translate-x-1">→</span>
            </span>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[14px]" style={{ backgroundColor: next.tint }}>
            <Image
              src={next.cover}
              alt=""
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="hover-zoom object-cover"
            />
          </div>
        </Link>
      </section>
      <Cta />
    </>
  );
}
