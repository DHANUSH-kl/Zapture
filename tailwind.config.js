/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
      },
      boxShadow: {
        'inner-glow-blue': 'inset 0 -94px 47px -33px #144CCD, inset 0 -34px 27px -10px #6694FF80, inset 0 -24px 17px -9px rgba(255,255,255,0.64), inset 0 -30px 12px -1px #2366FF26, inset 0 -1px 10.8px 0 rgba(0,0,0,0.2)',
        'inner-glow-orange': 'inset 0 -94px 47px -33px #FF6600, inset 0 -34px 27px -10px rgba(255,102,0,0.5), inset 0 -24px 17px -9px rgba(255,255,255,0.64), inset 0 -30px 12px -1px rgba(255,102,0,0.15), inset 0 -1px 10.8px 0 rgba(0,0,0,0.2)',
        'inner-glow-purple': 'inset 0 -94px 47px -33px #8A38F5, inset 0 -34px 27px -10px rgba(138,56,245,0.5), inset 0 -24px 17px -9px rgba(255,255,255,0.64), inset 0 -30px 12px -1px rgba(138,56,245,0.15), inset 0 -1px 10.8px 0 rgba(0,0,0,0.2)',
      },
      
    },
  },
};
