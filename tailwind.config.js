/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   purge: ['./public/**/*.html', './src/**/*.{js,jsx}'],
   content: ['./src/**/*.{js,jsx}'],
   theme: {
      extend: {
         fontFamily: {
            rnroll: ['RocknRoll One', 'sans-serif'],
         },
         colors: {
            lpink: '#fde4e4',
            mwhite: '#fcfcfc',
         },
      },
      fontFamily: {
         sans: ['Istok Web', 'sans-serif'],
      },
   },
   plugins: [],
};
