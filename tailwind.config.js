
module.exports = {
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
        brand: {
          orange: '#FF5500',
          'orange-glow': '#FF8800',
          'orange-muted': 'rgba(255, 85, 0, 0.1)',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.15) 0%, transparent 70%)',
      }
    },
  },
}
