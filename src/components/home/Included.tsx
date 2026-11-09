import { GradientButton } from "components/ui/Button";
import { Reveal, SplitText } from "components/ui/Reveal";

const items = [
  { title: "Found on search", text: "Page titles, descriptions and share previews set up properly." },
  { title: "Open to everyone", text: "Keyboard support, readable contrast and clear labels." },
  { title: "Quick to load", text: "Images compressed and served at the right size." },
  { title: "Forms that deliver", text: "Enquiries reach your inbox, with a copy for the sender." },
  { title: "Code you own", text: "Clean, typed code that any developer can pick up." },
  { title: "A proper handover", text: "Deployed, explained and ready for you to run." },
];

export default function Included() {
  return (
    <section aria-label="Included as standard" className="py-16">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-[12px] uppercase leading-[15.6px] text-pale">Included as standard</p>
          <SplitText text={"The details nobody notices,\nuntil they're missing"} className="mt-6 text-display-md font-medium text-bone" />
          <p className="mt-6 max-w-[520px] font-inter text-[17px] leading-[24.65px] text-mute">
            A website is more than what you see on the screen. These come with every project, so you never have to ask
            for them.
          </p>
          <div className="mt-8">
            <GradientButton href="/contact" size="md" hoverText="Say hello" className="w-full sm:w-auto [&>span]:w-full">
              Talk about your project
            </GradientButton>
          </div>
        </Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 0.06} className="flex gap-3 rounded-2xl bg-ink-800 p-5">
              <svg className="mt-0.5 shrink-0 text-emerald-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5L20 7" />
              </svg>
              <div>
                <h3 className="text-[16px] font-medium leading-[20px] text-bone">{item.title}</h3>
                <p className="mt-1.5 font-inter text-[14px] leading-[20.3px] text-mute">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
