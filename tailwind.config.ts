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
        brand: {
          100: "rgb(var(--color-brand100)/<alpha-value>)",
          200: "rgb(var(--color-brand200)/<alpha-value>)",
          300: "rgb(var(--color-brand300)/<alpha-value>)",
          400: "rgb(var(--color-brand400)/<alpha-value>)",
          500: "rgb(var(--color-brand500)/<alpha-value>)",
        },
        text: {
          primary: "rgb(var(--color-text-primary)/<alpha-value>)",
          secondary: "rgb(var(--color-text-secondary)/<alpha-value>)",
          disabled: "rgb(var(--color-text-disabled)/<alpha-value>)",
        },
        accent:{
          1: "rgb(var(--color-accent1)/<alpha-value>)",
          2: "rgb(var(--color-accent2)/<alpha-value>)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
