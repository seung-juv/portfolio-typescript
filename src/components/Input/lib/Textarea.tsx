import React from 'react';
import styled from 'styled-components';

const Container = styled.textarea<{ active: boolean }>`
  border-radius: 0.3rem;
  background-color: transparent;
  padding: 0.8rem 1.5rem;
  line-height: 1.8;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ active, theme }) =>
    active ? `${theme.blackColor}75` : `${theme.blackColor}10`};
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

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ value, ...props }, ref): React.ReactElement => {
  const active = !!value && `${value}`.length > 0;
  return <Container ref={ref} value={value ?? ''} active={active} {...props} />;
});

export default Textarea;
