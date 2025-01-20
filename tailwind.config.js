/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
    theme: {
        extend: {
            screens: {
                '2xl': '1800px', // Existing 3xl breakpoint
                '3xl': '2560px',

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('tailwindcss-elevation'),
        require('tailwindcss-primeui'),
    ],
}
