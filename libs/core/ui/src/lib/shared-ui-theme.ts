import { ThemeOptions } from '@mui/material/styles';
import './fonts.css';

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
  typography: {
    fontFamily: "IBM Plex Mono, sans-serif",
    h1: {
      fontFamily: "IBM Plex Serif, sans-serif",
    },
    h2: {
      fontFamily: "IBM Plex Serif, sans-serif",
    },
    h3: {
      fontFamily: "IBM Plex Serif, sans-serif",
    },
    h4: {
      fontFamily: "IBM Plex Serif, sans-serif",
    },
    h5: {
      fontFamily: "IBM Plex Serif, sans-serif",
    },
    h6: {
      fontFamily: "IBM Plex Serif, sans-serif",
    },
  },
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