import { ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import GlobalStyle from './GlobalStyles';

type themeProps = { children: ReactNode };

function MyThemeProvider({ children }: themeProps) {
  const { theme: currentTheme } = useTheme();
  return (
    <ThemeProvider theme={theme[currentTheme || 'defaultTheme']}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default MyThemeProvider;
