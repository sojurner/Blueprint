export interface ILystFormProps {
  formProps: IFormProps;
}

export interface IFormProps {
  inputList: ILystInputProps[];
  onChange: Function;
  styles?: string;
  label?: string;
}

export interface ILystInputProps {
  inputProps: IInputProps;
  iconDetails?:
    | {
        root: 'startAdornment' | 'endAdornment';
        position: string;
        iconName: string;
        variant: string;
      }
    | any;
}

export interface IInputProps {
  label: string;
  styles?: string;
  variant: string;
  onChange?: Function;
  name: string;
}
