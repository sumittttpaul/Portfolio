"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const DELETE_MS = 50;
const TYPE_MS = 90;
const EMPTY_PAUSE = 350;
const HOLD = 1900;

/** Typewriter: deletes the word letter by letter, then types the next one, with a blinking caret. */
/** `prefix` sits on the same line as the word, so the line never breaks between them. */
export default function RotatingWord({ words, prefix = "" }: { words: string[]; prefix?: string }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (reduce) return;
    let word = 0;
    let chars = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (deleting) {
        chars -= 1;
        setText(words[word].slice(0, chars));
        if (chars === 0) {
          deleting = false;
          word = (word + 1) % words.length;
          timer = setTimeout(tick, EMPTY_PAUSE);
        } else timer = setTimeout(tick, DELETE_MS);
      } else {
        chars += 1;
        setText(words[word].slice(0, chars));
        if (chars === words[word].length) {
          deleting = true;
          timer = setTimeout(tick, HOLD);
        } else timer = setTimeout(tick, TYPE_MS);
      }
    };
    timer = setTimeout(tick, HOLD);
    return () => clearTimeout(timer);
  }, [reduce, words]);

  return (
    <span className="block min-h-[1.1em] whitespace-nowrap">
      {prefix}
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="ml-[0.05em] inline-block h-[0.8em] w-[0.06em] align-[-0.02em] bg-bone"
        style={{ animation: "caret-blink 1.05s steps(1) infinite" }}
      />
    </span>
  );
}
