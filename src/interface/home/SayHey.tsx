"use client";

import LetterChanging from "components/LetterChanging";
import { useEffect, useState } from "react";

export default function SayHey() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  return (
    <section className="flex h-auto w-full flex-col items-center justify-center bg-white">
      {isMobile === true && (
        <div className="font-grtsk z-[2] flex h-[35em] font-bold text-black">
          <LetterChanging>say hey!</LetterChanging>
        </div>
      )}
      {isMobile === false && (
        <div className="font-grtsk z-[2] -mt-[4.75em] flex h-[clamp(23vw,50vw,100vh)] font-bold text-black">
          <LetterChanging>say hey!</LetterChanging>
        </div>
      )}
    </section>
  );
}
