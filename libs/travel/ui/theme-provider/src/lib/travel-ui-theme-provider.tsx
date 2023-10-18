import { SharedUiThemeProvider } from '@ipts/shared-ui-theme-provider';
import { defaultTheme, createTheme } from '@ipts/shared-ui-theme';

const sharedTheme = createTheme(defaultTheme);
export interface TravelUiThemeProviderProps {
  children?: React.ReactNode;
}

export const TravelUiThemeProvider = ({
  children,
}: TravelUiThemeProviderProps) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default TravelUiThemeProvider;
