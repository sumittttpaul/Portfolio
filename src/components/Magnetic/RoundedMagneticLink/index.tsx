"use client";

import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));
const Mobile = dynamic(() => import("./Responsive").then((f) => f.Mobile));

export default function RoundedMagneticDiv({
  href,
  children,
  className,
  device,
}: LinkAttributesType & DeviceType) {
  const { isMobile, isDesktop } = device;

  if (isMobile)
    return (
      <Mobile href={href} className={className}>
        {children}
      </Mobile>
    );

  if (isDesktop)
    return (
      <Desktop href={href} className={className}>
        {children}
      </Desktop>
    );
}
