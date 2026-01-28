import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ebe7e0',
          300: '#e1dbd0',
          400: '#d7cfc0',
          500: '#cdc3b0',
        },
        gold: {
          100: '#fef9e7',
          200: '#fcf0c3',
          300: '#f9e79f',
          400: '#f4d03f',
          500: '#f1c40f',
          600: '#d4ac0d',
          700: '#b7950b',
          800: '#9a7d0a',
          900: '#7d6608',
        },
        emerald: {
          400: '#52c41a',
          500: '#2ecc71',
          600: '#27ae60',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        persian: ['var(--font-vazir)', 'Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 40px -10px rgba(241, 196, 15, 0.5)',
        'glow-emerald': '0 0 40px -10px rgba(46, 204, 113, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'premium-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'mesh-light': 'radial-gradient(at 40% 20%, rgba(241, 196, 15, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(46, 204, 113, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(250, 249, 247, 1) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, rgba(241, 196, 15, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(46, 204, 113, 0.08) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config
