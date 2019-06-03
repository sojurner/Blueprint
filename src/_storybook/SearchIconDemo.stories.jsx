import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchIconDemo from '@pages/SearchIconDemo';
import { select } from '@storybook/addon-knobs/react';

const variantSelection = {
  rounded: 'Rounded',
  twoTone: 'TwoTone',
  sharp: 'Sharp',
  outlined: 'Outlined'
};

storiesOf('Icon List', module).addWithJSX('Material Icons', () => (
  <SearchIconDemo
    iconVariant={select('Icon Variant', variantSelection, 'Outlined', 'Props')}
  />
));
