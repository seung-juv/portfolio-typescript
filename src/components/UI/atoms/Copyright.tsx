import React from 'react';
import styled from 'styled-components';

export interface CopyrightProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const Container = styled.span`
  color: ${({ theme }) => theme.lightGreyColor};
  font-size: 1.2rem;
  letter-spacing: 0;
  font-weight: 300;
`;

const Copyright = ({ children, ...props }: CopyrightProps): React.ReactElement => {
  return <Container {...props}>{children}</Container>;
};

export default Copyright;
