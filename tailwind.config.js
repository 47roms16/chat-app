/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        // Primary
        "pale-violet": "hsl(276, 100%, 81%)",
        "moderate-violet": "hsl(276, 55%, 52%)",
        "dark-violet": "hsl(271, 15%, 43%)",
        "grayish-blue": "hsl(206, 6%, 79%)",
        "very-dark-violet": "hsl(271, 36%, 24%)",
        "dark-grayish-violet": "hsl(270, 7%, 64%)",
        // Gradients
        "light-magenta": "hsl(293, 100%, 63%)",
        "light-violet": "hsl(264, 100%, 61%)",
        // Secondary
        "light-grayish-violet": "hsl(270, 20%, 96%)",
        "very-light-magenta": "hsl(289, 100%, 72%)",
        "light-purple": "hsl(263, 53%, 93%)",
      },
    },
  },
  plugins: [],
};
