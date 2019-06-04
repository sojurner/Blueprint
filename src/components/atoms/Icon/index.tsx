import React from 'react';
import styleFactory from '../../../factories/styleFactory';
// import iconFactory from '../../../factories/iconFactory';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import { ILystIconProps } from './types';
import Tooltip from '@material-ui/core/Tooltip';

const LystIcon: React.FunctionComponent<ILystIconProps> = ({
  styles,
  iconName,
  Icon,
  tooltip
}) => {
  // const Icon = iconFactory(iconName, variant);
  const StyledIconContainer = styleFactory(Grid, styles);

  return (
    <React.Suspense fallback={<CircularProgress />}>
      {tooltip ? (
        <Tooltip title={iconName} placement={'top'}>
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
