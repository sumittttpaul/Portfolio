"use client";

import MotionButton from "components/Photo/MotionButton";
import ChatResponse from "components/Chat/Response";
import ChatBubble from "components/Chat/Bubble";
import { useState } from "react";

const content = {
  introduction: [
    "introduction",
    "Hello, I am Sumeet Kumar Paul.",
    "I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.",
    "Always exploring ...",
  ],
  education: [
    "education",
    "I have obtained my college degree from Kalinga University.",
    "By independently pursuing web development, I have acquired a proficient understanding of website development and design. I utilized diverse online resources including :-",
    "• Google searches",
    "• YouTube tutorials",
    "• GitHub repositories",
    "• Stack Overflow discussions",
    "• Free online projects",
    "and insightful blog posts authored by experienced web developers to enhance my skills and knowledge in this field.",
  ],
  contact: [
    "contact",
    "Let's start a project together.",
    "sumitpaul.work@gmail.com",
    "+918794007993",
    "You can also connect with me on social media platforms.",
    "LinkedIn",
    "Instagram",
    "Facebook",
    "Twitter",
    "Thread",
  ],
};

export default function KnowMeChat({ device }: DeviceType) {
  const [Animate, setAnimate] = useState<AboutBubbleAnimateType>("nothing");
  const [Content, setContent] = useState<string[]>(content.introduction);
  const [Active, setActive] = useState<AboutOptionType>("Introduction");

  const onBubbleComplete = () => {
    if (Animate === "closed") {
      setContent((prev) => {
        if (Active === "Introduction") return content.introduction;
        if (Active === "Education") return content.education;
        if (Active === "Contact") return content.contact;
        else return prev;
      });
      setAnimate("open");
    }
  };

  const setActiveContent = (value: AboutOptionType) => {
    setActive((prev) => {
      if (prev === value) return prev;
      else {
        if (Animate === "open") setAnimate("closed");
        return value;
      }
    });
  };

  return (
    <section className="relative mt-10 flex h-auto w-full max-w-screen-max-size flex-col px-5 pb-10 screen-1410:mx-auto">
      <ChatResponse
        device={device}
        active={Active}
        setActive={setActiveContent}
      />
      <MotionButton
        device={device}
        onAnimationComplete={() => setAnimate("open")}
      />
      <ChatBubble
        device={device}
        animate={Animate}
        content={Content}
        onAnimationComplete={onBubbleComplete}
      />
    </section>
  );
}
