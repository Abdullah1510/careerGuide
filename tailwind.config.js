/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'float':            'float 6s ease-in-out infinite',
        'float-delay':      'float 6s ease-in-out 2s infinite',
        'float-delay-2':    'float 6s ease-in-out 4s infinite',
        'fade-in-up':         'fadeInUp 0.7s ease-out both',
        'fade-in-up-delay':   'fadeInUp 0.7s ease-out 0.2s both',
        'fade-in-up-delay-2': 'fadeInUp 0.7s ease-out 0.4s both',
        'fade-in-up-delay-3': 'fadeInUp 0.7s ease-out 0.6s both',
        'slide-in-left':      'slideInLeft 0.6s ease-out both',
        'bounce-slow':        'bounceSlow 2s infinite',
        'pulse-slow':         'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%':      { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
