/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'jp-bg':       '#F5F5F5',
        'jp-white':    '#FFFFFF',
        'jp-red':      '#CC0000',
        'jp-red-dark': '#AA0000',
        'jp-charcoal': '#1A1A1A',
        'jp-text':     '#333333',
        'jp-muted':    '#666666',
        'jp-border':   '#E0E0E0',
        'jp-light':    '#EBEBEB',
      },
      fontFamily: {
        heading: ['Rajdhani', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':      '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover':'0 8px 24px rgba(0,0,0,0.14)',
        'nav':       '0 2px 8px rgba(0,0,0,0.08)',
      },
      fontSize: {
        'h1': ['3.25rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};
