/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'marquee-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'hero-it-emphasis': {
          '0%, 100%': {
            textShadow:
              '0 0 22px rgba(126,184,247,0.45), 0 0 2px rgba(255,255,255,0.2)',
          },
          '50%': {
            textShadow:
              '0 0 40px rgba(126,184,247,0.75), 0 0 72px rgba(126,184,247,0.35)',
          },
        },
      },
      animation: {
        'marquee-rtl': 'marquee-rtl 55s linear infinite',
        'hero-it-emphasis': 'hero-it-emphasis 2.75s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
