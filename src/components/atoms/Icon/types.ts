export interface ILystIconProps {
  styles?: string;
  iconName: string;
  Icon: Function;
  variant?: IconVariant;
  tooltip: boolean | undefined;
}

export type IconVariant = 'Rounded' | 'Outlined' | 'Sharp' | 'TwoTone' | string;
