import React from 'react';
import { mount } from 'enzyme';
import LystInput from '.';

const wrap = (
  props = {
    inputProps: {
      styles: ''
    }
  }
) => mount(<LystInput {...props} />);

describe('LystInput', () => {
  let wrapper = wrap();

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when styles are given', () => {
    const props = {
      inputProps: {
        styles: 'margin 1rem'
      }
    };
    wrapper = wrap(props);
    expect(wrapper).toMatchSnapshot();
  });
});
