import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
// import TextField from '@material-ui/core/TextField';
import LystInput from '@atoms/Input';
import LystIcon from '@atoms/IconCDN';
import { ILystFormProps } from './types';
import applyStyles from '@factories/styleFactory';

const LystForm: React.FunctionComponent<ILystFormProps> = ({ formProps }) => {
  const { styles, handleChange, values, inputList, label } = formProps;
  const [StyledFormControl, setForm] = React.useState(() => FormGroup);
  React.useEffect(() => {
    setForm(() => applyStyles(FormGroup, styles));
  }, [styles]);

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
