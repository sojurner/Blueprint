export interface ILystInputProps {
  inputProps: IInputProps;
}

interface IInputProps {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  defaultValue?: unknown;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  label?: React.ReactNode;
  multiline?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  select?: boolean;
  type?: string;
  value?: unknown;
  styles?: string;
}
