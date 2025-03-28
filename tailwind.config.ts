import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Timmerman Industries inspired color palette - updated with more browns and beiges
        timmerman: {
          // Blues - keeping for compatibility
          navy: "#1A3A5F",
          navyDark: "#0F2A4A",
          blue: "#2D5F8A",
          blueLight: "#4A7CA6",

          // Browns
          brown: "#8B5A2B",
          brownDark: "#6B4423",
          brownLight: "#A67C52",

          // Beiges
          beige: "#D9C5A0",
          beigeDark: "#BEA67D",
          beigeLight: "#E8DCBF",

          // Greens - updated with Timmerman Industries green
          green: "#2A6D4F",
          greenDark: "#1A5A3E",
          greenLight: "#3D8A6B",

          // New Timmerman corporate green colors
          corporateGreen: "#1A4D36",
          corporateGreenDark: "#0F3A25",
          corporateGreenLight: "#2A6D4F",

          // Accents
          coral: "#E67E51",
          coralDark: "#C05A30",
          sand: "#F5EFE0",
          charcoal: "#2D3436",
          offWhite: "#F9F7F2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

