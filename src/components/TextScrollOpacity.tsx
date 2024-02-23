"use client";

import { ReactElement, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/gsap-core";
import { useInView } from "framer-motion";

export default function TextScrollOpacity({ content }: { content: string }) {
  let refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef<HTMLElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const isInView = useInView(body);

  const splitWords = (phrase: string) => {
    let body: ReactElement[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: ReactElement[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(refs.current, {
      scrollTrigger: {
        id: "text-opacity-scroll-trigger",
        trigger: container.current,
        scrub: true,
        start: "center bottom",
        end: `+=${(body.current?.clientHeight ?? 0) + 200}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isInView]);

  return (
    <section
      ref={container}
      className="my-10 flex h-auto w-full flex-col items-end justify-center"
    >
      <h1 className="mx-auto flex w-full max-w-screen-max-size px-5 text-start text-[32px] font-semibold leading-[1.5] -tracking-[0.2px] text-almost-black xs:text-[36px] sm:text-[46px] sm:leading-[1.2] lg:text-[56px] xl:text-[64px]">
        How will I help you&nbsp;
        <span className="animate-dot -z-[1]">.</span>
        <span className="animate-dot -z-[1]">.</span>
        <span className="animate-dot -z-[1]">.</span>
      </h1>
      <div
        ref={body}
        className="text-scroll-opacity mx-auto mt-10 flex w-full max-w-screen-max-size flex-wrap px-5 text-black"
      >
        {splitWords(content)}
      </div>
    </section>
  );
}
