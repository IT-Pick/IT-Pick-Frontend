// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif']
      },
      colors: {
        'black': '#1D2228',
        'white': '#FFFFFF',
        'gray1': '#EDF0F3',
        'gray3': '#9EAAB5',
        'point500': '#7620E4',
        'point100': '#F1E6FF',
        'errorpoint': '#FF4A4A'
      },
    },
  },
  plugins: [],
}

