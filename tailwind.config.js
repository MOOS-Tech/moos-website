/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "green":{
          100:"#55B6AB",
          200:"#109888",
          300:"#0C695E"
        },
        "black":{
          100:"#696969",
          200:"#444444",
          300:"#242424"
        },
        "gray":{
          100:"#F35FBF4",
          200:"#DBE1DC",
          300:"#CDD2CE"
        },
        "yellow":"#E3A64D",
        "blue":"#3C7FB0",
        "brown":{
          100:"#E38B64",
          200:"#E3716F",
          300:"#965251"
        }
    },
  },
  plugins: [],
}
}
