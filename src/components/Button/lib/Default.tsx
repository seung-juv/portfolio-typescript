import React from 'react';
import styled from 'styled-components';
import { ButtonProps, LoadingType } from '../Button';

const Container = styled.button<{ loading: LoadingType }>`
  padding: 1.2rem 1.8rem;
  height: 4rem;
  background-color: ${({ theme, loading }) => (loading ? theme.blueHoverColor : theme.blueColor)};
  color: #ffffff;
  font-size: 1.43rem;
  border-radius: 0.4rem;
  cursor: pointer;
  ${({ theme }) => theme.transition};
  &:hover {
    background-color: ${({ theme }) => theme.blueHoverColor};
  }
`;

const Default = ({ children, loading, ...props }: ButtonProps): React.ReactElement => {
  return (
    <Container loading={loading} {...props}>
      {children}
    </Container>
  );
};

Default.defaultProps = {
  children: 'button',
  type: 'button',
};

export default Default;
