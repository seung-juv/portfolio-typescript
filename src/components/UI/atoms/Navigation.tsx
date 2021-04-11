import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export interface NavigationProps {
  href: string;
  label: string;
  containerStyle?: React.CSSProperties;
}

const Container = styled.li`
  font-size: 8rem;
  font-weight: 600;
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
  a {
    &:not(:hover) {
      opacity: 0.5;
    }
    color: ${({ theme }) => theme.blackColor};
    position: relative;
    &:hover {
      &::after {
        width: 100%;
        ${({ theme }) => theme.transition};
      }
    }
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
  }
`;

const Navigation = React.forwardRef<HTMLLIElement, NavigationProps>(
  ({ href, label, containerStyle }, ref): React.ReactElement => {
    return (
      <Container ref={ref} style={containerStyle}>
        <Link href={href}>
          <a href={href}>{label}</a>
        </Link>
      </Container>
    );
  }
);

export default Navigation;
