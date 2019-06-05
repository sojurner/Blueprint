export interface ILystIconProps {
  styles?: string;
  iconName: string;
  icon: string;
  variant?: IconVariant;
  tooltip: boolean | undefined;
}

export type IconVariant = 'Rounded' | 'Outlined' | 'Sharp' | 'TwoTone' | string;
