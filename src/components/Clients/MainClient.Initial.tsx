"use client";

import { useEffect, useState } from "react";
import { usePreloaderState } from "utils/Zustand";

export default function MainClientForInitial({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Height, setHeight] = useState("");
  const preloaderState = usePreloaderState();

  useEffect(() => {
    if (preloaderState.Visible) setHeight(`${window.innerHeight}px`);
    else setHeight("auto");
  }, [preloaderState.Visible]);

  return (
    <main
      style={{ height: Height }}
      className={preloaderState.Visible ? "overflow-hidden" : ""}
    >
      {children}
    </main>
  );
}
