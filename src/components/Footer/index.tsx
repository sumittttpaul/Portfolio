"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useModalState } from "utils/Zustand";
import { useEffect, useState } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterBefore from "./FooterBefore";
import FooterMobile from "./FooterMobile";
import dynamic from "next/dynamic";

const PhotoModal = dynamic(() => import("../Photo/Modal"));

export default function Footer() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const modalState = useModalState();
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  const valuePath = (route: string) => {
    if (route === "/") return true;
    if (route === "/work") return true;
    if (route === "/about") return true;
    if (route === "/contact") return true;
    else return false;
  };
  return (
    <>
      <footer className="overflow-hidden">
        {valuePath(pathname) && <FooterBefore />}
        {isMobile === true && valuePath(pathname) && <FooterMobile />}
        {isMobile === false && valuePath(pathname) && <FooterDesktop />}
      </footer>
      <AnimatePresence>
        {modalState.PhotoShow && <PhotoModal />}
      </AnimatePresence>
    </>
  );
}
