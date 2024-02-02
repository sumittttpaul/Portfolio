"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));
const Mobile = dynamic(() => import("./Responsive").then((f) => f.Mobile));

export default function RoundedMagneticButton({
  children,
  onClick,
  className,
}: ButtonAttributesType) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  if (isMobile === true)
    return (
      <Mobile onClick={onClick} className={className}>
        {children}
      </Mobile>
    );

  if (isMobile === false)
    return (
      <Desktop onClick={onClick} className={className}>
        {children}
      </Desktop>
    );
}
