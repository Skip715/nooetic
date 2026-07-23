import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        blue: "#1E90FF",
        yellow: "#FFD62E",
        mist: "#F5F7FA",
        charcoal: "#1C1C1C",
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        blob: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
