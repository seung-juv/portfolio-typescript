import { useMemo } from 'react';
import styled from 'styled-components';
import Navigation, { NavigationProps } from './Navigation';

type NavigationItemsType = Array<NavigationProps>;

export interface GlobalNavigationBarProps {
  containerStyle?: React.CSSProperties;
}

const Container = styled.ul``;

const Navigations = (): React.ReactElement => {
  const items: NavigationItemsType = useMemo(
    () => [
      {
        href: '/',
        label: 'Home',
      },
      {
        href: '/works',
        label: 'Works',
      },
      {
        href: '/about',
        label: 'About',
      },
      {
        href: '/contact',
        label: 'Contact',
      },
    ],
    []
  );

  return (
    <Container>
      {items?.map(
        (item: NavigationProps, index: number): React.ReactElement => (
          <Navigation key={index} {...item} />
        )
      )}
    </Container>
  );
};

export default Navigations;
