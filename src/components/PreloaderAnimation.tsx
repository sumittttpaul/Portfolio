"use client";

import { MotionDiv, MotionP, MotionPath } from "utils/FramerMotion";
import { useEffect, useState } from "react";

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
    transition: { duration: 1, delay: 0.2 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function PreloaderAnimation() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [index, setIndex] = useState(0);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
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
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
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
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-[999] flex h-screen w-screen items-center justify-center bg-forth-black"
    >
      {dimension.width > 0 && (
        <>
          <MotionP
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-[1] flex items-center text-center text-[42px] text-white"
          >
            <span className="mr-[10px] block h-[10px] w-[10px] rounded-[50%] bg-white" />
            {words[index]}
          </MotionP>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full ">
            <MotionPath
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-forth-black"
            />
          </svg>
        </>
      )}
    </MotionDiv>
  );
}
