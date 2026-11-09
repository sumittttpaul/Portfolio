export type Project = {
  slug: string;
  name: string;
  /** Headline used on the case-study page. */
  headline: string;
  year: string;
  type: string;
  summary: string;
  about: string[];
  stack?: string[];
  cover: string;
  /** Background tint used behind the card while the image loads. */
  tint: string;
  gallery: { src: string; alt: string }[];
  goal: string;
  focus: string;
  delivered: string;
  highlights: { title: string; text: string }[];
};

const range = (folder: string, count: number, label: string) =>
  Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return { src: `/images/work/${folder}/${n}.png`, alt: `${label} screen ${n}` };
  });

export const projects: Project[] = [
  {
    slug: "portfolio",
    name: "Portfolio",
    headline: "Sumeet Kumar Paul. Personal portfolio website",
    year: "2024",
    type: "Portfolio",
    summary:
      "My personal portfolio: a motion-driven Next.js site with route transitions, smooth scrolling and a working contact flow.",
    about: [
      "A personal website built to present my work and make it easy to get in touch. The site was designed and developed from scratch, with every page sharing one motion language.",
      "It uses the Next.js App Router with server actions for the contact form, Framer Motion and GSAP for page and scroll animation, and smooth scrolling throughout.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    goal: "One place where visitors can see my work and reach me without friction.",
    focus: "A single motion language across every route, from the first load to the contact form.",
    delivered: "A complete personal site with landing, work, about and contact pages.",
    highlights: [
      { title: "Route transitions", text: "Each navigation is covered by a curved panel that names the destination." },
      { title: "Smooth scrolling", text: "Scroll position drives the reveals, so long pages read as one continuous piece." },
      { title: "Working contact flow", text: "Enquiries are sent by email through a server action, with no separate backend to run." },
      { title: "Route-aware header", text: "The navigation adapts its colours to the page and screen size it sits on." },
    ],
    cover: "/media/portfolio-cover.webp",
    tint: "#373737",
    gallery: [
      { src: "/images/work/portfolio/01.png", alt: "Portfolio landing page" },
      { src: "/images/work/01.png", alt: "Portfolio overview" },
    ],
  },
  {
    slug: "emotion",
    name: "Emotion",
    headline: "Emotion. E-commerce store",
    year: "2023",
    type: "E-commerce Store",
    summary:
      "An e-commerce storefront with a carousel hero, trending-this-week rails, category browsing and seasonal collections.",
    about: [
      "Emotion is an online store designed around discovery. The home page opens on a full-width carousel, followed by a ranked Top 5 trends of the week and quick category shortcuts.",
      "Below the fold, seasonal collections are presented as large product cards with pricing, so shoppers can move from browsing to a product in one step.",
    ],
    goal: "Help shoppers find something they like before they ever need to search.",
    focus: "Discovery first: trends, categories and seasonal edits all reachable from the home page.",
    delivered: "A storefront experience from the opening carousel down to individual product cards.",
    highlights: [
      { title: "Opening carousel", text: "A full-width hero gives each campaign the whole screen." },
      { title: "Top 5 of the week", text: "A ranked rail shows at a glance what is popular right now." },
      { title: "Category shortcuts", text: "Quick routes into the catalogue for people who know what they want." },
      { title: "Seasonal collections", text: "Large cards with pricing shorten the step from browsing to a product." },
    ],
    cover: "/media/emotion-cover.webp",
    tint: "#344148",
    gallery: [
      ...range("emotion", 5, "Emotion"),
      { src: "/images/work/04.png", alt: "Emotion home page hero" },
    ],
  },
  {
    slug: "agewear-lifestyle",
    name: "Agewear Lifestyle",
    headline: "Agewear Lifestyle. Clothing brand",
    year: "2022",
    type: "Clothing Brand",
    summary:
      "A storefront for a clothing brand, led by a cinematic hero banner with popular searches and top-category shortcuts.",
    about: [
      "Agewear Lifestyle is a clothing brand storefront. The layout leads with a cinematic hero banner and keeps popular searches and top categories one click away.",
      "Product rows below the hero carry the same visual tone, so the brand feels consistent from the first screen to the catalogue.",
    ],
    goal: "Give a clothing label a storefront with the presence of a campaign.",
    focus: "A strong first screen that still keeps the catalogue within easy reach.",
    delivered: "A brand-led home page with search prompts, categories and product rows.",
    highlights: [
      { title: "Cinematic hero", text: "A large banner sets the tone before any product appears." },
      { title: "Popular searches", text: "Common requests sit beside the hero, ready for a single click." },
      { title: "Top categories", text: "The main parts of the range are visible without opening a menu." },
      { title: "Consistent product rows", text: "Listings carry the visual tone of the banner above them." },
    ],
    cover: "/media/agewear-cover.webp",
    tint: "#483C32",
    gallery: [
      { src: "/images/work/clothing/01.png", alt: "Agewear Lifestyle home page" },
    ],
  },
  {
    slug: "authentication",
    name: "Authentication",
    headline: "Authentication. Sign-in experience",
    year: "2021",
    type: "Brand Project",
    summary:
      "A complete account sign-in flow for the Emotion brand: phone and email sign-in, one-time passwords and account setup.",
    about: [
      "A brand project covering the full sign-in journey for Emotion accounts. Users can sign in with a phone number or email, confirm with a one-time password and finish setting up their account.",
      "The flow was designed screen by screen, 25 in total, covering every state from the first prompt to errors and confirmation.",
    ],
    goal: "Get people into their account with as little effort as possible.",
    focus: "Every state of the journey, not only the path where everything goes right.",
    delivered: "25 designed screens, from the first prompt through to account setup.",
    highlights: [
      { title: "Phone or email", text: "People start with whichever identifier they have to hand." },
      { title: "One-time passwords", text: "Confirmation by code, with no password to remember." },
      { title: "Account setup", text: "New users finish their profile as part of the same flow." },
      { title: "Errors and confirmation", text: "Each failure and success has its own designed screen." },
    ],
    cover: "/media/authentication-cover.webp",
    tint: "#6E8FB5",
    gallery: range("authentication", 25, "Authentication"),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
