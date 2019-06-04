import React from 'react';
import { mount } from 'enzyme';
import LystIcon from '.';

const wrap = (
  props = {
    styles: 'margin: 1rem',
    iconName: 'Wifi',
    variant: 'Outlined',
    tooltip: false
  }
) => mount(<LystIcon {...props} />);

describe('LystIcon', () => {
  let wrapper = wrap();

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when tooltip is active', () => {
    const props = {
      styles: 'margin: 1rem',
      iconName: 'Wifi',
      variant: 'Outlined',
      tooltip: true
    };
    wrapper = wrap(props);
    expect(wrapper).toMatchSnapshot();
  });
});
