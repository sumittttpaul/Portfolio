"use client";

import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));
const Mobile = dynamic(() => import("./Responsive").then((f) => f.Mobile));

export default function RoundedMagneticButton({
  children,
  onClick,
  className,
  device,
}: ButtonAttributesType & DeviceType) {
  const { isMobile, isDesktop } = device;

  if (isMobile)
    return (
      <Mobile onClick={onClick} className={className}>
        {children}
      </Mobile>
    );

  if (isDesktop)
    return (
      <Desktop onClick={onClick} className={className}>
        {children}
      </Desktop>
    );
}
