import React from 'react';
import styled from 'styled-components';

const Container = styled.input`
  border-radius: 0.3rem;
  background-color: transparent;
  padding: 0.8rem 1.5rem;
  line-height: 1.8;
  border: 1px solid ${({ theme }) => theme.blackColor}10;
  ${({ theme }) => theme.transition};
  transition-property: border-color;
  color: inherit;
  font-size: 1.43rem;
  &::placeholder {
    color: ${({ theme }) => theme.lightGreyColor}75;
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.blackColor}75;
  }
`;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>): React.ReactElement => {
  return <Container {...props} />;
};

export default Input;
