export const site = {
  url: "https://sumitttpaul.vercel.app",
  name: "Sumeet Kumar Paul",
  shortName: "Sumeet Paul",
  role: "Senior Frontend Engineer",
  location: "India",
  timeZone: "Asia/Kolkata",
  email: "sumitpaul.work@gmail.com",
  description:
    "Senior frontend engineer from India building modern web applications, frontend experiences and complex software products with Next.js, React and TypeScript.",
  photo: "/images/sumit_photo.png",
  avatar: "/images/sumit_small_photo.png",
} as const;

export type Social = { label: string; href: string };

export const socials: Social[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumitttpaul/" },
  { label: "GitHub", href: "https://github.com/sumittttpaul" },
  { label: "Instagram", href: "https://www.instagram.com/sumitttpaul_" },
  { label: "X / Twitter", href: "https://x.com/sumitttpaul_" },
  { label: "Threads", href: "https://www.threads.net/@_sumitttpaul" },
  { label: "Facebook", href: "https://www.facebook.com/sumitttpaul" },
];

export const whatsapp = "https://wa.me/+918794007993";

export const nav = [
  { label: "Works", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

/** Tools listed on the original portfolio, with their logo assets. */
export const tools = [
  { name: "Next.js", note: "React framework", logo: "/images/companies/nextjs.png" },
  { name: "React", note: "UI library", logo: "/images/companies/react.png" },
  { name: "TypeScript", note: "Typed JavaScript", logo: "/images/companies/ts.png" },
  { name: "JavaScript", note: "Language of the web", logo: "/images/companies/js.png" },
  { name: "Node.js", note: "JavaScript runtime", logo: "/images/companies/nodejs.png" },
  { name: "HTML", note: "Markup", logo: "/images/companies/html.png" },
  { name: "CSS", note: "Styling", logo: "/images/companies/css.png" },
  { name: "Tailwind CSS", note: "Utility-first CSS", logo: "/images/companies/tailwindcss.png" },
  { name: "Redux", note: "State management", logo: "/images/companies/redux.png" },
  { name: "GraphQL", note: "API query language", logo: "/images/companies/graphql.png" },
  { name: "MongoDB", note: "Document database", logo: "/images/companies/mongodb.png" },
  { name: "Firebase", note: "App platform", logo: "/images/companies/firebase.png" },
  { name: "Stripe", note: "Payments", logo: "/images/companies/stripe.png" },
  { name: "Sanity", note: "Headless CMS", logo: "/images/companies/sanity.png" },
  { name: "Clerk", note: "Authentication", logo: "/images/companies/clerk.png" },
  { name: "StepZen", note: "GraphQL APIs", logo: "/images/companies/stepzen.png" },
  { name: "MUI", note: "Component library", logo: "/images/companies/mui.png" },
  { name: "NextUI", note: "Component library", logo: "/images/companies/nextui.png" },
] as const;
