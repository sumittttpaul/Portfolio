"use client";

import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { useStopScrollingState } from "utils/Zustand";

export default function BodyClient({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isScrolling } = useStopScrollingState();
  const { scrollY } = useScroll();

  useEffect(() => {
    if (isScrolling) window.scrollTo(0, scrollY.getPrevious() ?? 0);
    else document.body.style.top = `-${scrollY.get()}px`;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu, false);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling]);

  const BodyClass = `${className} ${isScrolling ? "overflow-x-hidden overflow-y-scroll" : `fixed w-screen overflow-hidden`} m-0`;

  return <body className={BodyClass}>{children}</body>;
}
