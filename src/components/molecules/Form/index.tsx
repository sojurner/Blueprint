import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
// import TextField from '@material-ui/core/TextField';
import LystInput from '@atoms/Input';
import LystIcon from '@atoms/Icon';
import { ILystFormProps } from './types';
import applyStyles from '@factories/styleFactory';

const LystForm: React.FunctionComponent<ILystFormProps> = ({ formProps }) => {
  const { styles, inputList, onChange, label } = formProps;
  const [StyledFormControl, setForm] = React.useState(() => FormGroup);
  // control form for all input elements created
  const [values, setValues] = React.useState<{ [index: string]: string }>({});
  // Icon List

  // set values of controlled form on CDM
  React.useEffect(() => {
    inputList.forEach(input => {
      const { name } = input.inputProps;
      values[name] = '';
    });

    setForm(() => applyStyles(FormGroup, styles));
  }, [styles]);

  const handleChange = (name: string) => (event: any) => {
    const { value } = event.target;
    // update value in state controlled form
    setValues({ ...values, [name]: value });
    onChange(value);
  };

  return (
    <FormControl component="fieldset">
      <StyledFormControl>
        {label && <FormLabel component="legend">{label}</FormLabel>}
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
      </StyledFormControl>
    </FormControl>
  );
};

export default LystForm;
