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
      custom: '#AEFFF7'
    },    
    neutral: {
      main: '#AEFFF7',
      contrastText: '#000',
    },
    secondary: {
      main: '#8A46AC',
    },
  },
}