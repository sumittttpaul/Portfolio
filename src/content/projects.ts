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
    cover: "/media/emotion-cover.webp",
    tint: "#344148",
    gallery: [
      ...range("emotion", 5, "Emotion"),
      { src: "/images/work/04.png", alt: "Emotion home page hero" },
      { src: "/images/work/06.png", alt: "Emotion trending collections" },
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
    cover: "/media/agewear-cover.webp",
    tint: "#483C32",
    gallery: [
      { src: "/images/work/clothing/01.png", alt: "Agewear Lifestyle home page" },
      { src: "/images/work/03.png", alt: "Agewear Lifestyle overview" },
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
    cover: "/media/authentication-cover.webp",
    tint: "#6E8FB5",
    gallery: range("authentication", 25, "Authentication"),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
