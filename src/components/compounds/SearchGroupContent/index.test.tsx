import React from 'react';
import { shallow } from 'enzyme';
import SearchRounded from '@material-ui/icons/SearchRounded';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SearchTwoTone from '@material-ui/icons/SearchTwoTone';

import { ILystSearchGroupContentProps } from './types';

import LystSearchGroupContent from '.';

const defaultProps = {
  rootProps: { styles: '' },
  listProps: {
    list: [SearchRounded, SearchOutlined, SearchTwoTone],
    styles: ''
  },
  formProps: {
    inputList: [
      {
        inputProps: {
          label: 'Search Icons',
          name: 'search',
          styles: 'margin: 1rem',
          variant: 'standard'
        },
        iconDetails: {
          root: 'endAdornment',
          position: 'start',
          iconName: 'Search',
          Icon: SearchRounded
        }
      }
    ],
    onChange: () => {},
    label: 'dddd',
    styles: ''
  }
};

const wrap = (props: ILystSearchGroupContentProps) =>
  shallow(<LystSearchGroupContent {...props} />);

describe('LystSearchGroupContent', () => {
  let wrapper = wrap(defaultProps);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a form and List', () => {
    expect(wrapper.children().length).toEqual(2);
  });
});
