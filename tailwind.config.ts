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
          400: '#f4d03f',
          500: '#f1c40f',
          600: '#d4ac0d',
        },
        emerald: {
          400: '#52c41a',
          500: '#2ecc71',
          600: '#27ae60',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        persian: ['var(--font-vazir)', 'Tahoma', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
