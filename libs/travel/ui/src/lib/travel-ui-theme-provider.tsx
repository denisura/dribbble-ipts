import { PropsWithChildren } from 'react';
import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

const sharedTheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#006130',
    },
  },
});

export const TravelUiThemeProvider = ({ children }: PropsWithChildren) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default TravelUiThemeProvider;
