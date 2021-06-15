import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NavigationCustomStyleProps, NavigationProps } from '../Button';

const Anchor = styled.a<NavigationCustomStyleProps>`
  font-size: ${({ fontSize }) => fontSize ?? '1.6rem'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 600};
  color: ${({ theme, color }) => color ?? theme.blackColor};
  opacity: ${({ opacity }) => opacity ?? 0.5};
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 10%;
    top: 5%;
    bottom: 0;
    left: 0;
    margin: auto 0;
    background-color: ${({ theme }) => theme.blackColor};
    ${({ theme }) => theme.transition};
  }
  &:hover {
    opacity: 1;
    &::after {
      width: 100%;
    }
  }
`;

const Navigation = ({ href, label, ...props }: NavigationProps): React.ReactElement => (
  <Link href={href ?? ''}>
    <Anchor {...props}>{label}</Anchor>
  </Link>
);

export default Navigation;
