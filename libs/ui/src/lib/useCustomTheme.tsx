import { createTheme, ThemeOptions } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

export const useCustomTheme = (theme?: ThemeOptions) => {
  return theme ? createTheme(defaultTheme, theme) : createTheme(defaultTheme);
};

export default useCustomTheme;
