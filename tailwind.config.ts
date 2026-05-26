import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#1E2A78",
          deep: "#141B5C"
        },
        yellow: {
          DEFAULT: "#FFC93C",
          soft: "#FFE9A8"
        },
        cream: {
          DEFAULT: "#FAF6EC",
          light: "#FFFCF5"
        },
        ink: "#1A1A2E",
        muted: "#6B7280"
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"]
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 2.6vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }]
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        input: "6px"
      },
      boxShadow: {
        card: "0 6px 24px -10px rgba(30,42,120,0.18)",
        cardHover: "0 14px 36px -14px rgba(30,42,120,0.28)",
        header: "0 4px 18px -12px rgba(30,42,120,0.18)"
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      },
      animation: {
        slideIn: "slideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
