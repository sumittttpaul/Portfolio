import Image from "next/image";
import { Reveal, SplitText } from "components/ui/Reveal";
import { site } from "content/site";

const steps = [
  { title: "Understanding your goals", text: "We talk through who the product is for, what it needs to do and what success looks like." },
  { title: "Structure and flows", text: "I map the pages and user flows so every screen has a clear job before design starts." },
  { title: "Interface design", text: "I design the key screens for desktop, tablet and mobile, including the states people actually hit." },
  { title: "Frontend build", text: "I build the interface in Next.js, React and TypeScript with reusable, typed components." },
  { title: "Motion and polish", text: "Transitions, scroll effects and small details, tuned until they feel right on every device." },
  { title: "Launch", text: "We check responsiveness, accessibility and SEO basics, then ship it." },
];

const chip = "flex h-11 items-center rounded-xl border border-white/10 bg-[#1C1D1F] px-4 text-[14px] leading-[19.6px] text-[#D6D6D6]";

export default function ProjectSteps() {
  return (
    <section aria-label="How I run a project" className="mx-2 rounded-[16px] bg-black px-[10px] py-16 sm:mx-4 sm:rounded-[20px] sm:px-9 sm:py-[100px]">
      <div className="mx-auto max-w-[1520px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:max-w-[760px]">
            <Reveal y={10}>
              <p className="text-[12px] uppercase leading-[15.6px] text-pale">My process</p>
            </Reveal>
            <SplitText
              as="h2"
              text={"How I run a project\nfrom start to finish"}
              className="mt-6 text-[clamp(2.25rem,4.6vw,3.5rem)] font-medium leading-none tracking-[-0.03em] text-white"
            />
          </div>
          <Reveal delay={0.1} className="lg:w-[460px]">
            <p className="font-inter text-[17px] leading-[24.65px] text-[#9B9B9B]">
              Six clear stages, so you always know what is happening and what comes next.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-wrap gap-2.5">
          <span className={`${chip} gap-2.5`}>
            <Image src={site.avatar} alt="" width={28} height={28} className="size-7 rounded-full object-cover" />
            {site.name}
          </span>
          <span className={`${chip} text-[20px] font-medium leading-7 text-white`}>Next.js · React · TypeScript</span>
          <span className={chip}>One point of contact</span>
        </Reveal>

        <p className="mt-4 text-[12px] font-medium uppercase leading-[15.6px] text-pale">How a project runs</p>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-[39px] xl:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 4) * 0.05}>
              <div className="h-full min-h-[220px] rounded-2xl border border-white/10 bg-[#141517] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] leading-[18.2px] text-soft">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rounded-full border border-white/10 px-2 py-[3px] text-[11px] uppercase leading-[15.4px] text-[#A9A9A9]">
                    Sumeet
                  </span>
                </div>
                <h3 className="mt-10 text-[20px] font-medium leading-[23px] text-white">{s.title}</h3>
                <p className="mt-2.5 font-inter text-[14px] leading-[20.3px] text-[#9B9B9B]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
