"use client";

import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));
const Mobile = dynamic(() => import("./Responsive").then((f) => f.Mobile));

export default function RoundedMagneticOption({
  name,
  label,
  active,
  device,
  onClick,
  className,
}: OptionAttributesType & DeviceType) {
  const { isMobile, isDesktop } = device;

  if (isMobile)
    return (
      <Mobile
        name={name}
        label={label}
        active={active}
        onClick={onClick}
        className={className}
      />
    );

  if (isDesktop)
    return (
      <Desktop
        name={name}
        label={label}
        active={active}
        onClick={onClick}
        className={className}
      />
    );
}
