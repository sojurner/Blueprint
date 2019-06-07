import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ILystInputProps } from './types';
import applyStyles from '../../../factories/styleFactory';

const LystInput: React.FunctionComponent<ILystInputProps> = ({
  inputProps
}) => {
  const [StyledInput, setStyledInput] = React.useState(() => TextField);
  const { styles, ...otherProps } = inputProps;
  React.useEffect(() => {
    if (styles) {
      setStyledInput(() => applyStyles(TextField, styles));
    }
  }, [styles]);
  return <StyledInput {...otherProps} />;
};

export default LystInput;
