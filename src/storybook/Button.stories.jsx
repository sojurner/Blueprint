// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
// import HomePage from '@pages/HomePage';
import LystButton from '@atoms/material/Button';

import { StylesProvider } from '@material-ui/styles';
import { text } from '@storybook/addon-knobs/react';

// const colorSelection = {
//   orange: 'orange',
//   blue: 'blue',
//   green: 'green',
//   yellow: 'yellow',
//   pink: 'pink',
//   purple: 'purple',
//   indigo: 'indigo',
//   deepPurple: 'deepPurple',
//   lightBlue: 'lightBlue',
//   cyan: 'cyan',
//   teal: 'teal',
//   lightGreen: 'lightGreen',
//   lime: 'lime',
//   amber: 'amber',
//   deepOrange: 'deepOrange'
// };

storiesOf('Button', module).addWithJSX('Material', () => (
  <StylesProvider injectFirst>
    <LystButton
      styles={`
        background: ${text(
          'background',
          'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
          'color'
        )};
        border-radius: ${text('border-radius', '3px', 'borderRadius')};
        border: 0;
        color: white;
        height: 48px;
        padding: 0 30px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
      `}
    />
  </StylesProvider>
));
