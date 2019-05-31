/* eslint-disable indent */
// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-unresolved
import LystButton from '@atoms/material/Button';
import { text } from '@storybook/addon-knobs/react';

storiesOf('Button', module).addWithJSX('Material', () => (
  <LystButton
    styles={`
        background: ${text(
          'background',
          'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
          'Styles'
        )};
        border-radius: ${text('border-radius', '3px', 'Styles')};
        border: 0;
        color: ${text('font-color', 'white', 'Styles')};
        height: ${text('height', '48px', 'Styles')};
        padding: ${text('padding', '0 30px', 'Styles')};
        margin: ${text('margin', '1rem', 'Styles')}
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
      `}
  />
));
