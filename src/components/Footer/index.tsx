"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useModalState } from "utils/Zustand";
import { useEffect, useState } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterBefore from "./FooterBefore";
import FooterMobile from "./FooterMobile";
import dynamic from "next/dynamic";

const PhotoModal = dynamic(() => import("components/Photo/Modal"));

export default function Footer() {
  const [device, setDevice] = useState<{
    isMobile?: boolean;
    isDesktop?: boolean;
  }>({ isMobile: undefined, isDesktop: undefined });
  const { isMobile, isDesktop } = device;
  const modalState = useModalState();
  const pathname = usePathname();

  const valuePath = (route: string) => {
    if (route === "/") return true;
    if (route === "/work") return true;
    if (route === "/about") return true;
    else return false;
  };

  useEffect(() => {
    setDevice({
      isMobile: window.innerWidth < 640,
      isDesktop: window.innerWidth > 640,
    });
  }, []);

  return (
    <>
      {valuePath(pathname) && (
        <footer className="overflow-hidden">
          <FooterBefore />
          {isMobile && <FooterMobile />}
          {isDesktop && <FooterDesktop device={device} />}
        </footer>
      )}
      <AnimatePresence>
        {modalState.PhotoShow && <PhotoModal />}
      </AnimatePresence>
    </>
  );
}
