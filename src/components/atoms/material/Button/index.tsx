import React from 'react';
import Button from '@material-ui/core/Button';
import { IButtonProps } from './types';
import styleFactory from '@factories/styleFactory';

const MButton: React.FunctionComponent<IButtonProps> = ({ css, ...props }) => {
  const StyledButton = styleFactory(Button, css);
  return <StyledButton {...props}>Catalyst</StyledButton>;
};

export default MButton;
