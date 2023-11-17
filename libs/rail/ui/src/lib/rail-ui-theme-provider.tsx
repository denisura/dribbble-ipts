import { PropsWithChildren } from 'react';

import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

const sharedTheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#5C0007',
    },
  },
});

export const RailUiThemeProvider = ({ children }: PropsWithChildren) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default RailUiThemeProvider;
