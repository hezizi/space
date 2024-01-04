/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdxs/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            code: {
              '&::before': {
                content: "'' !important"
              },
              '&::after': {
                content: "'' !important"
              },
              backgroundImage:
                'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
              padding: '3px 6px',
              margin: '0 3px',
              borderRadius: '4px',
              fontWeight: 'normal'
            }
          }
        },
        invert: {
          css: {
            code: {
              backgroundImage:
                'linear-gradient(to right, #243949 0%, #517fa4 100%)'
            }
          }
        },
        custom: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: 400
            },
            blockquote: {
              fontSize: 15,
              fontWeight: 400
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
