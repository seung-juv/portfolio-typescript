import React from 'react';
import styled from 'styled-components';
import { NavigationProps } from '#components/Button/Button';
import Button from '#components/Button';

type NavigationItemsType = Array<NavigationProps>;

export interface NavigationsProps {
  containerStyle?: React.CSSProperties;
  isVisible: boolean;
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
        (item: NavigationProps, index: number): React.ReactElement => (
          <Button.Navigation key={index} {...item} />
        )
      )}
    </Container>
  );
};

export default Navigations;
