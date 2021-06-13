import React from 'react';
import styled from 'styled-components';
import { SubTitleProps, TypographCustomStyleProps } from '../Typograph';

const Text = styled.span<TypographCustomStyleProps>`
  font-size: ${({ fontSize }) => fontSize ?? '1.4rem'};
  font-weight: 400;
  color: ${({ theme, color }) => color ?? theme.blackColor};
`;

const SubTitle = ({ children }: SubTitleProps): React.ReactElement => {
  return <Text>{children}</Text>;
};

export default SubTitle;
