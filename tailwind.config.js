/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#080810',
          800: '#0d0d1a',
          700: '#12122a',
          600: '#1a1a3a',
        },
        neon: {
          purple: '#9b5de5',
          blue: '#00b4d8',
          pink: '#f72585',
          gold: '#f9c74f',
          green: '#06d6a0',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #9b5de5, 0 0 10px #9b5de5' },
          '100%': { boxShadow: '0 0 20px #9b5de5, 0 0 40px #9b5de5, 0 0 60px #9b5de5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(2)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
