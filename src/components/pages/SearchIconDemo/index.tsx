import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LystForm from '@molecules/Form';
import LystIcon from '@atoms/Icon';
import _icons_ from '../../../assets/iconList';
import { IInputProps } from '@molecules/Form/types';

// Example Format of inputProps
const inputList: IInputProps[] = [
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
      variant: 'Rounded'
    }
  },
  {
    inputProps: {
      label: 'Demo',
      name: 'password',
      styles: 'margin: 1rem',
      variant: 'outlined'
    },
    iconDetails: {
      root: 'endAdornment',
      position: 'start',
      iconName: 'Lock',
      variant: 'Rounded'
    }
  }
];

const initialIconList = _icons_.filter((_, index) => index < 48);

const SearchIconDemo = (props: any) => {
  // control form for all input elements created
  const [values, setValues] = React.useState<{ [index: string]: string }>({});
  // Icon List
  const [iconList, setIconList] = React.useState(initialIconList);

  // set values of controlled form on CDM
  React.useEffect(() => {
    inputList.forEach(input => {
      const { name } = input.inputProps;
      values[name] = '';
    });
  }, []);

  const handleChange = (name: string) => (event: any) => {
    const { value } = event.target;
    let filteredList;
    // update value in state controlled form
    setValues({ ...values, [name]: value });
    // filter iconList by input
    if (name === 'search' && value) {
      filteredList = _icons_.filter(icon => icon.toLowerCase().includes(value));
    } else {
      filteredList = initialIconList;
    }
    // truncate iconList to 48
    filteredList.length = 48;
    setIconList(filteredList);
  };

  return (
    <>
      <Typography
        style={{
          width: 'max-content',
          textAlign: 'center',
          margin: '2rem auto 4rem auto'
        }}
      >
        {_icons_.length} Total icons
      </Typography>

      <Grid container spacing={10} direction="row">
        <Grid item sm={4}>
          <LystForm
            handleChange={handleChange}
            values={values}
            inputList={inputList}
          />
        </Grid>
        <Grid
          spacing={10}
          item
          sm={6}
          container
          direction={'row'}
          wrap={'wrap'}
          style={{
            marginTop: '2rem',
            padding: '0 40px 40px 40px',
            overflowY: 'scroll',
            height: '20rem'
          }}
        >
          {iconList.map((icon: any, index) => (
            <LystIcon
              key={`icon-${index}`}
              variant={props.iconVariant}
              iconName={icon}
              tooltip={true}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default SearchIconDemo;
