import React from 'react';
import { mount } from 'enzyme';
import LystButton from '.';

const wrap = (props = { styles: '' }) => mount(<LystButton {...props} />);

describe('LystButton', () => {
  let wrapper = wrap();

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when styles are given', () => {
    const styles = 'margin 1rem';
    wrapper = wrap({ styles });
    expect(wrapper.props()).toEqual({ styles });
    expect(wrapper).toMatchSnapshot();
  });
});
