import { SharedUiThemeProvider } from '@ipts/shared-ui-theme-provider';
import { defaultTheme, createTheme } from '@ipts/shared-ui-theme';

export interface CompanyUiThemeProviderProps {
  children?: React.ReactNode;
}
const sharedTheme = createTheme(defaultTheme);

export const CompanyUiThemeProvider = ({
  children,
}: CompanyUiThemeProviderProps) => (
  <SharedUiThemeProvider theme={sharedTheme}>{children}</SharedUiThemeProvider>
);

export default CompanyUiThemeProvider;
