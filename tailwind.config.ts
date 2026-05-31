import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          cream: "#F9F8F6",      // Solid warm off-white background range
          sand: "#F3F1ED",       // Warm grey/sand for dividers, panels
          charcoal: "#1C1D1B",   // Deep charcoal for dark theme strips & heavy text
          olive: "#3E443A",      // Deep olive accent
          bronze: "#A48E73",     // Warm B2B gold-accent bronze
          gray: {
            light: "#EAE7E2",    // Subtle borders
            medium: "#7A7875",   // Captions and labels
            dark: "#2A2B28"      // Muted background text
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

