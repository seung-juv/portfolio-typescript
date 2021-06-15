import React from 'react';
import styled from 'styled-components';
import { RowProps } from '../Form';
import Input from '#components/Input';

const Container = styled.div`
  align-items: center;
  > input,
  textarea {
    flex: 1;
    width: 100%;
  }
  @media screen and (min-width: 426px) {
    display: flex;
  }
`;

const Label = styled(Input.Label)`
  display: block;
  @media screen and (min-width: 426px) {
    width: 12rem;
    flex-basis: 12rem;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 1.5rem;
  }
`;

const Row = ({ children, label, ...props }: RowProps): React.ReactElement => {
  return (
    <Container {...props}>
      <Label>{label}</Label>
      {children}
    </Container>
  );
};

export default Row;
