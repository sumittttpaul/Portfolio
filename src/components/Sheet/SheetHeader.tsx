"use client";

import * as React from "react";
import { useTransform } from "framer-motion";

import { SheetDraggableProps } from "./types";
import { useSheetContext } from "./context";
import { useDragConstraints } from "./hooks";
import { mergeRefs } from "./utils";
import styles from "./styles";
import { MotionDiv, MotionSpan } from "utils/FramerMotion";

const SheetHeader = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, ...rest }, ref) => {
    const { indicatorRotation, dragProps } = useSheetContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();
    const _dragProps = disableDrag ? undefined : dragProps;

    const indicator1Transform = useTransform(
      indicatorRotation,
      (r) => `translateX(2px) rotate(${r}deg)`,
    );

    const indicator2Transform = useTransform(
      indicatorRotation,
      (r) => `translateX(-2px) rotate(${-1 * r}deg)`,
    );

    return (
      <MotionDiv
        {...rest}
        ref={mergeRefs([ref, constraintsRef])}
        style={{ ...styles.headerWrapper, ...style }}
        {..._dragProps}
        dragConstraints={constraintsRef}
        onMeasureDragConstraints={onMeasureDragConstraints}
      >
        {children || (
          <div className="react-modal-sheet-header" style={styles.header}>
            <MotionSpan
              className="react-modal-sheet-drag-indicator"
              style={{ ...styles.indicator, transform: indicator1Transform }}
            />
            <MotionSpan
              className="react-modal-sheet-drag-indicator"
              style={{ ...styles.indicator, transform: indicator2Transform }}
            />
          </div>
        )}
      </MotionDiv>
    );
  },
);

SheetHeader.displayName = "SheetHeader";

export default SheetHeader;
