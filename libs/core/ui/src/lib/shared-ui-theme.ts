import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  
  interface TypeBackground {
    default: string;
    paper: string;
    custom: string;
  }
  
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

}

export const defaultTheme: ThemeOptions = {  
  palette: {
    primary: {
      main: '#412859',
    },
    background: {
      custom: '#ab23cd'
    },    
    neutral: {
      main: '#EEEEEE',
      contrastText: '#000',
    },
    secondary: {
      main: '#A65F37',
    },
  },
}
