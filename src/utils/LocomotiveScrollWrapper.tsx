"use client";

import { useEffect } from "react";

export default function LocomotiveScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.innerWidth > 640) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
  }, []);
  return <>{children}</>;
}
