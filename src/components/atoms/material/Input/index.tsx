import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IInputProps } from './types';
import styleFactory from '@factories/styleFactory';

const LystInput: React.FunctionComponent<IInputProps> = ({
  styles,
  inputProps
}) => {
  const StyledInput = styleFactory(TextField, styles);
  return <StyledInput {...inputProps} />;
};

export default LystInput;
