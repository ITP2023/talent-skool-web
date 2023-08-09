import plugin from "tailwindcss";
/** @type {import('tailwindcss').Config} */
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
        neon: "0 0 5px theme('colors.purple.700'), 0 0 20px theme('colors.purple.500') ",
      },
      colors: {
        primary: "#9343F2",
      },
      animation: {
        coursemarquee: "marquee 15s linear infinite",
        coursemarquee2: "marquee2 15s linear infinite",
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
        marqueereverse: "marqueereverse 5s linear infinite",
        marquee2reverse: "marquee2reverse 5s linear infinite",
        bottom2top: "fadeInFromBottom 10s ease-in once",
        herotextswap: "swapText 10s infinite"
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueereverse: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        marquee2reverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        swapText: {
          "0%": {
            transform: "translate3d(0, 0, 0)"
          },
          "12.66%": {
            transform: "translate3d(0, 0, 0)"
          },
          "100%": {
            transform: "translate3d(0, 0, 0)"
          },
          "16.66%": {
            transform: "translate3d(0, -25%, 0)"
          },
          "29.32%": {
            transform: "translate3d(0, -25%, 0)"
          },
          "33.32%": {
            transform: "translate3d(0, -50%, 0)"
          },
          "45.98%": {
            transform: "translate3d(0, -50%, 0)"
          },
          "49.98%": {
            transform: "translate3d(0, -75%, 0)"
          },
          "62.64%": {
            transform: "translate3d(0, -75%, 0)"
          },
          "66.64%": {
            transform: "translate3d(0, -50%, 0)"
          },
          "79.3%": {
            transform: "translate3d(0, -50%, 0)"
          },
          "83.3%": {
            transform: "translate3d(0, -25%, 0)"
          },
          "95.96%": {
            transform: "translate3d(0, -25%, 0)"
          },
        },
        changeOpacity: {
          "0%": {
            opacity: "0"
          },
          "50%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0"
          }
        }
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }
  },
  
  plugins: [],
};
