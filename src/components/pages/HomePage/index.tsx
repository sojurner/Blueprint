import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import themeGenerator, { createPalette } from '@factories/themeFactory';
// import SearchIconDemo from '@pages/SearchIconDemo';
import LystButton from '@atoms/Button';

import orange from '@material-ui/core/colors/orange';

// const btnProps = {
//   icon: 'key-enter',
//   intent: 'none',
//   text: 'Enter',
//   alignText: 'center',
//   large: true
// };

const ThemeWrapper: React.FunctionComponent<{
  color: string;
  children?: React.ReactNode;
}> = ({ color, children }) => {
  const defaultPalette = { palette: createPalette(orange) };
  const [theme, setTheme] = React.useState<undefined | any>(defaultPalette);
  React.useEffect(() => {
    themeGenerator(color).then(res => {
      setTheme(res);
    });
  }, [color]);

  return (
    <ThemeProvider theme={theme}>
      <LystButton />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
