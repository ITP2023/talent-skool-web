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
      colors: {
        primary: "#9343F2",
      },
      animation: {
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
        marqueereverse: "marqueereverse 5s linear infinite",
        marquee2reverse: "marquee2reverse 5s linear infinite",
        bottom2top: "fadeInFromBottom 10s ease-in once"
      },
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
      fadeInFromBottom: {
        "0%": {
          opacity: "0",
          transform: "translateY(-100%)"
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0%)"
        }
      }
    },
  },
  plugins: [],
};
