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
  container: {
    md: '83ch',
    lg: '110ch',
  },
};

export const dark = {
  ...common,
  colors: {
    bg_viewport: '#010101',
    bg: '#1A1A1F',
    primary: '#FFE7D9',
    secondary: '#474751',
    buttonText: `#A37875`,
    text: `#FFFCF6`,
    inputBg: 'red',
  },
};
export const light = {
  ...common,
  colors: {
    bg_viewport: '#FAE0DE',
    bg: '#FFFCF6',
    primary: `#A37875`,
    secondary: '#FFE7D9',
    buttonText: `#FFFCF6`,
    text: `#1A1A1F`,
    inputBg: '#F2EFEA',
    postBg: '#FEF8F3',
  },
};
export const theme = {
  system: light,
  dark,
  light,
};

export type ThemeTypes = typeof light;
