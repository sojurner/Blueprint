import React from 'react';
import { mount } from 'enzyme';
import LystIcon from '.';

const wrap = (
  props = {
    styles: 'margin: 1rem',
    iconName: 'Wifi',
    tooltip: false,
    icon: 'wifi'
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
      icon: 'wifi',
      tooltip: true
    };
    wrapper = wrap(props);
    expect(wrapper).toMatchSnapshot();
  });
});
