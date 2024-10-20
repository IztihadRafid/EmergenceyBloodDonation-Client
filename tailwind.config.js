/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveAndRotate: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(90deg)', opacity: '1' },
        },
      },
      animation: {
        moveAndRotate: 'moveAndRotate 2s ease-out forwards',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

