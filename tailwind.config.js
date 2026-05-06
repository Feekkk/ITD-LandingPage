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
        'hero-ticket-cta': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow:
              '0 16px 44px rgba(0,0,0,0.55), 0 0 0 1px rgba(126,184,247,0.18) inset, 0 0 32px rgba(126,184,247,0.28)',
          },
          '50%': {
            transform: 'scale(1.035)',
            boxShadow:
              '0 18px 50px rgba(0,0,0,0.58), 0 0 0 1px rgba(126,184,247,0.35) inset, 0 0 54px rgba(126,184,247,0.5)',
          },
        },
      },
      animation: {
        'marquee-rtl': 'marquee-rtl 55s linear infinite',
        'hero-it-emphasis': 'hero-it-emphasis 2.75s ease-in-out infinite',
        'hero-ticket-cta': 'hero-ticket-cta 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
