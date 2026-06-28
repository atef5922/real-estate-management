import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem"
      },
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      colors: {
        navy: {
          950: "#061A2D",
          900: "#071E33",
          850: "#0B2742",
          800: "#0F314F"
        },
        gold: {
          500: "#C9973F",
          400: "#D4A44A",
          300: "#E2BC6A"
        },
        slateText: "#0F172A",
        mutedText: "#64748B",
        borderSoft: "#E2E8F0"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(6, 26, 45, 0.14)",
        gold: "0 18px 45px rgba(201, 151, 63, 0.22)",
        glass: "0 16px 50px rgba(6, 26, 45, 0.18)"
      },
      backgroundImage: {
        "navy-radial": "radial-gradient(circle at top left, rgba(212, 164, 74, 0.18), transparent 32%), linear-gradient(135deg, #061A2D 0%, #0B2742 58%, #071E33 100%)",
        "gold-line": "linear-gradient(90deg, transparent, rgba(212, 164, 74, 0.72), transparent)"
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem"
      }
    }
  },
  plugins: [typography]
};

export default config;
