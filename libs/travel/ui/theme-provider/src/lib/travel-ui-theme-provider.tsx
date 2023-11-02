import { SharedUiThemeProvider } from '@ipts/shared-ui-theme-provider';
import { defaultTheme, createTheme } from '@ipts/shared-ui-theme';

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
export interface TravelUiThemeProviderProps {
  children?: React.ReactNode;
}

export const TravelUiThemeProvider = ({
  children,
}: TravelUiThemeProviderProps) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default TravelUiThemeProvider;
