module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      courier: ['Courier Prime', 'monospace'],
      style: ['Dancing Script', 'cursive'],
      styled: ['Mr Dafoe', 'cursive'],
    },

    fontSize: {
      sm: '0.8rem',
      md: '1rem',
      lg: '1.2rem',
      lg: '1.5rem',
    },

    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#fff8f2',
        secondary: '#550e27',
        tertiary: '#f9e4d4',
        footerBg: '#1a0700',
        footerBtn: '#d67d3e',
      },
      brightness: {
        50: '50%',
        75: '75%',
        90: '90%',
      },

      // backgroundImage: {
      //   home: 'url("./images/a2.jpeg")',
      //   newsletter: 'url("./images/newsletter.png")',
      // },
      dropShadow: {
        primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
      },
    },
  },
  plugins: [],
};
