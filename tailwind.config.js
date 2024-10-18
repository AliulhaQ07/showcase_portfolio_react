/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add your Google font here
        montserrat: ["Montserrat", "sans-serif"], // Add your Google font here
      },
    },
  },
  plugins: [],
};
