"use client";

export function validateSnapTo({
  snapTo,
  sheetHeight,
}: {
  snapTo: number;
  sheetHeight: number;
}) {
  if (snapTo < 0) {
    console.warn(
      `Snap point is out of bounds. Sheet height is ${sheetHeight} but snap point is ${
        sheetHeight + Math.abs(snapTo)
      }.`,
    );
  }

  return Math.max(Math.round(snapTo), 0);
}

export function getClosest(nums: number[], goal: number) {
  let closest = nums[0];
  let minDifference = Math.abs(nums[0] - goal);

  for (let i = 1; i < nums.length; i++) {
    const difference = Math.abs(nums[i] - goal);
    if (difference < minDifference) {
      closest = nums[i];
      minDifference = difference;
    }
  }

  return closest;
}
