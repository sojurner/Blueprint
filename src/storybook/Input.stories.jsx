// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
import LystInput from '@atoms/material/Input';

import { select, boolean, text } from '@storybook/addon-knobs/react';

const variantSelection = {
  outlined: 'outlined',
  filled: 'filled',
  standard: 'standard'
};

storiesOf('Input', module).addWithJSX('Material', () => (
  <LystInput
    inputProps={{
      variant: select(
        'Select variant',
        variantSelection,
        'outlined',
        'variant'
      ),
      label: text('Enter Label', 'Label', 'Label'),
      require: boolean('required', true, 'Required')
    }}
    styles={`
      & label {
        opacity: .5;
      }
    `}
  />
));
