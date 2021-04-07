import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Navigation, { NavigationProps } from '../atoms/Navigation';

type NavigationItemsType = Array<NavigationProps>;

export interface NavigationsProps {
  containerStyle?: React.CSSProperties;
  isVisible: boolean;
}

const Container = styled.ul``;

const Navigations = ({ isVisible, containerStyle }: NavigationsProps): React.ReactElement => {
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
  const navigationRef = React.useRef(new Array(items.length));

  React.useEffect(() => {
    gsap
      .to(navigationRef.current[0], {
        duration: 0.2,
        autoAlpha: 1,
        ease: 'power2',
      })
      .reverse();
  }, [isVisible]);

  return (
    <Container style={containerStyle}>
      {items?.map(
        (item: NavigationProps, index: number): React.ReactElement => (
          <Navigation
            ref={ref => {
              navigationRef.current[index] = ref;
            }}
            key={item.label}
            {...item}
          />
        )
      )}
    </Container>
  );
};

export default Navigations;
