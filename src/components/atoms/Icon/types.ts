export interface ILystIconProps {
  styles?: string;
  iconName: string;
  variant?: IconVariant;
  tooltip: boolean | undefined;
}

export type IconVariant = 'Rounded' | 'Outlined' | 'Sharp' | 'TwoTone';
