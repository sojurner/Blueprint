import styled from 'styled-components';

const styledElement = (element: any, styles: string) => {
  return styled(element)`
    ${styles}
  `;
};

export default styledElement;
