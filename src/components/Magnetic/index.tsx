"use client";

import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));

export default function Magnetic({
  children,
  device,
}: {
  children: React.ReactElement;
} & DeviceType) {
  const { isMobile, isDesktop } = device;
  if (isMobile) return <>{children}</>;
  if (isDesktop) return <Desktop>{children}</Desktop>;
}
