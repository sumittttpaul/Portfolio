"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useModalState } from "utils/Zustand";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PhotoModal = dynamic(() => import("components/Photo/Modal"));
const FooterDesktop = dynamic(() => import("./FooterDesktop"));
const FooterMobile = dynamic(() => import("./FooterMobile"));
const FooterBefore = dynamic(() => import("./FooterBefore"));

export default function Footer() {
  const [device, setDevice] = useState<{
    isMobile?: boolean;
    isDesktop?: boolean;
  }>({ isMobile: undefined, isDesktop: undefined });
  const [Routes, setRoutes] = useState<boolean>(false);
  const { isMobile, isDesktop } = device;
  const modalState = useModalState();
  const pathname = usePathname();

  useEffect(() => {
    setDevice({
      isMobile: window.innerWidth < 640,
      isDesktop: window.innerWidth > 640,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRoutes(() => {
        if (pathname === "/") return true;
        if (pathname === "/work") return true;
        if (pathname === "/about") return true;
        else return false;
      });
    }, 1500); // 1000
  }, [pathname]);

  return (
    <>
      {Routes && (
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
