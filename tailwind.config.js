import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(
    // {
    //   "themes": {
    //     "light": {
    //       "colors": {
    //         "default": {
    //           "50": "#fafafa",
    //           "100": "#f2f2f3",
    //           "200": "#ebebec",
    //           "300": "#e3e3e6",
    //           "400": "#dcdcdf",
    //           "500": "#d4d4d8",
    //           "600": "#afafb2",
    //           "700": "#8a8a8c",
    //           "800": "#656567",
    //           "900": "#404041",
    //           "foreground": "#000",
    //           "DEFAULT": "#d4d4d8"
    //         },
    //         "primary": {
    //           "50": "#dfedfd",
    //           "100": "#b3d4fa",
    //           "200": "#86bbf7",
    //           "300": "#59a1f4",
    //           "400": "#2d88f1",
    //           "500": "#006fee",
    //           "600": "#005cc4",
    //           "700": "#00489b",
    //           "800": "#003571",
    //           "900": "#002147",
    //           "foreground": "#fff",
    //           "DEFAULT": "#006fee"
    //         },
    //         "secondary": {
    //           "50": "#eee4f8",
    //           "100": "#d7bfef",
    //           "200": "#bf99e5",
    //           "300": "#a773db",
    //           "400": "#904ed2",
    //           "500": "#7828c8",
    //           "600": "#6321a5",
    //           "700": "#4e1a82",
    //           "800": "#39135f",
    //           "900": "#240c3c",
    //           "foreground": "#fff",
    //           "DEFAULT": "#7828c8"
    //         },
    //         "success": {
    //           "50": "#e2f8ec",
    //           "100": "#b9efd1",
    //           "200": "#91e5b5",
    //           "300": "#68dc9a",
    //           "400": "#40d27f",
    //           "500": "#17c964",
    //           "600": "#13a653",
    //           "700": "#0f8341",
    //           "800": "#0b5f30",
    //           "900": "#073c1e",
    //           "foreground": "#000",
    //           "DEFAULT": "#17c964"
    //         },
    //         "warning": {
    //           "50": "#fef4e4",
    //           "100": "#fce4bd",
    //           "200": "#fad497",
    //           "300": "#f9c571",
    //           "400": "#f7b54a",
    //           "500": "#f5a524",
    //           "600": "#ca881e",
    //           "700": "#9f6b17",
    //           "800": "#744e11",
    //           "900": "#4a320b",
    //           "foreground": "#000",
    //           "DEFAULT": "#f5a524"
    //         },
    //         "danger": {
    //           "50": "#fee1eb",
    //           "100": "#fbb8cf",
    //           "200": "#f98eb3",
    //           "300": "#f76598",
    //           "400": "#f53b7c",
    //           "500": "#f31260",
    //           "600": "#c80f4f",
    //           "700": "#9e0c3e",
    //           "800": "#73092e",
    //           "900": "#49051d",
    //           "foreground": "#000",
    //           "DEFAULT": "#f31260"
    //         },
    //         "background": "#ffffff",
    //         "foreground": "#000000",
    //         "content1": {
    //           "DEFAULT": "#ffffff",
    //           "foreground": "#000"
    //         },
    //         "content2": {
    //           "DEFAULT": "#f4f4f5",
    //           "foreground": "#000"
    //         },
    //         "content3": {
    //           "DEFAULT": "#e4e4e7",
    //           "foreground": "#000"
    //         },
    //         "content4": {
    //           "DEFAULT": "#d4d4d8",
    //           "foreground": "#000"
    //         },
    //         "focus": "#006FEE",
    //         "overlay": "#000000"
    //       }
    //     },
    //     "dark": {
    //       "colors": {
    //         "default": {
    //           "50": "#fafafa",
    //           "100": "#f2f2f3",
    //           "200": "#ebebec",
    //           "300": "#e3e3e6",
    //           "400": "#dcdcdf",
    //           "500": "#d4d4d8",
    //           "600": "#afafb2",
    //           "700": "#8a8a8c",
    //           "800": "#656567",
    //           "900": "#404041",
    //           "foreground": "#000",
    //           "DEFAULT": "#d4d4d8"
    //         },
    //         "primary": {
    //           "50": "#dfedfd",
    //           "100": "#b3d4fa",
    //           "200": "#86bbf7",
    //           "300": "#59a1f4",
    //           "400": "#2d88f1",
    //           "500": "#006fee",
    //           "600": "#005cc4",
    //           "700": "#00489b",
    //           "800": "#003571",
    //           "900": "#002147",
    //           "foreground": "#fff",
    //           "DEFAULT": "#006fee"
    //         },
    //         "secondary": {
    //           "50": "#eee4f8",
    //           "100": "#d7bfef",
    //           "200": "#bf99e5",
    //           "300": "#a773db",
    //           "400": "#904ed2",
    //           "500": "#7828c8",
    //           "600": "#6321a5",
    //           "700": "#4e1a82",
    //           "800": "#39135f",
    //           "900": "#240c3c",
    //           "foreground": "#fff",
    //           "DEFAULT": "#7828c8"
    //         },
    //         "success": {
    //           "50": "#e2f8ec",
    //           "100": "#b9efd1",
    //           "200": "#91e5b5",
    //           "300": "#68dc9a",
    //           "400": "#40d27f",
    //           "500": "#17c964",
    //           "600": "#13a653",
    //           "700": "#0f8341",
    //           "800": "#0b5f30",
    //           "900": "#073c1e",
    //           "foreground": "#000",
    //           "DEFAULT": "#17c964"
    //         },
    //         "warning": {
    //           "50": "#fef4e4",
    //           "100": "#fce4bd",
    //           "200": "#fad497",
    //           "300": "#f9c571",
    //           "400": "#f7b54a",
    //           "500": "#f5a524",
    //           "600": "#ca881e",
    //           "700": "#9f6b17",
    //           "800": "#744e11",
    //           "900": "#4a320b",
    //           "foreground": "#000",
    //           "DEFAULT": "#f5a524"
    //         },
    //         "danger": {
    //           "50": "#fee1eb",
    //           "100": "#fbb8cf",
    //           "200": "#f98eb3",
    //           "300": "#f76598",
    //           "400": "#f53b7c",
    //           "500": "#f31260",
    //           "600": "#c80f4f",
    //           "700": "#9e0c3e",
    //           "800": "#73092e",
    //           "900": "#49051d",
    //           "foreground": "#000",
    //           "DEFAULT": "#f31260"
    //         },
    //         "background": "#ffffff",
    //         "foreground": "#000000",
    //         "content1": {
    //           "DEFAULT": "#ffffff",
    //           "foreground": "#000"
    //         },
    //         "content2": {
    //           "DEFAULT": "#f4f4f5",
    //           "foreground": "#000"
    //         },
    //         "content3": {
    //           "DEFAULT": "#e4e4e7",
    //           "foreground": "#000"
    //         },
    //         "content4": {
    //           "DEFAULT": "#d4d4d8",
    //           "foreground": "#000"
    //         },
    //         "focus": "#006FEE",
    //         "overlay": "#000000"
    //       }
    //     }
    //   },
    //   "layout": {
    //     "disabledOpacity": "0.5"
    //   }
    // }
  )],
}

export default config;