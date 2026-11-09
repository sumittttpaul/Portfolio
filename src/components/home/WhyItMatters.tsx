import CenterHead from "components/ui/CenterHead";

const points = [
  {
    title: "Seen in seconds",
    text: "Visitors decide quickly whether to stay. Clear structure and strong visuals earn that attention.",
    icon: <path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  },
  {
    title: "Trust at a glance",
    text: "A polished site tells people you take your own work seriously, before they read a word.",
    icon: <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3zM9 12l2 2 4-4" />,
  },
  {
    title: "Nothing in the way",
    text: "When a site is easy to use, people simply do what they came to do and come back later.",
    icon: <path d="M4 12h16M14 6l6 6-6 6" />,
  },
  {
    title: "Ready to grow",
    text: "New pages and features slot in as your business changes, without starting over.",
    icon: <path d="M4 19l6-6 4 4 6-8M15 9h5v5" />,
  },
];

export default function WhyItMatters() {
  return (
    <section aria-label="Why your website matters" className="py-16">
      <div className="container-site">
        <CenterHead
          eyebrow="Why it matters"
          title={"Your website is your\nfirst impression"}
          text="Long before anyone talks to you, your website has already told them who you are. It should say the right thing."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-[60px] xl:grid-cols-4">
          {points.map((p) => (
            <li key={p.title} className="rounded-2xl bg-ink-800 p-6 transition-colors duration-300 hover:bg-ink-750">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/[0.06] text-bone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {p.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-[20px] font-medium leading-[23px] text-bone">{p.title}</h3>
              <p className="mt-2.5 font-inter text-[14px] leading-[20.3px] text-mute">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
