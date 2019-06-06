export interface ILystIconProps {
  styles?: string;
  name: string;
  icon: string;
  variant?: IconVariant;
  tooltip: boolean | undefined;
}

export type IconVariant = 'Rounded' | 'Outlined' | 'Sharp' | 'TwoTone' | string;
