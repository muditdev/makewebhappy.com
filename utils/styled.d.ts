/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ThemeTypes } from 'utils/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
