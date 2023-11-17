import { PropsWithChildren } from 'react';
import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

const sharedTheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#011542',
    },
  },
});

export const CompanyUiThemeProvider = ({ children }: PropsWithChildren) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default CompanyUiThemeProvider;
