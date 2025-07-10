/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'matcha': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8fbc8f',
          400: '#7a9b7a',
          500: '#5a6b47',
          600: '#4a5a3a',
          700: '#3a4a2a',
          800: '#2a3a1a',
          900: '#1a2a0a',
        },
      },
      backgroundImage: {
        'matcha-gradient': 'linear-gradient(135deg, #8fbc8f 0%, #7a9b7a 100%)',
        'matcha-gradient-dark': 'linear-gradient(135deg, #5a6b47 0%, #4a5a3a 100%)',
        'space-gradient': `
          radial-gradient(circle at 20% 80%, rgba(135, 206, 235, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 80% 20%, rgba(100, 149, 237, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 30%),
          radial-gradient(circle at 60% 60%, rgba(138, 43, 226, 0.08) 0%, transparent 45%),
          radial-gradient(ellipse at 10% 90%, rgba(72, 61, 139, 0.1) 0%, transparent 60%),
          linear-gradient(135deg, #0B1426 0%, #1E3A8A 40%, #312E81 70%, #1E1B4B 100%)
        `,
        'space-stars': `
          radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, white 1px, transparent 1px),
          radial-gradient(circle at 15% 85%, white 1px, transparent 1px),
          radial-gradient(circle at 85% 15%, white 1px, transparent 1px),
          radial-gradient(circle at 45% 65%, white 0.5px, transparent 0.5px),
          radial-gradient(circle at 65% 45%, white 0.5px, transparent 0.5px)
        `,
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(143, 188, 143, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(143, 188, 143, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}