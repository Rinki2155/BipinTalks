import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        textd: {
          "0%": { transform: "translateY(100%)", opacity: "0" }, // Start from below the screen
          "100%": { transform: "translateY(0)", opacity: "1" }, // End at its original position
        },
        rise: {
          '0%': { transform: 'translateY(40px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 2s forwards', // Animation configuration
        textd: "textd 1s forwards 1s", // Animation duration 1s with 1s delay
      },
      
    },
  },
  plugins: [],
};
export default config;
