module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1f1d2a', // Dark Navy Colour
        pink : '#FA8072',
        slightlyDarkPink : '#C8665B',
        lightNavy : '#262835',
        lighterNavy : '#2e303d',
        platinum : '#FFFFFF'
      },  
      borderWidth: {
        '0.5': '0.5px',
      },
      width: {
        '60p': '60%',
        '40p': '40%',
      }    
    },
  },
  plugins: [],
}
