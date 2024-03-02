import type { Config } from 'tailwindcss'
import withMt from "@material-tailwind/react/utils/withMT"

module.exports = withMt({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'roboto': ['var(--font-roboto)'],
        'bebas_neue': ['var(--font-bebas_neue)'],
        'courier_prime': ['var(--font-courier_prime)'],
        'druk': ['var(--font-druk)']
      }
    },
  },
  plugins: [],
})

