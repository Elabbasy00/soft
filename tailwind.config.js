/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#ec2227",
      },
      backgroundImage: {
        "hero-pattern": "url('/HeroN.svg')",
        "service-desktop": "url('/services Banner.svg')",
        "service-mobile": "url('/Image serves mobile.svg')",
      },
      backgroundColor: {
        main: "#ec2227",
        dark: "#1D1313",
      },
    },
  },
  plugins: [],
};
