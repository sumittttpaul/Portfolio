"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { usePreloaderState } from "./Zustand";
import { MotionDiv } from "./FramerMotion";
import { FrozenRoute } from "./FrozenRoute";

export default function RouteTransitionWrapper({
  children,
}: React.PropsWithChildren) {
  const pathname = usePathname();
  const preloader = usePreloaderState();

  useEffect(() => {
    if (pathname !== "/" && preloader.Visible) preloader.toggleVisible();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence initial={true} mode="wait">
      <MotionDiv key={`Routes_Pathname_${pathname}`}>
        <FrozenRoute>{children}</FrozenRoute>
      </MotionDiv>
    </AnimatePresence>
  );
}
