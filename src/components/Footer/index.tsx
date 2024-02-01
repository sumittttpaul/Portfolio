"use client";

import { useEffect, useState } from "react";
import PhotoModal from "../Photo/Modal";
import FooterBefore from "./FooterBefore";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  return (
    <>
      <footer className="overflow-hidden">
        <FooterBefore />
        {isMobile === true && <FooterMobile />}
        {isMobile === false && <FooterDesktop />}
      </footer>
      <PhotoModal />
    </>
  );
}
