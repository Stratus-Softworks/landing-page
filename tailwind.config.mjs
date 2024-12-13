/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#1e1e1e',
        white: '#e7e7d8',
        eagle: '#afac95',
        orange: '#ea4125',
      },
      fontFamily: {
        display: ['Basement', 'sans-serif'],
        interVariable: ['InterVariable', 'sans-serif'],
      },
      keyframes: {
        loop: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'loop 15s linear infinite',
      },
      backgroundImage: {
        'gradient-grid': `radial-gradient(circle at center center, transparent 0%, rgba(255, 255, 255, 0) 99%),
                          repeating-linear-gradient(0deg, rgba(205, 205, 205, 0.2) 0px, rgba(205, 205, 205, 0.2) 1px, transparent 1px, transparent 6px),
                          repeating-linear-gradient(90deg, rgba(205, 205, 205, 0.2) 0px, rgba(205, 205, 205, 0.2) 1px, transparent 1px, transparent 6px),
                          linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))`,
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};