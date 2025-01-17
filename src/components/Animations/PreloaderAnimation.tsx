"use client";

import { MotionDiv, MotionP, MotionPath } from "utils/FramerMotion";
import { useEffect, useState } from "react";
import { usePreloaderState } from "utils/Zustand";

const SMWidth = 640;

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "स्वागत हे",
];

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 },
  },
};

export default function PreloaderAnimation() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { toggleVisible, toggleStart } = usePreloaderState();
  const [index, setIndex] = useState(0);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.width < SMWidth ? dimension.height + 100 : dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
    },
  };

  useEffect(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150,
    );
  }, [index]);

  return (
    <MotionDiv
      exit="exit"
      initial="initial"
      variants={slideUp}
      onAnimationStart={() => setTimeout(() => toggleStart(), 650)}
      onAnimationComplete={() => toggleVisible()}
      style={{
        width: dimension.width ? dimension.width : "100%",
        height: dimension.height ? dimension.height : "100%",
      }}
      className="fixed z-[1001] flex items-center justify-center bg-svg-black sm:bg-white"
    >
      {dimension.width > 0 && (
        <>
          <MotionP
            animate="enter"
            initial="initial"
            variants={opacity}
            className="absolute z-[1] flex items-center text-center text-[2em] text-white xs:text-[calc(clamp(3.25em,5vw,4.5em)*.75)] sm:text-medium-black"
          >
            <span className="mr-[10px] scale-[.7] sm:scale-[.8]">•</span>
            <span className="font-normal xs:font-medium sm:font-bold">
              {words[index]}
            </span>
          </MotionP>
          <svg className="absolute top-0 h-[calc(100%+100px)] w-full sm:h-[calc(100%+300px)] ">
            <MotionPath
              exit="exit"
              initial="initial"
              variants={curve}
              className="fill-svg-black sm:fill-white"
            />
          </svg>
        </>
      )}
    </MotionDiv>
  );
}
