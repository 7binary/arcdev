import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    arcBlue: string,
    arcOrange: string,
    arcGrey: string,
  }
}

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    tab: BaseCSSProperties;
    fontPacifico: BaseCSSProperties;
    estimate: BaseCSSProperties;
    learnButton: BaseCSSProperties;
  }

  interface TypographyOptions {
    tab: BaseCSSProperties;
    fontPacifico: BaseCSSProperties;
    estimate: BaseCSSProperties;
    learnButton: BaseCSSProperties;
  }
}

const theme = createMuiTheme({
  palette: {
    common: {
      arcBlue,
      arcOrange,
      arcGrey,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '50px',
      height: '45px',
      color: 'white',
      backgroundColor: arcOrange,
    },
    learnButton: {
      borderRadius: 50,
      height: 45,
      width: 145,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 10,
      color: arcBlue,
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    fontPacifico: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.4,
      color: arcBlue,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: 700,
      color: arcBlue,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
      lineHeight: '1.3rem',
      marginBottom: '1rem',
    },
    subtitle2: {
      fontSize: '1.25rem',
      color: 'white',
      fontWeight: 300,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          minHeight: '100vh',
        },
        body: {
          minHeight: '100vh',
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
} as ThemeOptions);

export default theme;
