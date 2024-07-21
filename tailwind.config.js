// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-scale-white": "#fff",
        "gray-scale-gray-100": "#e6e6e6",
        "gray-scale-gray-500": "#808080",
        "gray-scale-gray-900": "#1a1a1a",
        "branding-success": "#00b307",
        limegreen: {
          "100": "rgba(32, 181, 38, 0.2)",
          "200": "rgba(32, 181, 38, 0.1)",
        },
        "gray-scale-gray-50": "#f2f2f2",
        dimgray: "#555",
        tomato: "rgba(234, 75, 72, 0.1)",
        "branding-error": "#ea4b48",
        "branding-success-dark": "#2c742f",
        "gray-scale-gray-300": "#b3b3b3",
        "gray-scale-gray-600": "#666",
        "gray-scale-gray-800": "#333",
      },
      spacing: {},
      fontFamily: {
        "body-small-body-small-500": "Poppins",
        "dancing-script": "'Dancing Script'",
      },
      borderRadius: {
        "81xl": "100px",
        "24xl": "43px",
        "151xl": "170px",
        "481xl": "500px",
        "11xl": "30px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    preflight: false,
  },
};


