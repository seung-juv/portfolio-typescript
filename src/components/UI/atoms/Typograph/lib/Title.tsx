import React from 'react';
import styled from 'styled-components';
import { TitleProps, TypographProps } from '../Typograph';

const Text = styled.span<TypographProps>`
  font-size: ${({ fontSize }) => fontSize ?? '2rem'};
  font-weight: 500;
  color: ${({ theme, color }) => color ?? theme.blackColor};
  margin-right: 4rem;
`;

const Title = ({ children, ...props }: TitleProps): React.ReactElement => (
  <Text {...props}>{children}</Text>
);

export default Title;
