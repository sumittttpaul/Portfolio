"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ToastHook, useModalState } from "utils/Zustand";
import { useEffect, useState } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterBefore from "./FooterBefore";
import FooterMobile from "./FooterMobile";
import dynamic from "next/dynamic";

const Toast = dynamic(() => import("components/Toast"));
const PhotoModal = dynamic(() => import("components/Photo/Modal"));

export default function Footer() {
  const [device, setDevice] = useState<{
    isMobile?: boolean;
    isDesktop?: boolean;
  }>({ isMobile: undefined, isDesktop: undefined });
  const { isMobile, isDesktop } = device;
  const { ToastValue, setToastValue } = ToastHook();
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
      <footer className="overflow-hidden">
        {valuePath(pathname) && <FooterBefore />}
        {isMobile && valuePath(pathname) && <FooterMobile />}
        {isDesktop && valuePath(pathname) && <FooterDesktop device={device} />}
      </footer>
      <Toast
        Toast={{
          Open: ToastValue.Show,
          onClose: (value) =>
            setToastValue({
              ...ToastValue,
              Show: value,
            }),
          MessageTitle: ToastValue.Title,
          MessageDescription: ToastValue.Description,
          Type: ToastValue.Type,
        }}
        SlideDirection="down"
        Vertical="top"
        Horizontal="center"
        HideDuration={6}
      />
      <AnimatePresence>
        {modalState.PhotoShow && <PhotoModal />}
      </AnimatePresence>
    </>
  );
}
