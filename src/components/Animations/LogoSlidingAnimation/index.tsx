import Image, { StaticImageData } from "next/image";
import style from "./style.module.css";

import NextJs_Logo from "../../../../public/images/companies/nextjs.png";
import React_Logo from "../../../../public/images/companies/react.png";
import Sanity_Logo from "../../../../public/images/companies/sanity.png";
import Firebase_Logo from "../../../../public/images/companies/firebase.png";
import Stripe_Logo from "../../../../public/images/companies/stripe.png";
import HTML_Logo from "../../../../public/images/companies/html.png";
import CSS_Logo from "../../../../public/images/companies/css.png";
import JavaScript_Logo from "../../../../public/images/companies/js.png";
import TypeScript_Logo from "../../../../public/images/companies/ts.png";
import NodeJs_Logo from "../../../../public/images/companies/nodejs.png";
import Mongodb_Logo from "../../../../public/images/companies/mongodb.png";
import MUI_Logo from "../../../../public/images/companies/mui.png";
import NextUI_Logo from "../../../../public/images/companies/nextui.png";
import Tailwind_Logo from "../../../../public/images/companies/tailwindcss.png";
import Clerk_Logo from "../../../../public/images/companies/clerk.png";
import Redux_Logo from "../../../../public/images/companies/redux.png";
import Stepzen_Logo from "../../../../public/images/companies/stepzen.png";
import GraphQL_Logo from "../../../../public/images/companies/graphql.png";

const companies_1 = [
  { label: "Nextjs", images: NextJs_Logo },
  { label: "React", images: React_Logo },
  { label: "Sanity", images: Sanity_Logo },
  { label: "Firebase", images: Firebase_Logo },
  { label: "Stripe", images: Stripe_Logo },
  { label: "Html", images: HTML_Logo },
  { label: "Javascript", images: JavaScript_Logo },
  { label: "Css", images: CSS_Logo },
  { label: "Nodejs", images: NodeJs_Logo },
  { label: "Typescript", images: TypeScript_Logo },
  { label: "Mongodb", images: Mongodb_Logo },
  { label: "Mui", images: MUI_Logo },
  { label: "Nextui", images: NextUI_Logo },
  { label: "Clerk", images: Clerk_Logo },
  { label: "Tailwind", images: Tailwind_Logo },
  { label: "Redux", images: Redux_Logo },
  { label: "Stepzen", images: Stepzen_Logo },
  { label: "Graphql", images: GraphQL_Logo },
];

const companies_2 = [
  { label: "Graphql", images: GraphQL_Logo },
  { label: "Stepzen", images: Stepzen_Logo },
  { label: "Redux", images: Redux_Logo },
  { label: "Tailwind", images: Tailwind_Logo },
  { label: "Clerk", images: Clerk_Logo },
  { label: "Nextui", images: NextUI_Logo },
  { label: "Mui", images: MUI_Logo },
  { label: "Mongodb", images: Mongodb_Logo },
  { label: "Typescript", images: TypeScript_Logo },
  { label: "Nodejs", images: NodeJs_Logo },
  { label: "Css", images: CSS_Logo },
  { label: "Javascript", images: JavaScript_Logo },
  { label: "Html", images: HTML_Logo },
  { label: "Stripe", images: Stripe_Logo },
  { label: "Firebase", images: Firebase_Logo },
  { label: "Sanity", images: Sanity_Logo },
  { label: "React", images: React_Logo },
  { label: "Nextjs", images: NextJs_Logo },
];

const companies_3 = [
  { label: "Typescript", images: TypeScript_Logo },
  { label: "Nodejs", images: NodeJs_Logo },
  { label: "Nextui", images: NextUI_Logo },
  { label: "Redux", images: Redux_Logo },
  { label: "Mongodb", images: Mongodb_Logo },
  { label: "Javascript", images: JavaScript_Logo },
  { label: "Nextjs", images: NextJs_Logo },
  { label: "Clerk", images: Clerk_Logo },
  { label: "React", images: React_Logo },
  { label: "Stepzen", images: Stepzen_Logo },
  { label: "Tailwind", images: Tailwind_Logo },
  { label: "Sanity", images: Sanity_Logo },
  { label: "Mui", images: MUI_Logo },
  { label: "Css", images: CSS_Logo },
  { label: "Graphql", images: GraphQL_Logo },
  { label: "Firebase", images: Firebase_Logo },
  { label: "Stripe", images: Stripe_Logo },
  { label: "Html", images: HTML_Logo },
];

export default function LogoSlidingAnimation() {
  return (
    <div className="my-14 flex w-full flex-col space-y-5 sm:space-y-14">
      <LogoSliding companies={companies_1} animation={1} />
      <LogoSliding companies={companies_3} animation={2} />
      <LogoSliding companies={companies_2} animation={3} />
    </div>
  );
}

const LogoSliding = ({
  companies,
  animation,
}: {
  companies: { label: string; images: StaticImageData }[];
  animation: number;
}) => {
  return (
    <div className="flex w-full">
      <div className={style.logo}>
        <div
          className={`${style.logoSlide} ${
            animation == 1
              ? style.animation1
              : animation == 2
                ? style.animation2
                : style.animation3
          }`}
        >
          {companies.map((company, index) => {
            return (
              <Logos
                key={`Company_Logo_${index}`}
                src={company.images}
                label={company.label}
              />
            );
          })}
        </div>
        <div
          className={`${style.logoSlide} ${
            animation == 1
              ? style.animation1
              : animation == 2
                ? style.animation2
                : style.animation3
          }`}
        >
          {companies.map((company, index) => {
            return (
              <Logos
                key={`Company_Logo_${index}`}
                src={company.images}
                label={company.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Logos = ({ src, label }: { label: string; src: StaticImageData }) => {
  return (
    <span className="mx-10 flex items-center space-x-1 sm:mx-16">
      <Image
        height={33}
        width={33}
        src={src}
        alt="company logo"
        className="block aspect-square min-h-[33x] min-w-[33px] object-contain"
      />
      <span className="font-pacifico text-[1.5em] text-black sm:text-[2em]">
        {label}
      </span>
    </span>
  );
};
