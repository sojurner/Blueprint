export interface IButtonProps {
  rootProps: {
    styles?: string;
    color?: string;
    disableFocusRipple?: boolean;
    fullWidth?: boolean;
    href?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'text' | 'outlined' | 'contained';
  };
}
