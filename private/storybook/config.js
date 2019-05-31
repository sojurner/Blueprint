import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

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
const req = require.context('../../src/storybook', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
