import { SharedUiThemeProvider } from '@ipts/shared-ui-theme-provider';
import { defaultTheme, createTheme } from '@ipts/shared-ui-theme';

export interface RailUiThemeProviderProps {
  children?: React.ReactNode;
}

const sharedTheme = createTheme(defaultTheme);

export const RailUiThemeProvider = ({ children }: RailUiThemeProviderProps) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default RailUiThemeProvider;
