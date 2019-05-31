import React from 'react';
import LystButton from '@atoms/Button';
import { ThemeProvider } from '@material-ui/styles';
import themeGenerator from '@factories/themeFactory';

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

ThemeWrapper.defaultProps = {
  color: 'orange',
  children: LystButton
};

export default ThemeWrapper;
