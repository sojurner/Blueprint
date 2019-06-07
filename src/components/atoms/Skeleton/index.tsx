import React from 'react';
import Skeleton from 'react-skeleton-loader';
import applyStyles from '@factories/styleFactory';

const LystSkeleton: React.FunctionComponent<{
  rootProps: {
    count: number;
    width: string;
    height: string;
    widthRandomness?: number;
    heightRandomness?: number;
    borderRadius: string;
    color?: string;
    animated?: boolean;
    styles?: string;
  };
  styles: string;
}> = ({ rootProps, styles }) => {
  const StyledSkeleton = applyStyles(Skeleton, styles);
  return <StyledSkeleton {...rootProps} />;
};

export default LystSkeleton;
