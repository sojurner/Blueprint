import React from 'react';
import { mount } from 'enzyme';
import LystForm from '.';

const wrap = (
  props = {
    formProps: {
      label: 'Label',
      onChange: jest.fn(),
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
            variant: 'Rounded'
          }
        }
      ]
    }
  }
) => mount(<LystForm {...props} />);

describe('LystForm', () => {
  let wrapper = wrap();
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState');
  // useStateSpy.mockImplementation((init: any) => [init, setState]);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when styles are given', () => {
    console.log(wrapper.first());
  });
});
