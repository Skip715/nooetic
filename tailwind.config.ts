import type { Config } from "tailwindcss";

// Nooetic — "Apothecary" palette.
// Every colour used in the app should resolve to one of these tokens
// rather than a raw hex value, so a future palette swap (e.g. to
// "Tidewater" or "Reserve") only ever means editing this file.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#56705B",
          deep: "#2F3B30",
          light: "#7C9581",
        },
        clay: {
          DEFAULT: "#C17A4E",
          dark: "#A3623A",
        },
        parchment: "#F6F1E7",
        gold: {
          tint: "#E4CFA0",
        },
        charcoal: "#2A2521",
        // Accent-only tokens borrowed from the "Tidewater" palette —
        // used sparingly (tags, links, hover states) to add colour
        // richness on top of the Apothecary base, not as a full-scale
        // replacement for sage/clay.
        tide: {
          teal: "#1F5C52",
          coral: "#E2694A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        pill: "100px",
      },
    },
  },
  plugins: [],
};
export default config;
