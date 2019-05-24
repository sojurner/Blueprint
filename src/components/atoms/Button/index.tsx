import React from 'react';
// import styled, { css } from 'styled-components';
import { Button } from '@blueprintjs/core';
import { IButtonProps } from '../types';

// const styles = css`
//   width: 10rem;
// `;

const LystButton: React.FunctionComponent<IButtonProps> = (
  props
): React.ReactElement => {
  // const StyledButton = styled(
  //   (props): React.ReactElement => {
  //     return (
  //       <p className="bp3-skeleton" {...props}>
  //         asdfasfasdfds
  //       </p>
  //     );
  //   }
  // )`
  //   ${styles}
  // `;

  return (
    <Button
      className={'bp3-skeleton'}
      icon="user"
      intent="primary"
      text="Reset"
      {...props}
    />
  );
};

export default LystButton;
