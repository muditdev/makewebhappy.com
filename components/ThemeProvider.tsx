import { ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../utils/theme';
import GlobalStyle from './GlobalStyles';

type themeProps = { children: ReactNode };

function MyThemeProvider({ children }: themeProps) {
  const { theme: currentTheme } = useTheme();
  console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default MyThemeProvider;
