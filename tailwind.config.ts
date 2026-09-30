import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#2B1A12", // darkest roast: hero, nav, footer
        roast: "#4A2C1F",
        mocha: "#6F4A37",
        caramel: "#B98B5E",
        crema: "#E9D9BE",
        cream: "#F6EEDD",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
