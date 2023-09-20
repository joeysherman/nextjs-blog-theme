module.exports = {
  mode: 'jit',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
};
