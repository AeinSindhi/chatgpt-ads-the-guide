import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17140F",
        "ink-soft": "#2E2820",
        ivory: "#F7F2E7",
        parchment: "#EEE5D2",
        line: "#DDD1B4",
        gold: "#A2803F",
        "gold-deep": "#7C602D",
        slate: "#3E4A5E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
      },
      maxWidth: {
        prose: "38rem",
      },
    },
  },
  plugins: [],
};
export default config;
