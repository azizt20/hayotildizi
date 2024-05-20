/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#262626",
          success: "#29A624"
        },
        screens: {
          '3xl': '1920px',
          '4xl': '2500px',
        }
      },
    },
    plugins: [],
    layers: {
      'no-tailwindcss': {
        // Add any styles you want to disable here
        '.no-tailwindcss': {
          all: 'unset',
        },
      },
    },
  }