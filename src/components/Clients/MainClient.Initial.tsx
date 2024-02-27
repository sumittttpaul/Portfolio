"use client";

import { useEffect, useState } from "react";
import { usePreloaderState } from "utils/Zustand";

export default function MainClientForInitial({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Height, setHeight] = useState("");
  const { Visible } = usePreloaderState();

  useEffect(() => {
    if (Visible) setHeight(`${window.innerHeight}px`);
    else {
      setHeight("auto");
      window.scrollTo(0, 0);
    }
  }, [Visible]);

  return (
    <main
      style={{ height: Height }}
      className={Visible ? "overflow-hidden" : ""}
    >
      {children}
    </main>
  );
}
