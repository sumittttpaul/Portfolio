"use client";

import ChatResponse from "components/Chat/Response";
import MotionButton from "components/Photo/MotionButton";
import ChatBubble from "components/Chat/Bubble";
import { useState } from "react";

const content = {
  introduction: [
    "Hello, I am Sumeet Kumar Paul.",
    " I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.",
    "Always exploring ...",
  ],
  education: ["s", "p", "s"],
  contact: ["s", "p", "s"],
};

export default function KnowMeChat({ device }: DeviceType) {
  const [Active, setActive] = useState<AboutOptionType>("Introduction");
  const [Content, setContent] = useState<string[]>(content.introduction);
  const [Animate, setAnimate] = useState<"open" | "closed" | "nothing">(
    "nothing",
  );
  const { isMobile } = device;

  const onBubbleComplete = () => {
    if (Animate === "closed") {
      if (Active === "Introduction") setContent(content.introduction);
      if (Active === "Education") setContent(content.education);
      if (Active === "Contact") setContent(content.contact);
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
    <section className="relative mx-0 mt-10 flex h-auto w-full max-w-screen-screen-1410 flex-col px-5 pb-10 screen-1410:mx-auto">
      <ChatBubble
        animate={Animate}
        content={Content}
        onAnimationComplete={onBubbleComplete}
      />
      <MotionButton
        device={device}
        onAnimationComplete={() => setAnimate("open")}
      />
      <ChatResponse
        device={device}
        active={Active}
        setActive={setActiveContent}
      />
    </section>
  );
}
