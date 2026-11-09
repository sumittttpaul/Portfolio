import Hero from "components/home/Hero";
import Intro from "components/home/Intro";
import Toolbox from "components/home/Toolbox";
import Capabilities from "components/home/Capabilities";
import About from "components/home/About";
import Process from "components/home/Process";
import Note from "components/home/Note";
import BlogPreview from "components/home/BlogPreview";
import Faq from "components/home/Faq";
import Cta from "components/home/Cta";
import HowIHelp from "components/home/HowIHelp";
import ProjectSteps from "components/home/ProjectSteps";
import Fit from "components/home/Fit";
import WhatYouGet from "components/home/WhatYouGet";
import WhyItMatters from "components/home/WhyItMatters";
import Included from "components/home/Included";
import WebsiteTypes from "components/home/WebsiteTypes";
import Approach from "components/home/Approach";
import WorksStack from "components/work/WorksStack";
import SectionHeading from "components/ui/SectionHeading";
import { LightButton } from "components/ui/Button";
import { Reveal } from "components/ui/Reveal";
import { projects } from "content/projects";
import { site, socials } from "content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  image: `${site.url}${site.photo}`,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  alumniOf: "Kalinga University",
  sameAs: socials.map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      {/* Everything after the hero scrolls up over it */}
      <div className="relative z-10 bg-ink-850">
        <Intro />
        <Toolbox />
        <section aria-label="Selected works" className="pb-20 pt-6 sm:pb-24 sm:pt-16">
          <div className="container-site mb-8 sm:mb-24">
            <SectionHeading eyebrow="Works" title="Selected works" align="center" />
          </div>
          <WorksStack projects={projects} />
          <Reveal className="container-site mt-6 flex justify-center">
            <LightButton href="/work" hoverText="Explore projects" className="w-full sm:w-auto">
              View all works
            </LightButton>
          </Reveal>
        </section>
        {/* Why a website matters, then what I offer */}
        <WhyItMatters />
        <div className="h-8 sm:h-12" />
        <HowIHelp />
        <WhatYouGet />
        <WebsiteTypes />
        <div className="h-8 sm:h-12" />
        <Capabilities />
        <Included />
        {/* How I work */}
        <Approach />
        <div className="h-8 sm:h-12" />
        <Process />
        <div className="h-3 sm:h-4" />
        <ProjectSteps />
        {/* Who I am, then whether we fit */}
        <About />
        <Note />
        <Fit />
        <BlogPreview />
        <Faq />
        <Cta />
      </div>
    </>
  );
}
