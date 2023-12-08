import { PropsWithChildren } from 'react';
import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

export const theme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#011542',
    },
  },
});

export const CompanyUiThemeProvider = ({ children }: PropsWithChildren) => (
  <SharedUiThemeProvider theme={theme}>{children}</SharedUiThemeProvider>
);

export default CompanyUiThemeProvider;
