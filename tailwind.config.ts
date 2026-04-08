import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Premium Monochrome Palette
        premium: {
          black: "#050505",
          "soft-black": "#0d0d0d",
          charcoal: "#171717",
          "dark-gray": "#262626",
          "medium-gray": "#404040",
          gray: "#737373",
          "light-gray": "#a3a3a3",
          "extra-light": "#d4d4d4",
          silver: "#e5e5e5",
          "off-white": "#f5f5f5",
          white: "#fafafa",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
