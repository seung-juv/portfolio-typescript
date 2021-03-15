import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Label = ({
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>): React.ReactElement => {
  return <Container {...props}>{children}</Container>;
};

export default Label;
