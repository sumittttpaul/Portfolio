"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePreloaderState } from "utils/Zustand";
import PreloaderAnimation from "components/PreloaderAnimation";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const preloader = usePreloaderState();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {preloader.Visible && (
        <AnimatePresence mode="wait">
          {isLoading && <PreloaderAnimation />}
        </AnimatePresence>
      )}
    </>
  );
}
