"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useEvent<T extends (...args: any[]) => any>(handler: T) {
  const handlerRef = useRef<T>();

  useEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: any[]) => {
    const fn = handlerRef.current;
    return fn?.(...args);
  }, []) as T;
}
