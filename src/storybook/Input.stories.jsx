// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeWrapper from '@templates/material/ThemeWrapper';
import LystInput from '@atoms/material/Input';
import { select } from '@storybook/addon-knobs/react';

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

storiesOf('Input', module).addWithJSX('Material', () => (
  <ThemeWrapper
    color={select('Select A Color', colorSelection, 'orange', 'color')}
  >
    <LystInput />
  </ThemeWrapper>
));
