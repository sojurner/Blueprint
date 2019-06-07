/* eslint-disable indent */
// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-unresolved
import LystButton from '@atoms/Button';
import LystInput from '@atoms/Input';

import { select, boolean, text } from '@storybook/addon-knobs/react';

const variantSelection = {
  outlined: 'outlined',
  filled: 'filled',
  standard: 'standard'
};

const btnVariantSelection = {
  text: 'text',
  outlined: 'outlined',
  contained: 'contained'
};

const buttonSizeSelection = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

storiesOf('Atoms', module)
  .addWithJSX('Button', () => (
    <LystButton
      rootProps={{
        size: select('btn size', buttonSizeSelection, 'large', 'Props'),
        disableFocusRipple: boolean('focus', true, 'Props'),
        fullWidth: boolean('full width', false, 'Props'),
        href: text('href', 'oolala', 'Props'),
        variant: select('variant', btnVariantSelection, 'text', 'Props'),
        styles: `
          background: ${text(
            'background',
            'linear-gradient(45deg,#83ceff 30%,#00abab 90%);',
            'Styles'
          )};
          border-radius: ${text('border-radius', '3px', 'Styles')};
          border: 0;
          color: ${text('font-color', 'white', 'Styles')};
          margin: ${text('margin', '1rem', 'Styles')}
          box-shadow: 0 3px 10px 3px  #87ceeba1;
        `
      }}
    />
  ))
  .addWithJSX('Input', () => (
    <LystInput
      inputProps={{
        variant: select('variant', variantSelection, 'outlined', 'Props'),
        autoComplete: boolean('auto complete', true, 'Props'),
        label: text('label', 'Placeholder', 'Props'),
        disabled: boolean('disabled', false, 'Props'),
        autoFocus: boolean('auto focus', true, 'Props'),
        required: boolean('required', true, 'Props'),
        styles: `${text(
          'styles',
          `
          width: 20rem;
        `,
          'styles',
          'Props'
        )}
  
      `
      }}
    />
  ));
