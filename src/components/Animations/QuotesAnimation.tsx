"use client";

import { TypeAnimation } from "react-type-animation";

const Quotes = [
  `Web development is my art, and every project is a canvas where I translate ideas into interactive realities, building a bridge between imagination and implementation.`,
  `Crafting digital masterpieces through web development, where every line of code tells a compelling story of innovation and user-centric design.`,
  `Coding is not just about making things work; it's about creating experiences that leave a lasting impression.`,
  `Building bridges between ideas and online reality. As a web developer, I turn concepts into clickable, seamless journeys.`,
  `Weaving the web of tomorrow, one line of code at a time. As a web developer, I shape digital landscapes into interactive experiences.`,
  `Turning concepts into clicks, dreams into digital realities. Web development is where imagination takes flight on the wings of code.`,
  `A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.`,
  `The reason for software bugs is that the programmers can't remember everything. Not because they're not smart, but because the job requires them to forget too much.`,
  `If you want to build a ship, don't drum up the people to gather wood, divide the tasks, or issue orders. Instead, teach them to yearn for the vast and endless sea.`,
  `In the world of algorithms and aesthetics, I am the architect of user experiences. Web development is not just about code; it's about crafting connections.`,
  `Transforming visions into virtual reality through the language of the web. As a web developer, I breathe life into pixels and pixels into experiences.`,
  `Beyond the screen, where code meets creativity, I sculpt digital possibilities. Web development is my art, and every website is a canvas.`,
  `Coding the canvas of the internet, one elegant design at a time. As a web developer, I craft online spaces that resonate with both form and function.`,
  `From HTML to CSS, I paint the digital canvas with innovation. Web development is the symphony of code, where each line plays a note in the melody of user experience.`,
  `Web development is the poetry of functionality, the prose of aesthetics. As a developer, I script the verses that make your online presence sing.`,
  `Navigating the intricate dance of code and creativity, I design the rhythm of seamless user experiences. Web development is where precision meets passion.`,
  `Crafting the virtual architecture of tomorrow's online experiences. Web development is not just about coding; it's about creating a digital legacy.`,
  `Coding the future, pixel by pixel. Web development is the art of translating ideas into a visually compelling and functionally brilliant reality.`,
  `In the ever-evolving landscape of the internet, I navigate the realms of code and creativity, sculpting websites that stand as digital masterpieces.`,
  `From wireframes to websites, I orchestrate the symphony of user experience. Web development is the harmonious blend of technology and design.`,
  `Crafting code with a touch of creativity – where innovation meets functionality. As a web developer, I build bridges to a seamless online experience.`,
  `In the digital atelier, I am the creator of virtual worlds. Web development is the palette through which I paint immersive online landscapes.`,
  `Code is my language, and the web is my canvas. As a web developer, I articulate ideas into visually stunning and functionally flawless websites.`,
  `Every click tells a story, and every scroll reveals a journey. As a web developer, I narrate compelling tales through the language of code.`,
  `In the realm of 0s and 1s, I craft the architecture of connectivity. Web development is the foundation upon which digital experiences come to life.`,
  `Blending innovation with functionality, I sculpt digital experiences that captivate and engage. Web development is the art of creating online magic.`,
];

export default function QuotesAnimation() {
  return (
    <TypeAnimation
      speed={20}
      wrapper="h2"
      cursor={false}
      sequence={["", 3500, Quotes[Math.floor(Math.random() * Quotes.length)]]}
      className="flex w-full text-pretty text-center text-sm font-normal leading-[1.5] ease-in xs:text-base"
    />
  );
}
