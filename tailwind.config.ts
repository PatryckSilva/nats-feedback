import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        cream: "#EFE1C6",
        customized_purpled: "#462E6C",
        customized_blue: "#3F78A3",
        customized_pink: "#AA62BF",
      },
    },
  },
  plugins: [],
};
export default config;
