"use client";

import dynamic from "next/dynamic";

const Projects = dynamic(() => import("interface/work/Projects"));
const LetsConnect = dynamic(() => import("interface/work/LetsConnect"));

export default function LazyLoadComponents({ device }: DeviceType) {
  return (
    <>
      <Projects device={device} />
      <LetsConnect device={device} />
    </>
  );
}
