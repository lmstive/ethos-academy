import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <- troquei do ['class'] para "class"
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.mdx"
  ],
  theme: {
    extend: {
      colors: {
        brand: { red: "#d82121", dark: "#2d2d2d", black: "#222222" }
      },
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
