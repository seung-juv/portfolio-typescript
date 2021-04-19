import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ children, ...props }, ref): React.ReactElement => {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    );
  }
);

export default Label;
