import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070e",
          900: "#05070e",
          800: "#080b14",
          700: "#0c111d",
          600: "#0f1626",
          500: "#141d31",
        },
        brand: {
          DEFAULT: "#1f6bff",
          bright: "#4d90ff",
          deep: "#0b3fb0",
          soft: "#9fbdff",
        },
        muted: {
          DEFAULT: "#9aa7c0",
          dim: "#6b7691",
        },
      },
      fontFamily: {
        display: ["Saira", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(31,107,255,0.25), 0 20px 60px -20px rgba(31,107,255,0.45)",
        "glow-sm": "0 0 30px -8px rgba(31,107,255,0.55)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        dash: {
          to: { strokeDashoffset: "-1000" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
        dash: "dash 14s linear infinite",
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
