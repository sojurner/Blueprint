import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IInputProps } from './types';

const LystInput: React.FunctionComponent<IInputProps> = ({ inputProps }) => {
  return <TextField {...inputProps} label="ThemeProvider" variant="outlined" />;
};

export default LystInput;
