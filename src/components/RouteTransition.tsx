"use client";

import { MotionP, MotionPath, MotionSVG } from "utils/FramerMotion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { type Variants } from "framer-motion";

const routes: any = {
  "/": "Home",
  "/work": "Work",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants: Variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "55%" },
  },
  exit: {
    opacity: 1,
    top: "47.5%",
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

const translate = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function RouteTransition({ children }: React.PropsWithChildren) {
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  const pathname = usePathname();

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="m-0 min-h-screen w-full p-0">
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="page-transition-label-bg-transition pointer-events-none fixed left-0 top-0 z-[99] h-[calc(100vh+600px)] w-screen bg-almost-black"
      />
      <MotionP
        className="fixed left-[50%] top-[47.5%] z-[101] flex -translate-x-[50%] items-center text-center text-[42px] text-white"
        {...anim(text)}
      >
        <span className="mr-[10px] block h-[10px] w-[10px] rounded-[50%] bg-white" />
        {routes[pathname]}
      </MotionP>
      {dimensions.width != null && (
        <SVG
          height={dimensions.height}
          width={dimensions.width}
          className="pointer-events-none fixed left-0 top-0 z-[100] h-[calc(100vh+600px)] w-screen"
        />
      )}
      {children}
    </div>
  );
}

const SVG = ({
  height,
  width,
  className,
}: {
  height: number | null;
  width: number | null;
  className: string;
}) => {
  if (height !== null && width !== null) {
    const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
    `;

    const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
    `;

    return (
      <MotionSVG className={className} {...anim(translate)}>
        <MotionPath {...anim(curve(initialPath, targetPath))} />
      </MotionSVG>
    );
  }
};
