/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPink: "#FB2EB6",
        myBlue: "#7E33E0",
      },
      backgroundImage: {
        "banner-1": "url('/src/assets/images/banner-1.jpg')",
        "banner-2": "url('/src/assets/images/banner-2.jpg')",
        "banner-3": "url('/src/assets/images/banner-3.jpg')",
      },
    },
  },
  plugins: [],
};
