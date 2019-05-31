import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import themeGenerator from '@factories/themeFactory';
// List of Available Icons
//  '@blueprintjs/icons/src/generated/iconNames.ts'

// const btnProps = {
//   icon: 'key-enter',
//   intent: 'none',
//   text: 'Enter',
//   alignText: 'center',
//   large: true
// };

const ThemeWrapper: React.FunctionComponent<{
  color: string;
  children: React.ReactNode;
}> = ({ color, children }) => {
  const [theme, setTheme] = React.useState<undefined | any>();
  // Rerender on color props change
  React.useEffect(() => {
    themeGenerator(color).then(res => {
      setTheme(res);
    });
  }, [color]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
