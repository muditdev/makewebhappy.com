//  Default theme : dark

// const defaultTheme = {
//   fontFamily: `' GT Walsheim Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
//   colors: {
//     primary: `#A37875`,
//     secondary: '#FFE7D9',
//     text: `#FFFCF6`,
//     cardbg: '#2A2A28',
//     pink: '#FCE5E3',
//     white: '#FFFCF6',
//   },
//   bg: ' #161515',
//   text: ' #fff',
//   textTinted: ' rgba(255, 255, 255, 0.5)',
//   headerBg: ' rgba(22, 21, 21, 0.6)',
//   border: ' rgba(255, 255, 255, 0.08)',
//   borderActive: ' rgba(255, 255, 255, 0.25)',
//   boxBg: ' #1f1e1d',
//   star: ' #fef102',
//   inputBg: ' #292929',
//   likeButton: ' rgba(255, 255, 255, 0.2)',
//   likeButtonHover: ' rgba(255, 255, 255, 0.3)',
//   secondary: ' yellow',
//   transparent: ' rgba(0, 0, 0, 0)',

//   brand: ' #e38356',
//   brandActive: ' #b3613b',
//   brandTinted: ' rgba(227, 131, 86, 0.2)',
//   brandTintedActive: ' rgba(227, 131, 86, 0.33)',

//   siteWidth: ' 83ch',
//   shadow: ' 0 1px 3px rgba(0, 0, 0, 0.1)',
// };

// const lightTheme = {
//   colors: {
//     primary: `red`,
//     text: `#1D1E1C`,
//     cardbg: '#FEF8F3',
//     pink: '#FCE5E3',
//     white: '#FFFCF6',
//   },
//   primary: 'green',
//   bg: ' #fff',
//   text: ' #000',
//   textTinted: ' rgba(0, 0, 0, 0.5)',
//   headerBg: ' rgba(255, 255, 255, 0.6)',
//   border: ' rgba(0, 0, 0, 0.08)',
//   borderActive: ' rgba(0, 0, 0, 0.25)',
//   star: ' #fece02',
//   boxBg: ' #f3f3f3',
//   secondary: ' #caca28',
//   transparent: ' rgb',
//   inputBg: ' white',
//   likeButton: ' rgba(0, 0, 0, 0.05)',
//   likeButtonHover: ' rgba(0, 0, 0, 0.1)',
// };

const common = {
  primaryFont: `'Montserrat', sans-serif`,
  padding: {
    sm: '.5rem',
    md: '1rem',
    lg: '2rem',
  },
  radius: {
    sm: '.35rem',
    md: '.5rem',
    lg: '.75rem',
  },
  fontsize: {
    sm: '.7rem',
    md: '.875rem',
    lg: '1rem',
  },
  buttonHeight: {
    sm: '.65rem',
    md: '.875rem',
    lg: '1.25rem',
  },
};

const dark = {
  ...common,
  colors: {
    bg: '#1C1B22',
    primary: '#FFE7D9',
    secondary: '#474751',
    buttonText: `#A37875`,
    // cardbg: '#FEF8F3',
    // pink: '#FCE5E3',
    // white: '#FFFCF6',
  },
};
const light = {
  ...common,
  colors: {
    bg: '#FFFCF6',
    primary: `#A37875`,
    secondary: '#FFE7D9',
    buttonText: `#FFFCF6`,

    // text: `#1D1E1C`,
    // cardbg: '#FEF8F3',
    // pink: '#FCE5E3',
    // white: '#FFFCF6',
  },
};
export const theme = {
  defaultTheme: light,
  dark,
  light,
};
