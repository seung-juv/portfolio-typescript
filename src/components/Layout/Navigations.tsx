import React from 'react';
import styled from 'styled-components';
import { NavigationProps } from '#components/Button/Button';
import Button from '#components/Button';

type NavigationItemsProps = Array<NavigationProps>;

const Navigation = styled.li`
  display: block;
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

export interface NavigationsProps {
  containerStyle?: React.CSSProperties;
  isVisible: boolean;
}

const Container = styled.ul``;

const Navigations = (): React.ReactElement => {
  const items: NavigationItemsProps = React.useMemo(
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
          <Navigation>
            <Button.Navigation key={index} fontSize='8rem' {...item} />
          </Navigation>
        )
      )}
    </Container>
  );
};

export default Navigations;
