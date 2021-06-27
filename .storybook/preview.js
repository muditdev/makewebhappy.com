import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyles';
import { theme } from '../utils/theme';
const { dark, light } = theme;
const defaultTheme = {
  name: 'LIGHT',
  ...light,
};

const darkTheme = {
  name: 'DARK',
  ...dark,
};

export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes(), ThemeProvider));
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
