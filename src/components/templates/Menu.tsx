import React from 'react';
import styled from 'styled-components';
import GlobalNavigationBar from '#components/UI/organisms/GlobalNavigationBar';
import { Favicon } from '#components/UI/atoms/Icons';

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

const Menu = (): React.ReactElement => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  return (
    <Container>
      <GlobalNavigationBar />
      <Shadow>
        <Favicon size={100} />
      </Shadow>
    </Container>
  );
};

export default Menu;
