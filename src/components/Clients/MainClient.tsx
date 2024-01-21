"use client";

import { useEffect, useState } from "react";
import { ScrollBarDisplay, ScrollBarTheme } from "utils/ScrollBarStyle";
import { usePreloaderState } from "utils/Zustand";

export default function MainClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Height, setHeight] = useState("");
  const preloaderState = usePreloaderState();

  useEffect(() => {
    if (window.innerWidth > 640 && preloaderState.Start) {
      ScrollBarDisplay("show");
    }
    if (preloaderState.Visible) setHeight(`${window.innerHeight}px`);
    else setHeight("auto");
  }, [preloaderState.Visible, preloaderState.Start]);

  useEffect(() => {
    const changeScrollColor = () => {
      if (document.documentElement.scrollTop > 1040) {
        ScrollBarTheme("light");
      } else {
        ScrollBarTheme("dark");
      }
    };
    document.addEventListener("scroll", changeScrollColor);
    return () => document.removeEventListener("scroll", changeScrollColor);
  }, []);

  return (
    <main
      style={{ height: Height }}
      className={preloaderState.Visible ? "overflow-hidden" : ""}
    >
      {children}
    </main>
  );
}
