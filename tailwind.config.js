/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-100': '#F0F0F0',
        'white-800': '#F2F2F2',
        'white-900': '#F8F8F8',
        'custom-green': '#00585E',
        'custom-red': '#BE0000',
      },
      borderColor: {
        'custom-gray': '#42474A',
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
      },
    },
  },
  plugins: [],
};
