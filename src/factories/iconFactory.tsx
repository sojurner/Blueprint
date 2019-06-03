import iconList from '../assets/iconImports';
import { IconVariant } from '@atoms/Icon/types';

const dynamicIconImport = (
  iconName: string,
  variant: IconVariant = 'Rounded'
): any => {
  // matches file name in material icon library
  return iconList[iconName][variant];
};

export default dynamicIconImport;
