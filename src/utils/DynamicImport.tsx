"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("components/Header"), { ssr: false });

const MovingTextAnimation = dynamic(
  () => import("components/MovingTextAnimation"),
  { ssr: false },
);

export function __Header() {
  return <Header />;
}

export function __MovingTextAnimation() {
  return <MovingTextAnimation />;
}
