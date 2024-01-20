import { Dispatch, SetStateAction } from "react";
import { MotionPath } from "utils/FramerMotion";

export default function NavCurve({
  setIsActive,
}: {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      onClick={() => setIsActive(false)}
      className="fill-second-black absolute left-[-99px] top-0 h-full w-[100px] stroke-none"
    >
      <MotionPath
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
