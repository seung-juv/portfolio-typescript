import Link from 'next/link';
import styled from 'styled-components';
import { Url } from 'url';

export interface NavigationProps {
  href: string | Url;
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

const Navigation = ({ href, label, containerStyle }: NavigationProps): React.ReactElement => {
  return (
    <Container style={containerStyle}>
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </Container>
  );
};

export default Navigation;
