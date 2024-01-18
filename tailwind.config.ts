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
        "almost-black": "#1C1D20",
        "second-black": "#1c1d20",
        "third-black": "#292929",
        "forth-black": "#141517",
        "second-gray": "#999999",
        "near-blue": "#455CE9",
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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        neue: ["var(--font-neue)"],
      },
    },
  },
  plugins: [],
};
export default config;
