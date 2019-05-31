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
      variant: select('variant', variantSelection, 'outlined', 'Props'),
      label: text('label', 'Label', 'Props'),
      require: boolean('required', true, 'Props')
    }}
    styles={`
      & label {
        opacity: ${text('Label Opacity', '.5', 'Styles')};
      }
    `}
  />
));
