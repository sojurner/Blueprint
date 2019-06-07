import React from 'react';
import Button from '@material-ui/core/Button';
import { IButtonProps } from './types';
import styleFactory from '../../../factories/styleFactory';

const LystButton: React.FunctionComponent<IButtonProps> = ({ rootProps }) => {
  const { styles, ...otherProps } = rootProps;
  const StyledButton = styleFactory(Button, styles);
  return <StyledButton {...otherProps}>Catalyst</StyledButton>;
};

export default LystButton;
