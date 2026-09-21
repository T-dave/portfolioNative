import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08090B",
        surface: "#101216",
        "surface-2": "#17191F",
        ink: "#F5F5F5",
        muted: "#A1A1AA",
        accent: {
          DEFAULT: "#E3A857",
          dim: "#B8874A",
          bright: "#F0BE7A",
        },
        hairline: "rgba(245, 245, 245, 0.08)",
        "hairline-strong": "rgba(245, 245, 245, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      borderRadius: {
        card: "10px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(245,245,245,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
