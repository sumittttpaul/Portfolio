"use client";

import dynamic from "next/dynamic";

const KnowMeChat = dynamic(() => import("interface/about/KnowMeChat"));
const Explanation = dynamic(() => import("interface/about/Explanation"));

export default function LazyLoadComponents({ device }: DeviceType) {
  return (
    <>
      <KnowMeChat device={device} />
      <Explanation device={device} />
    </>
  );
}
