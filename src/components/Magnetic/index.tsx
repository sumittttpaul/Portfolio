"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));

export default function Magnetic({
  children,
}: {
  children: React.ReactElement;
}) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  if (isMobile === true) return <>{children}</>;

  if (isMobile === false) return <Desktop>{children}</Desktop>;
}
