import React from 'react';
import Grid from '@material-ui/core/Grid';
import LystSearchGroupContent from '@compounds/SearchGroupContent';
import LystIconCDN from '@atoms/IconCDN';
import _icons_ from '../../../assets/iconCDN';
import { ILystInputProps } from '@molecules/Form/types';
import iconByCategories from '../../../assets/iconCDN';

// Example Format of inputProps
const inputList: ILystInputProps[] = [
  {
    inputProps: {
      // label shown for input
      label: 'Search Icons',
      // reference to state controlled form
      name: 'search',
      // custom styles applied to input
      styles: 'margin: 1rem',
      // variant
      variant: 'standard'
    },
    iconDetails: {
      root: 'endAdornment',
      position: 'start',
      // iconName must match a value in _icons_
      iconName: 'Search',
      // 1 of 4 different icon variations
      Icon: React.lazy(() => import('@material-ui/icons/SearchRounded'))
    }
  }
];

const SearchIconDemo = (props: any) => {
  const allIcons = Object.keys(iconByCategories);
  return (
    <>
      <Grid style={{ margin: 'auto' }} container spacing={1} direction="row">
        {allIcons.map((category: string) => {
          const list: any = iconByCategories[category].map(
            (icon: string, index: number) => {
              return (
                <LystIconCDN
                  key={`icon-${index}`}
                  variant={props.iconVariant}
                  styles={`
                    margin: 1rem;
                    width: 1.5rem;
                    overflow: hidden;
                  `}
                  name={icon}
                  icon={icon}
                  tooltip={true}
                />
              );
            }
          );
          return (
            <>
              <LystSearchGroupContent
                rootProps={{
                  styles: `
                  border: 1px solid #e6e6ea;
                  width: 20rem;
                  `
                }}
                listProps={{
                  list,
                  styles: `
                    overflow-y: scroll;
                    max-height: 20rem;
                    min-height: 20rem;
                  `
                }}
                formProps={{
                  inputList,
                  onChange: () => {},
                  styles: `
                    border-bottom: 1px solid #e6e6ea;
                    padding: 2rem;
                  `,
                  label: category
                }}
              />
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchIconDemo;
