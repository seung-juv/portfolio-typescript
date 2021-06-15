import React from 'react';
import styled from 'styled-components';
import { NavigationProps } from '#components/Button/Button';
import Button from '#components/Button';
import { useMenu } from '#context/MenuContext';

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
  const [isVisible, setIsVisible] = useMenu();

  const items: NavigationItemsProps = [
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
  ];

  const handleCloseMenu = () => {
    if (isVisible) {
      setIsVisible(false);
    }
  };

  return (
    <Container>
      {items?.map(
        (item: NavigationProps, index: number): React.ReactElement => (
          <Navigation key={index}>
            <Button.Navigation fontSize='8rem' onClick={handleCloseMenu} {...item} />
          </Navigation>
        )
      )}
    </Container>
  );
};

export default Navigations;
