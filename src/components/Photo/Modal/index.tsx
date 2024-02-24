"use client";

import { AnimatePresence } from "framer-motion";
import { useModalState } from "utils/Zustand";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Desktop"));
const Mobile = dynamic(() => import("./Mobile"));

export default function PhotoModal({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  const modalState = useModalState();
  if (isMobile) return <Mobile />;
  if (isDesktop)
    return (
      <AnimatePresence mode="wait">
        {modalState.PhotoShow && <Desktop />}
      </AnimatePresence>
    );
}
