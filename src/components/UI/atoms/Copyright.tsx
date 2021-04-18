import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  color: ${({ theme }) => theme.lightGreyColor};
  font-size: 1.2rem;
  letter-spacing: 0;
  font-weight: 300;
`;

const Copyright = (props: React.HTMLAttributes<HTMLSpanElement>): React.ReactElement => {
  return <Container {...props}>&copy;2021. Seung Ju PortFolio All rights reserved.</Container>;
};

export default Copyright;
