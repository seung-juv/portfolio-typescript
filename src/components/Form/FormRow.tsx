import React from 'react';
import styled from 'styled-components';

interface FormRowProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 425px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: flex-start;
  }
`;

const FormRow = ({
  children,
  ...props
}: React.HTMLAttributes<FormRowProps>): React.ReactElement => {
  return <Container {...props}>{children}</Container>;
};

export default FormRow;
