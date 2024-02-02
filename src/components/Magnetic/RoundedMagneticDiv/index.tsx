"use client";

import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));
const Mobile = dynamic(() => import("./Responsive").then((f) => f.Mobile));

export default function RoundedMagneticDiv({
  children,
  className,
  device,
}: DivAttributesType & DeviceType) {
  const { isMobile, isDesktop } = device;

  if (isMobile) return <Mobile className={className}>{children}</Mobile>;

  if (isDesktop) return <Desktop className={className}>{children}</Desktop>;
}
