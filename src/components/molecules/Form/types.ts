export interface ILystFormProps {
  formProps: {
    inputList: IInputProps[];
    handleChange: Function;
    values: { [key: string]: string };
    styles?: string;
    label?: string;
  };
}

export interface IInputProps {
  inputProps: {
    label: string;
    styles?: string;
    variant: string;
    onChange?: Function;
    name: string;
  };
  iconDetails?:
    | {
        root: 'startAdornment' | 'endAdornment';
        position: string;
        iconName: string;
        variant: string;
      }
    | any;
}
