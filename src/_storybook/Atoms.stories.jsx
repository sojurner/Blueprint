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

storiesOf('Atoms', module)
  .addWithJSX('Button', () => (
    <LystButton
      styles={`
        background: ${text(
          'background',
          'linear-gradient(45deg,#83ceff 30%,#00abab 90%);',
          'Styles'
        )};
        border-radius: ${text('border-radius', '3px', 'Styles')};
        border: 0;
        color: ${text('font-color', 'white', 'Styles')};
        height: ${text('height', '48px', 'Styles')};
        padding: ${text('padding', '0 30px', 'Styles')};
        margin: ${text('margin', '1rem', 'Styles')}
        box-shadow: 0 3px 10px 3px  #87ceeba1;
      `}
    />
  ))
  .addWithJSX('Input', () => (
    <LystInput
      inputProps={{
        variant: select('variant', variantSelection, 'outlined', 'Props'),
        label: text('label', 'Placeholder', 'Props'),
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
