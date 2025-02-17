/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-purple": "0px 0px 10px 0px rgba(118, 32, 228, 0.40)",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        point100: "#F1E6FF",
        point200: "#D6B8FB",
        point300: "#BA8CF5",
        point400: "#914CE9",
        point500: "#7620E4",
        errorpoint: "#FF4A4A",
        white: "#FFFFFF",
        background: "#F8F9FC",
        gray1: "#EDF0F3",
        gray2: "#CED5DB",
        gray3: "#9EAAB5",
        gray4: "#797F85",
        gray5: "#464F59",
        black: "#1D2228",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        custom: "680px", // 반응형 최대 너비
      },
      width: {
        custom: "100%", // 항상 화면 꽉 채우기
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, Opera */,
          },
        },
      });
    },
  ],
};
