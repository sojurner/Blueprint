import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchIconDemo from '@pages/SearchIconDemo';
import ThemeWrapper from '@templates/ThemeWrapper';
import { select } from '@storybook/addon-knobs/react';

import { StylesProvider } from '@material-ui/styles';

const colorSelection = {
  orange: 'orange',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
  pink: 'pink',
  purple: 'purple',
  indigo: 'indigo',
  deepPurple: 'deepPurple',
  lightBlue: 'lightBlue',
  cyan: 'cyan',
  teal: 'teal',
  lightGreen: 'lightGreen',
  lime: 'lime',
  amber: 'amber',
  deepOrange: 'deepOrange'
};

storiesOf('Icon', module).addWithJSX('Material Icons', () => (
  <ThemeWrapper color={select('Color', colorSelection, 'orange', 'Theme')}>
    <StylesProvider injectFirst>
      <SearchIconDemo />
    </StylesProvider>
  </ThemeWrapper>
));
