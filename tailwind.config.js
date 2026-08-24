/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#060a15',
        'card-base': '#0d1424',
        'cyan-glow': '#00f2fe',
        'indigo-glow': '#6366f1',
        'purple-glow': '#a855f7',
        'emerald-glow': '#10b981',
        'text-base': '#f3f4f6',
        'text-muted': '#94a3b8',
        'text-sub': '#64748b',
        'accent-violet': '#818cf8',
      },
      screens: {
        'lg-custom': '950px',
        'sm-custom': '560px',
      },
    },
  },
  plugins: [],
}
