"use client";

import { MotionP, MotionPath, MotionSVG } from "utils/FramerMotion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { type Variants } from "framer-motion";

const SMWidth = 640;

const routes = (pathname: string) => {
  if (pathname === "/") return "Home" as string;
  if (pathname === "/work") return "Work" as string;
  if (pathname === "/about") return "About" as string;
  if (pathname === "/contact") return "Contact" as string;
  else return "Error" as string;
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
    <div className="min-h-[calc(100vh-80px)] w-full bg-transparent p-0">
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="page-transition-label-bg-transition bg-svg-black pointer-events-none fixed left-0 top-0 z-[999] h-[calc(100vh+600px)] w-screen"
      />
      <MotionP
        className="pointer-events-none fixed left-[50%] top-[47.5%] z-[1000] flex -translate-x-[50%] items-center text-center text-[2em] text-white xs:text-[calc(clamp(3.25em,5vw,4.5em)*.75)]"
        {...anim(text)}
      >
        <span className="mr-[10px] scale-[.8]">•</span>
        {routes(pathname)}
      </MotionP>
      {dimensions.width != null && (
        <SVG
          fill="#141517"
          height={dimensions.height}
          width={dimensions.width}
          className="pointer-events-none fixed left-0 top-0 z-[999] h-[calc(100vh+600px)] w-screen"
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
  fill,
}: {
  height: number | null;
  width: number | null;
  className: string;
  fill: string;
}) => {
  if (height !== null && width !== null) {
    const initialPath = `
    M0 ${width < SMWidth ? 100 : 200} 
    Q${width / 2} 0 ${width} ${width < SMWidth ? 100 : 200}
    L${width} ${height + 300}
    Q${width / 2} ${width < SMWidth ? height + 400 : height + 600} 0 ${height + 300}
    L0 0
    `;

    const targetPath = `
    M0 ${width < SMWidth ? 100 : 300}
    Q${width / 2} 0 ${width} ${width < SMWidth ? 100 : 300}
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
    `;

    return (
      <MotionSVG fill={fill} className={className} {...anim(translate)}>
        <MotionPath {...anim(curve(initialPath, targetPath))} />
      </MotionSVG>
    );
  }
};
