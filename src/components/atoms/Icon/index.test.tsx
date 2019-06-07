import React from 'react';
import LystIcon from '.';
import Search from '@material-ui/icons/Search';
import { mount } from 'enzyme';
import { ILystIconProps } from './types';

const wrap = (props: ILystIconProps) => mount(<LystIcon {...props} />);

describe('Lyst Icon', () => {
  let defaultProps = {
    styles: '',
    name: 'search',
    Icon: Search,
    tooltip: false
  };

  let wrapper = wrap(defaultProps);

  it('should match snap shot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when tooltip is required', () => {});
});
