import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f0d",
        bg2: "#0e1510",
        bg3: "#111a14",
        panel: "#141f17",
        border: "#1e3024",
        green: "#2d6a4f",
        grass: "#52b788",
        mint: "#95d5b2",
        bright: "#74c69d",
        text: "#e8f5ee",
        muted: "#8a9e90",
        gold: "#d4a017",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse2: "pulse2 4s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
