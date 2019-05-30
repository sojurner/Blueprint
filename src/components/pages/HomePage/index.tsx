import React from 'react';
import LystButton from '@atoms/material/Button';
import { Colors } from '@blueprintjs/core';

// List of Available Icons
//  '@blueprintjs/icons/src/generated/iconNames.ts'

const btnProps = {
  icon: 'key-enter',
  intent: 'none',
  text: 'Enter',
  alignText: 'center',
  large: true
};

const HomePage = () => {
  const styles = `
    background-color: ${Colors.DARK_GRAY1};
    border: 1px solid red;
    color: white;
    fill: white;
  `;
  return <LystButton css={styles} {...btnProps} />;
};

export default HomePage;
