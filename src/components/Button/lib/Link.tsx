import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { NavigationProps } from '../Button';

const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.blackColor};
  cursor: pointer;
  &:hover::after {
    width: 12rem;
  }
  &::after {
    content: '';
    display: block;
    width: 8rem;
    height: 1px;
    ${({ theme }) => theme.transition};
    background-color: ${({ theme }) => theme.blackColor};
    margin-left: 2rem;
  }
`;

const ButtonLink = ({ children, href, ...props }: NavigationProps): React.ReactElement => {
  return (
    <Link href={href ?? ''}>
      <Anchor {...props}>{children}</Anchor>
    </Link>
  );
};

export default ButtonLink;
