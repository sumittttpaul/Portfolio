"use client";

import { useEffect, useState } from "react";
import { usePreloaderState } from "utils/Zustand";

export default function MainClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Height, setHeight] = useState("");
  const preloaderState = usePreloaderState();

  useEffect(() => {
    if (window.innerWidth > 640) {
      document.documentElement.style.setProperty("--hide-scrollbar", "block");
    }
    if (preloaderState.Visible) setHeight(`${window.innerHeight}px`);
    else setHeight("auto");
  }, [preloaderState.Visible]);

  useEffect(() => {
    const changeScrollColor = () => {
      console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop > 940) {
        document.documentElement.style.setProperty(
          "--scrollbar-background",
          "#ffffff",
        );
        document.documentElement.style.setProperty(
          "--scrollbar-thumb",
          "#000000",
        );
        document.documentElement.style.setProperty(
          "--scrollbar-border-width",
          "3px",
        );
      } else {
        document.documentElement.style.setProperty(
          "--scrollbar-background",
          "#000000",
        );
        document.documentElement.style.setProperty(
          "--scrollbar-thumb",
          "#ffffff",
        );
        document.documentElement.style.setProperty(
          "--scrollbar-border-width",
          "4px",
        );
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
