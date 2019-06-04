import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import LystInput from '@atoms/Input';
import LystIcon from '@atoms/Icon';
import { ILystFormProps } from './types';

const LystForm: React.FunctionComponent<ILystFormProps> = ({
  handleChange,
  values,
  inputList
}) => {
  return (
    <FormControl>
      {inputList.map((input, index) => {
        const { iconDetails, inputProps } = input;
        const { name } = inputProps;
        const { root, position, ...iconProps } = iconDetails;
        return (
          <LystInput
            key={`input-key-${index}`}
            inputProps={{
              ...inputProps,
              id: `input-${index}`,
              value: values[name] ? values[name] : '',
              onChange: handleChange(name),
              InputProps: {
                [iconDetails.root]: (
                  <InputAdornment position={position}>
                    <LystIcon {...iconProps} />
                  </InputAdornment>
                )
              }
            }}
          />
        );
      })}
    </FormControl>
  );
};

export default LystForm;
