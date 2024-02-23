"use client";

import dynamic from "next/dynamic";

const TextHoverMask = dynamic(() => import("components/TextHoverMask"));
const TextScrollOpacity = dynamic(() => import("components/TextScrollOpacity"));

const content =
  "My adeptness in both design and development equips me to conceive, plan, and execute comprehensive websites, effectively blending creativity with technical proficiency. This unique skill set allows me to deliver exceptional projects that not only meet but exceed client expectations, setting me apart as a valuable asset in the digital landscape.";

export default function Explanation({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <section className="relative flex h-auto w-full flex-col items-center justify-center">
      {isDesktop && <TextHoverMask content={content} />}
      {isMobile && <TextScrollOpacity content={content} />}
    </section>
  );
}
