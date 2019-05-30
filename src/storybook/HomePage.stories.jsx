// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from '@pages/HomePage';
import { StylesProvider } from '@material-ui/styles';

storiesOf('Button', module).add('Material', () => (
  <StylesProvider injectFirst>
    <HomePage />
  </StylesProvider>
));
