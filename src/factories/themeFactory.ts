import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const dynamicColorImport = async (color: string) => {
  const module = await import(`@material-ui/core/colors/${color}`);
  return await module.default;
};

export const createPalette = (palette: any): PaletteOptions => {
  return {
    tonalOffset: 0.2,
    background: { paper: '#fff', default: '#fafafa' },
    contrastThreshold: 3,
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A700: '#616161',
      A100: '#d5d5d5',
      A400: '#303030',
      A200: '#aaaaaa'
    },
    text: {
      primary: palette['900'],
      secondary: palette['700'],
      disabled: palette['200'],
      hint: palette['200']
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    secondary: {
      main: palette['500'],
      light: palette['100'],
      dark: palette['A700'],
      contrastText: '#fff'
    },
    common: { black: '#000', white: '#fff' },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    type: 'light',
    action: {
      hoverOpacity: 0.08,
      hover: palette['A100'],
      selected: palette['A200'],
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      active: 'rgba(0, 0, 0, 0.54)'
    },
    primary: {
      main: palette['500'],
      light: palette['100'],
      dark: palette['900'],
      contrastText: '#fff'
    }
  };
};

export const createOverrides = (palette: any) => {
  return {
    MuiSvgIcon: {
      root: {
        fill: palette['900']
      }
    }
  };
};

const createTheme = async (color: string) => {
  const colors = await dynamicColorImport(color);
  const palette = createPalette(colors);
  const overrides = createOverrides(colors);
  const theme = { palette, overrides };
  return createMuiTheme(theme);
};

export default createTheme;
