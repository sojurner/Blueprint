import React from 'react';
import LystButton from '../../atoms/Button';
import { css } from '@emotion/core';
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
  const styles = css`
    background-color: ${Colors.VERMILION5};
    border: none;
    color: white;
    fill: white;
  `;
  return <LystButton styles={styles} {...btnProps} />;
};

export default HomePage;
