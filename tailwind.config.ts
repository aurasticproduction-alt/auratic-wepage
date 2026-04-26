import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    // Comprehensive breakpoints covering every device class.
    //   xs    →  Small phones (iPhone SE, older Android)
    //   sm    →  Standard phones
    //   md    →  Large phones / portrait tablets
    //   lg    →  Tablets landscape / small laptops
    //   xl    →  Laptops / standard desktops
    //   2xl   →  Large desktops
    //   3xl   →  Ultra-wide / 2K monitors
    //   4xl   →  4K displays / large TVs
    //   tv    →  Living-room TVs (10-foot UI, larger tap targets)
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      // Device capability queries for refining interactions
      touch: { raw: '(hover: none) and (pointer: coarse)' },
      stylus: { raw: '(hover: none) and (pointer: fine)' },
      mouse: { raw: '(hover: hover) and (pointer: fine)' },
      tv: { raw: '(min-width: 1920px) and (hover: none)' },
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
      short: { raw: '(max-height: 700px)' },
      tall: { raw: '(min-height: 900px)' },
      'reduce-motion': { raw: '(prefers-reduced-motion: reduce)' },
    },
    extend: {
      colors: {
        void: '#050209',
        deep: '#0a0514',
        surface: '#120826',
        card: '#17103a',
        raised: '#1f1550',
        violet: {
          900: '#2b1065',
          700: '#5b21b6',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
          200: '#ddd6fe',
        },
        magenta: '#e879f9',
        glow: '#b794ff',
        ink: '#f8f5ff',
        'ink-muted': '#a89cc5',
        'ink-faint': '#6b6189',
      },
      fontFamily: {
        // Brand-mapped families (Aurastic identity system)
        display:    ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'Arial Narrow', 'sans-serif'],
        bebas:      ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'sans-serif'],
        bankgothic: ['var(--font-bankgothic)', 'Trade Gothic', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        tagline:    ['var(--font-bankgothic)', 'Trade Gothic', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        rubik:      ['var(--font-rubik)', 'Inter', 'system-ui', 'sans-serif'],
        sans:       ['var(--font-rubik)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        exo:        ['var(--font-exo)', 'Inter', 'system-ui', 'sans-serif'],
        num:        ['var(--font-exo)', 'Inter', 'system-ui', 'sans-serif'],
        biko:       ['var(--font-biko)', 'Manrope', 'system-ui', 'sans-serif'],
        cerena:     ['var(--font-cerena)', 'Cinzel', 'Times New Roman', 'serif'],
        slant:      ['var(--font-slant)', 'Bebas Neue', 'Impact', 'sans-serif'],
        serif:      ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      spacing: {
        'safe-t': 'env(safe-area-inset-top)',
        'safe-b': 'env(safe-area-inset-bottom)',
        'safe-l': 'env(safe-area-inset-left)',
        'safe-r': 'env(safe-area-inset-right)',
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1536px',
        'container-3xl': '1800px',
        'container-4xl': '2200px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      animation: {
        beams: 'beams 22s linear infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        eq: 'eq 1.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        beams: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' },
        },
        eq: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
