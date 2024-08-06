"use client";

import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import SocialCards from "components/SocialCards";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Over all social handles
import FacebookImage from "../../../public/images/socials/facebook_profile.png";
import InstagramImage from "../../../public/images/socials/instagram_profile.png";
import TwitterImage from "../../../public/images/socials/twitter_profile.png";
import LinkedinImage from "../../../public/images/socials/linkedin_profile.png";
import WhatsappImage from "../../../public/images/socials/whatsapp_profile.png";

export default function SocialHandles() {
  const [sizes, setSizes] = useState({ width: 0, height: 0 });
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const actualLength = socialHandlesData.length - 1;

  useEffect(() => {
    setSizes((prev) => {
      if (typeof window === "undefined") return prev;
      return { width: window.innerWidth, height: window.innerHeight };
    });
  }, []);

  return (
    <section
      ref={container}
      className="relative flex w-full flex-col items-center justify-center px-5 pb-[10vh] pt-[5em] xs:pb-[0vh] sm:pb-[10vh] screen-2k:pb-[20vh]"
    >
      <h1 className="sticky top-[12.5vh] mb-[40px] flex flex-col text-start text-[32px] font-semibold leading-[1.5] tracking-[-0.2px] text-almost-black xs:text-[36px] sm:top-[15vh] sm:mb-[80px] sm:text-[46px] sm:leading-[1.2] lg:text-[56px] xl:text-[64px] screen-2k:top-[20vh]">
        <TextInViewAnimation Animation="Word">
          Connect&nbsp;with&nbsp;Me
        </TextInViewAnimation>
        <TextInViewAnimation Animation="Word" className="ml-10 sm:ml-2.5">
          on&nbsp;Social&nbsp;Media!
        </TextInViewAnimation>
      </h1>
      {socialHandlesData.map((data, i) => {
        const targetScale =
          i == actualLength ? 1 : 1 - (actualLength - i) * 0.05;
        return (
          <SocialCards
            i={i}
            {...data}
            range={[i * 0.2, 1]}
            targetScale={targetScale}
            key={`social_cards_${i}`}
            progress={scrollYProgress}
          />
        );
      })}
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
    href: "https://www.instagram.com/sumitttpaul_",
  },
  {
    src: TwitterImage,
    href: "https://x.com/sumitttpaul_",
  },
  {
    src: FacebookImage,
    href: "https://www.facebook.com/sumitttpaul",
  },
];
