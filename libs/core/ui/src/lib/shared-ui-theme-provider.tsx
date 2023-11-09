import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
export const SharedUiThemeProvider = ({
  theme,
  children,
}: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
