import React from 'react';
import styled from 'styled-components';
import { CaptionProps, TypographCustomStyleProps } from '../Typograph';

const Text = styled.span<TypographCustomStyleProps>`
  font-size: ${({ fontSize }) => fontSize ?? '1.4rem'};
  font-weight: 300;
  color: ${({ theme, color }) => color ?? theme.darkGreyColor};
`;

const Caption = ({ children, ...props }: CaptionProps): React.ReactElement => (
  <Text {...props}>{children}</Text>
);

export default Caption;
