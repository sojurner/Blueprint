import { createMuiTheme } from '@material-ui/core/styles';

interface Palette {
  primary: PaletteIntention;
  secondary: PaletteIntention;
  error: PaletteIntention;
  [field: string]: any;
}

interface PaletteIntention {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

interface Shades {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
  [shade: string]: string;
}

const shades: Shades = {
  light: 'A100',
  main: 'A200',
  dark: 'A700',
  contrastText: '900'
};

const paletteTemplate: string[] = ['primary', 'secondary', 'error'];
const paletteSubTemplate: string[] = ['light', 'main', 'dark', 'contrastText'];

const dynamicColorImport = async (color: string): Promise<{}> => {
  const module = await import(`@material-ui/core/colors/${color}`);
  return await module.default;
};

const createPalette = (palette: any): Palette => {
  return paletteTemplate.reduce((paletteObj: Palette | any, field) => {
    paletteObj[field] = {};
    paletteSubTemplate.forEach(shade => {
      paletteObj[field][shade] = palette[shades[shade]];
    });

    return paletteObj;
  }, {});
};

const createTheme = async (color: string) => {
  const colors = await dynamicColorImport(color);
  const palette = createPalette(colors);
  const theme = { palette };
  return createMuiTheme(theme);
};

export default createTheme;
