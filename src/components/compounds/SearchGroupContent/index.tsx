import React from 'react';
import LystForm from '@molecules/Form';
import Grid from '@material-ui/core/Grid';
import LystList from '@molecules/List';
import applyStyles from '@factories/styleFactory';
import {
  ILystSearchGroupContentProps,
  IAdjustedFormProps,
  IAdjustedListProps
} from './types';

const SearchGroupContent: React.FunctionComponent<
  ILystSearchGroupContentProps
> = ({ listProps, formProps, rootProps }) => {
  const [adjustedListProps, setListProps] = React.useState<IAdjustedListProps>(
    listProps
  );
  const [adjustedFormProps, setFormProps] = React.useState<IAdjustedFormProps>(
    formProps
  );

  const [
    StyledSearchGroupContent,
    setStyledSearchGroupContent
  ] = React.useState(() => Grid);

  React.useEffect(() => {
    setStyledSearchGroupContent(() => applyStyles(Grid, rootProps.styles));
    adjustedFormProps['onChange'] = onChange;
    setFormProps(adjustedFormProps);
  }, [rootProps.styles]);

  const onChange: Function = (value: string): void => {
    let newListProps = { ...adjustedListProps };
    if (value) {
      const filteredList = listProps.list.filter((item: any) => {
        return item.props.name.includes(value);
      });
      newListProps.list = filteredList;
    } else {
      newListProps.list = listProps.list;
    }
    setListProps(newListProps);
  };

  return (
    <StyledSearchGroupContent>
      <LystForm formProps={adjustedFormProps} />
      <LystList listProps={adjustedListProps} />
    </StyledSearchGroupContent>
  );
};

export default SearchGroupContent;
