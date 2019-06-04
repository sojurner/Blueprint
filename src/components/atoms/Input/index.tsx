import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IInputProps } from './types';
import applyStyles from '../../../factories/styleFactory';

const LystInput: React.FunctionComponent<IInputProps> = ({ inputProps }) => {
  const [StyledInput, setStyledInput] = React.useState(() => TextField);
  const { styles } = inputProps;
  React.useEffect(() => {
    if (styles) {
      setStyledInput(() => applyStyles(TextField, styles));
    }
  }, []);
  return <StyledInput {...inputProps} />;
};

export default LystInput;
