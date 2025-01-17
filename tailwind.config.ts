import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/interface/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "svg-black": "#141517",
        "almost-black": "#1C1D20",
        "medium-black": "#202020",
        "second-black": "#303030",
        "second-gray": "#999999",
        "button-blue": "#334BD3",
        "hover-light-blue": "#0b3cff",
        "hover-blue": "#455CE9",
        "light-gray": "#c9c9c9",
        "dark-pink-purple": "#2E1C39",
        "dark-red": "#4B0000",
        "dark-pink": "#45004B",
        "dark-blue": "#003C4B",
        "dark-yellow": "#464B00",
        "dark-green": "#004B0C",
        "dark-purple": "#320161",
        "dark-orange": "#613B01",
        "super-dark-red": "#300000",
        "super-dark-pink": "#26002B",
        "super-dark-blue": "#002933",
        "super-dark-yellow": "#252900",
        "super-dark-green": "#003008",
        "super-dark-purple": "#1F003B",
        "super-dark-orange": "#362100",
      },
      screens: {
        "max-size": "1500px",
        "screen-1180": "1180px",
        "screen-1000": "1000px",
        "screen-1410": "1410px",
        "screen-2k": "1921px",
        xs: "401px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        neue: ["var(--font-neue)"],
        pacifico: ["var(--font-pacifico)"],
        grtsk: ["var(--font-grtsk)"],
        "grtsk-bkslnt": ["var(--font-grtsk-bkslnt)"],
      },
    },
  },
  plugins: [],
};
export default config;
