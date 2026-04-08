/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'jp-black':   '#0A0A0A',
        'jp-dark':    '#141414',
        'jp-card':    '#1A1A1A',
        'jp-red':     '#CC0000',
        'jp-red-dark':'#990000',
        'jp-chrome':  '#C0C0C0',
        'jp-white':   '#FFFFFF',
        'jp-gray':    '#E5E5E5',
        'jp-muted':   '#9CA3AF',
        'jp-border':  '#2A2A2A',
      },
      fontFamily: {
        heading: ['Rajdhani', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'red-glow': 'radial-gradient(ellipse at center, rgba(204,0,0,0.15) 0%, transparent 70%)',
        'hero-texture': 'radial-gradient(ellipse at 50% 60%, rgba(204,0,0,0.12) 0%, transparent 65%)',
      },
      boxShadow: {
        'red-sm': '0 0 12px rgba(204,0,0,0.3)',
        'red-md': '0 0 24px rgba(204,0,0,0.4)',
        'chrome': '0 2px 8px rgba(192,192,192,0.15)',
      },
      animation: {
        'pulse-red': 'pulseRed 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(204,0,0,0.5)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(204,0,0,0)' },
        },
      },
    },
  },
  plugins: [],
};
