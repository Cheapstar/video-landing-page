/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
        fontFamily: {
          lufga: ['Lufga Regular', 'sans-serif'],
          'lufga-italic': ['Lufga Italic', 'sans-serif'],
          'lufga-thin': ['Lufga Thin', 'sans-serif'],
          'lufga-thin-italic': ['Lufga Thin Italic', 'sans-serif'],
          'lufga-extralight': ['Lufga ExtraLight', 'sans-serif'],
          'lufga-extralight-italic': ['Lufga ExtraLight Italic', 'sans-serif'],
          'lufga-light': ['Lufga Light', 'sans-serif'],
          'lufga-light-italic': ['Lufga Light Italic', 'sans-serif'],
          'lufga-medium': ['Lufga Medium', 'sans-serif'],
          'lufga-medium-italic': ['Lufga Medium Italic', 'sans-serif'],
          'lufga-semibold': ['Lufga SemiBold', 'sans-serif'],
          'lufga-semibold-italic': ['Lufga SemiBold Italic', 'sans-serif'],
          'lufga-bold': ['Lufga Bold', 'sans-serif'],
          'lufga-bold-italic': ['Lufga Bold Italic', 'sans-serif'],
          'lufga-extrabold': ['Lufga ExtraBold', 'sans-serif'],
          'lufga-extrabold-italic': ['Lufga ExtraBold Italic', 'sans-serif'],
          'lufga-black': ['Lufga Black', 'sans-serif'],
          'lufga-black-italic': ['Lufga Black Italic', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
  plugins: [],
}

