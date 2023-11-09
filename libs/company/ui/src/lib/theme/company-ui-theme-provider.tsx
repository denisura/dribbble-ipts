import {
  SharedUiThemeProvider,
  defaultTheme,
  createTheme,
} from '@ipts/core/ui';

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
