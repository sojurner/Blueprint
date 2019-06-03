// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
import LystInput from '@atoms/Input';

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
      required: boolean('required', true, 'Props'),
      styles: `${text(
        'styles',
        `
          width: 20rem;
          & div:focus {
            & fieldset {
              box-shadow: 2px 2px gray;
            }
          }
        `,
        'styles',
        'Props'
      )}
  
      `
    }}
  />
));
