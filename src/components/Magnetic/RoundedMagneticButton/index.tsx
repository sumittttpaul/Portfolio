"use client";

import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));
const Mobile = dynamic(() => import("./Responsive").then((f) => f.Mobile));

export default function RoundedMagneticButton({
  device,
  type,
  onClick,
  children,
  className,
  name,
}: ButtonAttributesType & DeviceType) {
  const { isMobile, isDesktop } = device;

  if (isMobile)
    return (
      <Mobile name={name} type={type} onClick={onClick} className={className}>
        {children}
      </Mobile>
    );

  if (isDesktop)
    return (
      <Desktop name={name} type={type} onClick={onClick} className={className}>
        {children}
      </Desktop>
    );
}
