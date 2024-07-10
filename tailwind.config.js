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
        'point100': '#F1E6FF',
        'point200': '#D6B8FB',
        'point300': '',
        'point400': '#914CE9',
        'point500': '#7620E4',
        'errorpoint': '#FF4A4A',
        'white': '#FFFFFF',
        'background': '#F8F9FC',
        'gray1': '#EDF0F3',
        'gray2' : '#CED5DB',
        'gray3': '#9EAAB5',
        'gray4': '',
        'gray5': '#464F59',
        'black': '#1D2228',
      },
    },
  },
  plugins: [],
}

