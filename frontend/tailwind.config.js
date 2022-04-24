const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
        'colors': {
            'cyan': colors.current,
            'teal': colors.teal,
            'space': '#333652',
            'jonquil': '#FAD02C',
            'ivory': '#F7F4FA',
        }
        },
    },
    plugins: [],
}
