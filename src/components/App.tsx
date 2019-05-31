import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { StylesProvider } from '@material-ui/styles';
import HomePage from './pages/HomePage';

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
