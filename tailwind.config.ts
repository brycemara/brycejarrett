import type { Config } from "tailwindcss"

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
    },
    colors: {
      "ocean-blue": "#0077B6",
      "light-ocean-blue": "#00B4D8",
      "midnight-blue": "#023E8A",
      "dark-blue": "#01295c",
      beige: "#eff3f6",
      "light-beige": "#F9F7F2",
      "soft-gray": "#D3D3D3",
      "warm-gray": "#A9A9A9",
      "dark-gray": "#222731",
      "primary-text": "#323b43",
    },
  },
  plugins: [],
}
export default config
