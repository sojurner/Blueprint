import React from 'react';
import Button from '@material-ui/core/Button';
import { IButtonProps } from './types';
import styleFactory from '../../../factories/styleFactory';

const LystButton: React.FunctionComponent<IButtonProps> = ({
  styles,
  ...props
}) => {
  const StyledButton = styleFactory(Button, styles);
  return <StyledButton color={'primary'}>Catalyst</StyledButton>;
};

export default LystButton;
