import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import ThemeWrapper from '@templates/material/ThemeWrapper';
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

addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline'
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0
        },
        h2: {
          display: 'inline',
          color: '#999'
        }
      },
      infoBody: {
        backgroundColor: 'almound',
        padding: '0px 5px',
        lineHeight: '2'
      }
    },
    inline: false,
    source: false
  })
);
addDecorator(withKnobs);
setAddon(JSXAddon);
const req = require.context('../../src/_storybook', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(file => req(file));
}

addDecorator(story => (
  <ThemeWrapper color={select('Color', colorSelection, 'orange', 'Theme')}>
    <StylesProvider injectFirst>{story()}</StylesProvider>
  </ThemeWrapper>
));

configure(loadStories, module);
