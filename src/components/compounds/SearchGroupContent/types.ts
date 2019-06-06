import { IFormProps } from '@molecules/Form/types';
import { IListProps } from '@molecules/List/types';

export interface ILystSearchGroupContentProps {
  rootProps: ISearchGroupContentProps;
  listProps: IListProps;
  formProps: IFormProps;
}

export interface ISearchGroupContentProps {
  styles?: string;
}

export interface IAdjustedFormProps extends IFormProps {}

export interface IAdjustedListProps extends IListProps {}
