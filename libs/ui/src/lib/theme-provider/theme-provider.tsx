import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

import useCustomTheme from '../useCustomTheme';

const baseTheme = useCustomTheme();

export const ThemeProvider = ({
  theme = baseTheme,
  children,
}: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
