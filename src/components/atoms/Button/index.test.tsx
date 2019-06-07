import React from 'react';
import { mount } from 'enzyme';
import LystButton from '.';

const wrap = (props = { rootProps: { styles: '' } }) =>
  mount(<LystButton {...props} />);

describe('LystButton', () => {
  let wrapper = wrap();

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when styles are given', () => {
    const rootProps = { styles: 'margin 1rem' };
    wrapper = wrap({ rootProps });
    expect(wrapper.props).toEqual({ rootProps });
    expect(wrapper).toMatchSnapshot();
  });
});
