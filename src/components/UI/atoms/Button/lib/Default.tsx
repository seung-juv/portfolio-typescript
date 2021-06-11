import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../Button';

const Container = styled.button`
  padding: 1.2rem 1.8rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.blueColor};
  color: #ffffff;
  font-size: 1.43rem;
  border-radius: 0.4rem;
  ${({ theme }) => theme.transition};
  &:hover {
    background-color: ${({ theme }) => theme.blueHoverColor};
  }
`;

const Default = ({ children, ...props }: ButtonProps): React.ReactElement => {
  return <Container {...props}>{children}</Container>;
};

Default.defaultProps = {
  children: 'button',
  type: 'button',
};

export default Default;
