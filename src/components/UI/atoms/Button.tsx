import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Container = styled.button`
  padding: 1.2rem 1.8rem;
  background-color: ${({ theme }) => theme.blueColor};
  color: #ffffff;
  font-size: 1.43rem;
  border-radius: 0.4rem;
  ${({ theme }) => theme.transition};
  &:hover {
    background-color: ${({ theme }) => theme.blueHoverColor};
  }
`;

const Button = ({ children, ...props }: ButtonProps): React.ReactElement => {
  return <Container {...props}>{children}</Container>;
};

Button.defaultProps = {
  children: 'button',
};

export default Button;
