import React from 'react';
import styleFactory from '../../../factories/styleFactory';
import iconFactory from '../../../factories/iconFactory';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import { ILystIconProps } from './types';
import Tooltip from '@material-ui/core/Tooltip';

const LystIcon: React.FunctionComponent<ILystIconProps> = ({
  styles,
  iconName,
  variant,
  tooltip
}) => {
  const Icon = iconFactory(iconName, variant);

  const StyledIcon = styleFactory(Icon, styles);

  return (
    <React.Suspense fallback={<CircularProgress />}>
      {tooltip ? (
        <Tooltip title={iconName} placement={'top'}>
          <Grid style={{ margin: '1.5rem' }}>
            <StyledIcon />
          </Grid>
        </Tooltip>
      ) : (
        <StyledIcon />
      )}
    </React.Suspense>
  );
};

export default LystIcon;
