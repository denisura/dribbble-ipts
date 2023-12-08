import { PropsWithChildren } from 'react';
import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

export const theme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#006130',
    },
  },
});

export const TravelUiThemeProvider = ({ children }: PropsWithChildren) => (
  <SharedUiThemeProvider theme={theme}>{children}</SharedUiThemeProvider>
);

export default TravelUiThemeProvider;
