/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.700'), 0 0 20px theme('colors.purple.200') ",
      },
    },
  },
  plugins: [
    // plugin(({ theme, addUtilities }) => {
    //   const neonUtilities = {};
    //   const colors = theme("colors");
    //   for (const color in colors) {
    //     if (typeof colors[color] === "object") {
    //       const color1 = colors[color]["700"];
    //       const color2 = colors[color]["300"];
    //       neonUtilities[`.neon-${color}`] = {
    //         boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
    //       };
    //     }
    //   }
    //   addUtilities(neonUtilities);
    // }),
  ],
};
