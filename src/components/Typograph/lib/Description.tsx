import React from 'react';
import styled from 'styled-components';
import { DescriptionProps, TypographCustomStyleProps } from '../Typograph';

const Text = styled.span<TypographCustomStyleProps>`
  font-size: ${({ fontSize }) => fontSize ?? '1.4rem'};
  line-height: 1.4;
  font-weight: 300;
  color: ${({ theme, color }) => color ?? theme.darkGreyColor};
`;

const Description = ({ children, ...props }: DescriptionProps): React.ReactElement => (
  <Text {...props}>{children}</Text>
);

export default Description;
