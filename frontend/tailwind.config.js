module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        light: '#161A26',
        dark: '#121318',
      },
    },
  },
  plugins: [],
}
