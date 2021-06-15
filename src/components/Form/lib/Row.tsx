import React from 'react';
import styled from 'styled-components';
import { RowProps } from '../Form';
import Input from '#components/Input';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Row = ({ children, label, ...props }: RowProps): React.ReactElement => {
  return (
    <Container {...props}>
      <Input.Label>{label}</Input.Label> {children}
    </Container>
  );
};

export default Row;
