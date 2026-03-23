const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./templates/**/*.twig'],
  theme: {
    fontFamily: {
      primary: ['Open Sans', 'sans-serif'],
      secondary: ['Lobster', 'sans-serif'],
      navigation: ['Open Sans Condensed', 'sans-serif'],
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      'lg-xl': '1150px',
      xl: '1350px',
      // We want the maximum container to stop at 1350px
      // so we set the last breakpoint to the same value
      '2xl': '1350px',
      // The original Tailwind 2xl breakpoint value
      // '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          // put the custom site color here
          'one': '#024F66',
          'two': '#ED6912',
          'gray': '#777777',
        },
        content: {
          'text': '#666666',
          'link': '#4e93d8',
          'h2': '#024F66',
          'h3': '#666666',
          'h4': colors.gray[600],
          'divider': colors.gray[300],
          image: {
            'caption': colors.gray[600],
            'ring': colors.gray[300],
          },
          table: {
            'heading': colors.gray[800],
            'heading-bg': '#4D8394',
            'border': '#4D8394',
            'grid-row': '#4D8394',
            'grid-column': '#4D8394',
            'alt-row-bg': '#E7EFF1',
          },
          doc: {
            'size': colors.gray[700],
            'description': colors.gray[700],
            'card-bg': colors.white,
            'card-ring': colors.gray[300],
          },
        },
        social: {
          facebook: '#3c5a99',
          linkedin: '#0077b5',
          twitter: '#55acee',
          pinterest: '#cb2027',
        },
      },
      backgroundImage: {
        'header': "url('/img/header-bg.png')",
        'page-bg': "url('/img/body-bg.png')",
        'pattern': "url('/img/pattern.png'), linear-gradient(to right, #00425C, #00425C)",
        'page-pattern': "linear-gradient(to right, rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('/img/pattern.png')",
        'images': "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(0,0,0,0)), url('/img/bg-image-r.jpg')",
      },
      boxShadow: {
        'btn' : '0px 0px 3px rgba(0, 0, 0, .5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
