module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ourColor: '#1E293B',
        blue: {
          850: '#7dd3fc',
        }
      },
      screens:{
        'other': {'min': '340px', 'max': '1200px'},
      } 
    },
  },
  plugins: [],
}