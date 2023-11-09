import { PropsWithChildren } from 'react';
import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

const sharedTheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#364C59',
    },
    background: {
      custom: '#364C59',
    },
    neutral: {
      main: '#EEEEEE',
      contrastText: '#000',
    },
    secondary: {
      main: '#77A612',
    },
  },
});

export const TravelUiThemeProvider = ({ children }: PropsWithChildren) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default TravelUiThemeProvider;
