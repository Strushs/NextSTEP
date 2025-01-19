import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0069FF",
        secondary: "#F5F8FE",
        tetiary: "#222870",
        dark: "#171B20"
      },
    },
  },
  plugins: [],
} satisfies Config;
