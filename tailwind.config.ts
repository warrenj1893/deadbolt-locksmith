import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      maxWidth: {
        site: "1280px",
        narrow: "960px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Syne", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      colors: {
        slateDark: {
          950: "#040711",
          900: "#060a14",
          850: "#0b1325",
          800: "#101b33",
          700: "#18284c",
          600: "#23396b",
        },
        emergency: {
          amber: "#f59e0b",
          orange: "#ea580c",
          glow: "rgba(245, 158, 11, 0.25)",
        },
        tech: {
          cyan: "#38bdf8",
          blue: "#3b82f6",
          darkblue: "#1d4ed8",
        },
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(245, 158, 11, 0.25)",
        blueGlow: "0 0 35px -5px rgba(59, 130, 246, 0.25)",
        card: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        pulseSlow: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
