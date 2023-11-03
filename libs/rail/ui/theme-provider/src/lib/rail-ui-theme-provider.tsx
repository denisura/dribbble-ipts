import { SharedUiThemeProvider } from '@ipts/shared-ui-theme-provider';
import { defaultTheme, createTheme } from '@ipts/shared-ui-theme';

export interface RailUiThemeProviderProps {
  children?: React.ReactNode;
}

const sharedTheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#233A59',
    },
    background: {
      custom: '#233A59',
    },
    neutral: {
      main: '#EEEEEE',
      contrastText: '#000',
    },
    secondary: {
      main: '#41B3BF',
    },
  },
});

export const RailUiThemeProvider = ({ children }: RailUiThemeProviderProps) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default RailUiThemeProvider;
