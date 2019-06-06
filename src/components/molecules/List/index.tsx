import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ILystListProps } from './types';
import applyStyles from '@factories/styleFactory';
const LystList: React.FunctionComponent<ILystListProps> = ({ listProps }) => {
  const ListContainer = applyStyles(Grid, listProps.styles);
  return (
    <ListContainer container direction="row" wrap="wrap">
      {...listProps.list}
    </ListContainer>
  );
};

export default LystList;
