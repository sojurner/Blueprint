import React from 'react';
import styleFactory from '../../../factories/styleFactory';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { ILystIconProps } from './types';
import Tooltip from '@material-ui/core/Tooltip';

const LystIcon: React.FunctionComponent<ILystIconProps> = ({
  styles,
  name,
  Icon,
  tooltip
}) => {
  const StyledIconContainer = styleFactory(Grid, styles);
  return (
    <React.Suspense fallback={<CircularProgress />}>
      {tooltip ? (
        <Tooltip title={name} placement={'top'}>
          <StyledIconContainer>
            <Icon />
          </StyledIconContainer>
        </Tooltip>
      ) : (
        <StyledIconContainer>
          <Icon />
        </StyledIconContainer>
      )}
    </React.Suspense>
  );
};

export default LystIcon;
