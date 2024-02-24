"use client";

import * as React from "react";

import { MotionButton, MotionDiv } from "utils/FramerMotion";
import { DEFAULT_TWEEN_CONFIG } from "./constants";
import { SheetBackdropProps } from "./types";
import { Transition } from "framer-motion";
import styles from "./styles";

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

const SheetBackdrop = React.forwardRef<any, SheetBackdropProps>(
  ({ style = {}, className = "", ...rest }, ref) => {
    const Comp = isClickable(rest) ? MotionButton : MotionDiv;
    const pointerEvents = isClickable(rest) ? "auto" : "none";

    const animationOptions: Transition = {
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      ...DEFAULT_TWEEN_CONFIG,
    };

    return (
      <Comp
        {...rest}
        ref={ref}
        className={`react-modal-sheet-backdrop ${className}`}
        style={{ ...styles.backdrop, ...style, pointerEvents }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={animationOptions}
      />
    );
  },
);

SheetBackdrop.displayName = "SheetBackdrop";

export default SheetBackdrop;
