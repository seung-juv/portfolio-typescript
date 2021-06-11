import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NavigationCustomStyleProps, NavigationProps } from '../Button';

const Anchor = styled.a<NavigationCustomStyleProps>`
  color: ${({ theme, color }) => color ?? theme.blackColor};
  opacity: ${({ opacity }) => opacity ?? 0.5};
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0.6rem;
    top: 1rem;
    bottom: 0;
    left: 0;
    margin: auto 0;
    background-color: ${({ theme }) => theme.blackColor};
  }
  &:hover {
    opacity: 1;
    &::after {
      width: 100%;
      ${({ theme }) => theme.transition};
    }
  }
`;

const Navigation = ({ href, children, ...props }: NavigationProps): React.ReactElement => (
  <Link href={href}>
    <Anchor {...props}>{children}</Anchor>
  </Link>
);

export default Navigation;
