export interface ILystFormProps {
  inputList: IInputProps[];
  handleChange: Function;
  values: { [key: string]: string };
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
