import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#05090f',
          secondary: '#080e18',
          card: '#0c1520',
          hover: '#101c28',
        },
        accent: {
          DEFAULT: '#00b4dc',
          dim: 'rgba(0,180,220,0.12)',
          glow: 'rgba(0,180,220,0.06)',
        },
        gold: {
          DEFAULT: '#e8a000',
          dim: 'rgba(232,160,0,0.12)',
        },
        emerald: {
          trade: '#00d48a',
          dim: 'rgba(0,212,138,0.12)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          accent: 'rgba(0,180,220,0.2)',
          gold: 'rgba(232,160,0,0.2)',
        },
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config
