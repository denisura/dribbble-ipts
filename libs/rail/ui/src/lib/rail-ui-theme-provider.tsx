import { PropsWithChildren } from 'react';

import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

export const theme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#5C0007',
    },
  },
});

export const RailUiThemeProvider = ({ children }: PropsWithChildren) => (
  <SharedUiThemeProvider theme={theme}>{children}</SharedUiThemeProvider>
);

export default RailUiThemeProvider;
