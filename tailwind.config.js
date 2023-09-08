/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fond': "url(/img/fond1.jpg)",
        'fond1': "url(/img/fond2.jpg)",
        'fond2': "url(/img/fond3.jpg)",
        'fond3': "url(/img/fond4.jpg)",
        'fond4': "url(/img/fond5.jpg)",
      },
    },
  },
  plugins: [],
}

