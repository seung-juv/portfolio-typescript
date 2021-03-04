import React from 'react';
import styled from 'styled-components';
import Navigation, { NavigationProps } from '../atoms/Navigation';

type NavigationItemsType = Array<NavigationProps>;

export interface GlobalNavigationBarProps {
  containerStyle?: React.CSSProperties;
}

const Container = styled.ul``;

const Navigations = (): React.ReactElement => {
  const items: NavigationItemsType = React.useMemo(
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
        (item: NavigationProps): React.ReactElement => (
          <Navigation key={item.label} {...item} />
        )
      )}
    </Container>
  );
};

export default Navigations;
