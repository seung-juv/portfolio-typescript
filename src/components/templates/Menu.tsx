import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import GlobalNavigationBar from '#components/Layout/GlobalNavigationBar';
import useScroll from '#hooks/useScroll';
import Icon from '#components/Icon';

interface MenuProps {
  isVisible: boolean;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  padding: 12.5rem 20rem;
  z-index: 30;
  @media screen and (max-width: 768px) {
    padding: 12.5rem 0;
    align-items: center;
  }
`;

const Shadow = styled.div`
  opacity: 0.05;
  position: absolute;
  bottom: -15%;
  right: -5%;
  @media screen and (max-width: 425px) {
    width: 95vw;
    height: 95vw;
  }
`;

const Menu = ({ isVisible }: MenuProps): React.ReactElement => {
  const [timeline] = React.useState(gsap.timeline({ paused: true }));
  const containerRef = React.useRef(null);
  const { enableScroll, disableScroll } = useScroll();
  React.useEffect(() => {
    timeline.to(containerRef.current, { duration: 0.2, autoAlpha: 0, ease: 'power2' }, 0).reverse();
  }, []);
  React.useEffect(() => {
    timeline.reversed(isVisible);
    if (isVisible) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isVisible, timeline]);
  return (
    <Container ref={containerRef}>
      <GlobalNavigationBar isVisible={isVisible} />
      <Shadow>
        <Icon.Favicon size={100} />
      </Shadow>
    </Container>
  );
};

export default Menu;
