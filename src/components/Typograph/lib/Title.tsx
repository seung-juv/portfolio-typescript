import React from 'react';
import styled from 'styled-components';
import { TitleProps, TypographCustomStyleProps } from '../Typograph';

const Text = styled.span<TypographCustomStyleProps>`
  font-size: ${({ fontSize }) => fontSize ?? '2rem'};
  font-weight: 500;
  color: ${({ theme, color }) => color ?? theme.blackColor};
`;

const Title = ({ children, ...props }: TitleProps): React.ReactElement => (
  <Text {...props}>{children}</Text>
);

export default Title;
