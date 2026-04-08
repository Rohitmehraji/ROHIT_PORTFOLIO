/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#060a14',
        glow: '#2dd4bf',
        aura: '#38bdf8'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' }
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        spinSlow: 'spinSlow 22s linear infinite',
        marquee: 'marquee 20s linear infinite'
      },
      boxShadow: {
        glass: '0 20px 50px rgba(8, 14, 30, 0.35)',
        neon: '0 0 30px rgba(45, 212, 191, 0.4)'
      }
    }
  },
  plugins: []
}
