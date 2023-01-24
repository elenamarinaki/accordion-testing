/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-black": "#242424",
      },
      keyframes: {
        insert: {
          "0%": {
            transform: "translateY(-150px)",
            zIndex: 0,
          },
          "50%": { zIndex: 2 },
          "100%": { transform: "translateY(0)" },
        },
        
        spread: {
          "0%": { width: "0", opacity: "30%" },
          "100%": { width: "100%", opacity: "100%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        insert: "insert 1s ease-in-out",
        spread: "spread 1.5s cubic-bezier(1,-0.08,.93,.65)",
        wiggle: "wiggle 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
