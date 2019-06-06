import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchIconDemo from '@pages/SearchIconDemo';
import { select } from '@storybook/addon-knobs/react';

const variantSelection = {
  round: 'round',
  twoTone: 'two-tone',
  sharp: 'sharp',
  outlined: 'outlined'
};

storiesOf('Demos', module).addWithJSX('Search Icon Demo (CDN)', () => (
  <SearchIconDemo
    iconVariant={select('Icon Variant', variantSelection, 'outlined', 'Props')}
  />
));
