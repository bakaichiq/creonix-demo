import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  safelist: [
    // White/slate opacity values used throughout
    "bg-white/5", "bg-white/10", "bg-white/15", "bg-white/20",
    "bg-white/70", "bg-white/80", "bg-white/90",
    "border-white/10", "border-white/20", "border-white/70",
    "bg-slate-950/85", "bg-slate-900/70", "bg-slate-800/70",
    // Dynamic palette classes for business cards
    { pattern: /from-(sky|emerald|fuchsia|violet|lime|amber|rose|cyan|slate|indigo)-(300|400|500|600|700)/ },
    { pattern: /via-(sky|emerald|cyan|lime|rose|orange|pink|blue|slate)-(300|400|500)/ },
    { pattern: /to-(emerald|amber|cyan|orange|yellow|rose|indigo|sky)-(200|300|400)/ },
    { pattern: /bg-(sky|emerald|fuchsia|violet|lime|amber|rose|cyan|slate|indigo)-(500|600|700|950)\/(10|12)/ },
    { pattern: /text-(sky|emerald|fuchsia|violet|lime|amber|rose|cyan|slate|indigo)-(600|700)/ },
    { pattern: /border-(sky|emerald|fuchsia|violet|lime|amber|rose|cyan|slate|indigo)-(100|200|300)\/(70)/ },
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(15, 23, 42, 0.35)",
        glow: "0 24px 80px -40px rgba(59, 130, 246, 0.55)",
        "glow-cyan": "0 24px 80px -40px rgba(6, 182, 212, 0.55)",
        "glow-lg": "0 32px 100px -40px rgba(59, 130, 246, 0.65)",
        "inner-white": "inset 0 1px 0 rgba(255,255,255,0.15)"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-manrope)"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)"
      },
      animation: {
        "fade-up": "fadeUp 0.55s ease forwards",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  },
  plugins: []
};

export default config;
