import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0F1011",
          900: "#151718",
          850: "#1C1D20",
          800: "#232427",
          750: "#27282C",
          700: "#2F3034",
          600: "#3A3B40",
        },
        bone: "#E5E3DC",
        mute: "#A3A3A3",
        soft: "#B6B6B6",
        pale: "#C9C9C9",
        dim: "#808080",
        accent: "#F3350C",
      },
      fontFamily: {
        sans: ["Switzer", "var(--font-neue)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        mega: ["var(--font-grtsk)", "Switzer", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "ui-monospace", "Menlo", "Consolas", "monospace"],
      },
      // Type scale measured from the reference (size / line-height / tracking)
      fontSize: {
        eyebrow: ["12px", { lineHeight: "14.4px", letterSpacing: "-0.15px" }],
        // 44px @390 · 64px @820 · 96px @1230+
        "display-xl": ["clamp(2.75rem, 7.8vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-blog": ["clamp(2.75rem, 6.2vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        // 40px @390 · 52px @820 · 64px @1010+
        "display-lg": ["clamp(2.5rem, 6.35vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-note": ["clamp(2.25rem, 4.6vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        // 32px @390 · ~38px @820 · 44px @960+
        "display-md": ["clamp(2rem, 4.6vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "heading-40": ["clamp(1.875rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-32": ["clamp(1.625rem, 2.4vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-28": ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        site: "97rem", // 1520px content + 2 x 16px padding
      },
      screens: {
        xs: "401px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        quart: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        "spin-angle": { to: { "--angle": "360deg" } },
        twinkle: { "0%,100%": { opacity: "0.2" }, "50%": { opacity: "1" } },
        orbit: { to: { transform: "rotate(360deg)" } },
        "orbit-reverse": { to: { transform: "rotate(-360deg)" } },
        progress: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        orbit: "orbit 60s linear infinite",
        "orbit-slow": "orbit 90s linear infinite",
        "orbit-reverse": "orbit-reverse 60s linear infinite",
        "orbit-reverse-slow": "orbit-reverse 90s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
