module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: require('./shared/constants/tailwindColors'),
    fontSize: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem',
      '6xl': '4rem'
    },
    fontFamily: {
      pretendard: 'Pretendard'
    },
    boxShadow: {
      'light-el-1-inset': 'inset 0px 0.5px 4px 0px rgba(96,97,112,0.32)',
      'light-el-0-base': '0px 0px 0px 0px rgba(0,0,0,0)',
      'light-el-1':
        '0px 0.5px 2px 0px rgba(96,97,112,0.16), 0px 0px 1px 0px rgba(40,41,61,0.08)',
      'light-el-2':
        '0px 2px 4px 0px rgba(96,97,112,0.16), 0px 0px 1px 0px rgba(40,41,61,0.04)',
      'light-el-3':
        '0px 4px 8px 0px rgba(96,97,112,0.16), 0px 0px 2px 0px rgba(40,41,61,0.04)',
      'light-el-4':
        '0px 8px 16px 0px rgba(96,97,112,0.16), 0px 2px 4px 0px rgba(40,41,61,0.04)',
      'light-el-5':
        '0px 16px 24px 0px rgba(96,97,112,0.16), 0px 2px 8px 0px rgba(40,41,61,0.04)',
      'light-el-6':
        '0px 20px 32px 0px rgba(96,97,112,0.24), 0px 2px 8px 0px rgba(40,41,61,0.08)',
      'dark-el-1-inset': 'inset 0px 0.5px 4px 0px rgba(0,0,0,0.32)',
      'dark-el-0-base': '0px 0px 0px 0px rgba(0,0,0,0)',
      'dark-el-1':
        '0px 1px 2px 0px rgba(0,0,0,0.32), 0px 0px 1px 0px rgba(40,41,61,0.08)',
      'dark-el-2': '0px 2px 4px 0px rgba(0,0,0,0.32), 0px 0px 1px 0px rgba(0,0,0,0.04)',
      'dark-el-3': '0px 4px 8px 0px rgba(0,0,0,0.32), 0px 0px 2px 0px rgba(0,0,0,0.04)',
      'dark-el-4':
        '0px 8px 16px 0px rgba(0,0,0,0.32), 0px 2px 4px 0px rgba(0,0,0,0.04)',
      'dark-el-5':
        '0px 16px 24px 0px rgba(0,0,0,0.32), 0px 2px 8px 0px rgba(0,0,0,0.04)',
      'dark-el-6':
        '0px 20px 32px 0px rgba(0,0,0,0.32), 0px 2px 8px 0px rgba(0,0,0,0.08)'
    },
    borderRadius: {
      none: '0',
      xs: '0.125rem',
      sm: '0.25rem',
      default: '0.4316771328449249rem',
      lg: '0.5rem',
      xl: '0.625rem',
      '2xl': '1rem',
      '3xl': '1.7267085313796997rem'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
