import React from 'react';

import { Button } from '@blueprintjs/core';

const LystButton: React.FunctionComponent<any> = ({
  styles,
  ...props
}): React.ReactElement => {
  return <Button css={styles.styles} {...props} />;
};

LystButton.defaultProps = {
  text: 'Placeholder',
  icon: 'add',
  intent: 'primary',
  styles: ''
};

export default LystButton;
