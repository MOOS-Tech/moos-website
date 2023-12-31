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
          50:"#CCEAE6",
          100:"#55B6AB",
          200:"#109888",
          300:"#0C695E",
          400:"#F0F9F8"
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
          300:"#965251",
          400:"FACDCC"
        }
    },
    boxShadow: {
      '3xl': '0 3px 25px -10px rgba(0, 0, 0, 0.3)',
    },
    
    fontSize: {
      'title-heading': '2.3rem', //75
      'sub-title-heading': '2.1rem',//55
      'normal-title-heading': '1.9rem',//45
      'small-title-heading': '1.4rem',//30
      'regular-title-heading': '1.1rem',//25
      'tiny-title-heading': '0.9rem',//20
    },
    
    lineHeight: {
      'title-heading-height': '1',  
      
    },
    letterSpacing: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.1em',
    },

    animation: {
      'infinite-scroll': 'infinite-scroll 30s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    } 
  },
  plugins: [],
}
}
