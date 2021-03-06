import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IInputProps } from './types';
import applyStyles from '../../../factories/styleFactory';

const LystInput: React.FunctionComponent<IInputProps> = ({ inputProps }) => {
  const [StyledInput, setStyledInput] = React.useState(() => TextField);
  const { styles, ...otherProps } = inputProps;
  React.useEffect(() => {
    setStyledInput(() => applyStyles(TextField, styles));
  }, [styles]);
  return <StyledInput {...otherProps} />;
};

export default LystInput;
