/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: '#0D3B66',
        turquoise: '#43C6AC',
        coral: '#FF6B6B',
        sand: '#F4E1D2',
        foam: '#FAFAFA'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      backgroundImage: {
        'flow-lines': 'radial-gradient(60%_60% at 50% 40%, rgba(67,198,172,0.15), transparent 60%), radial-gradient(40%_40% at 20% 70%, rgba(13,59,102,0.12), transparent 60%), radial-gradient(50%_50% at 80% 20%, rgba(255,107,107,0.08), transparent 60%)',
        'aqua-gradient': 'linear-gradient(135deg, #E0F2FE 0%, #F5E9FF 50%, #FFE4F1 100%)'
      },
      boxShadow: {
        glass: '0 8px 30px rgba(13,59,102,0.12)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out both',
        'float': 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
