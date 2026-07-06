import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090b0f",
        charcoal: "#17130f",
        cream: "#f7f0e4",
        parchment: "#fffaf0",
        linen: "#e8dcc8",
        gold: "#c89a3d",
        "gold-deep": "#8b641f"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(9, 11, 15, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
