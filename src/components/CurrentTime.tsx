"use client";

import { useState, useEffect } from "react";
import moment from "moment";

export default function CurrentTime({ className }: { className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    let interval = setInterval(
      () => setTime(`${moment().format("LT")} GMT +05:30`),
      1000,
    );
    return () => clearInterval(interval);
  }, []);

  return <h4 className={className}>{time}</h4>;
}
