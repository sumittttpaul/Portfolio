"use client";

import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import SocialCards from "components/SocialCards";
import { useScroll } from "framer-motion";
import { useRef } from "react";

import FacebookImage from "../../../public/images/socials/facebook_profile.png";
import InstagramImage from "../../../public/images/socials/instagram_profile.png";
import TwitterImage from "../../../public/images/socials/twitter_profile.png";
import LinkedinImage from "../../../public/images/socials/linkedin_profile.png";
import WhatsappImage from "../../../public/images/socials/whatsapp_profile.png";

export default function SocialHandles() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const actualLength = socialHandlesData.length - 1;

  return (
    <section className="relative flex w-full flex-col items-center justify-center pt-[5em] lg:pb-[5em]">
      <h1 className="sticky top-[100px] mb-[100px] flex flex-col px-5 text-start text-[32px] font-semibold leading-[1.5] tracking-[-0.2px] text-almost-black xs:text-[36px] sm:text-[46px] sm:leading-[1.2] screen-1000:px-0 lg:px-0 lg:text-[56px] xl:text-[64px]">
        <TextInViewAnimation Animation="Word">
          Connect&nbsp;with&nbsp;Me
        </TextInViewAnimation>
        <TextInViewAnimation Animation="Word" className="ml-10 sm:ml-2.5">
          on&nbsp;Social&nbsp;Media!
        </TextInViewAnimation>
      </h1>
      <div ref={container} className="relative px-5">
        {socialHandlesData.map((data, i) => {
          const targetScale =
            i == actualLength ? 1 : 1 - (actualLength - i) * 0.05;
          return (
            <SocialCards
              i={i}
              key={`social_cards_${i}`}
              {...data}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

const socialHandlesData = [
  {
    src: WhatsappImage,
    href: "https://wa.me/+918794007993",
  },
  {
    src: LinkedinImage,
    href: "https://www.linkedin.com/in/sumitttpaul/",
  },
  {
    src: InstagramImage,
    href: "https://www.instagram.com/_sumitttpaul",
  },
  {
    src: TwitterImage,
    href: "https://twitter.com/sumitttkp16",
  },
  {
    src: FacebookImage,
    href: "https://www.facebook.com/sumitttpaul",
  },
];
