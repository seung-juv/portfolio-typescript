import React from 'react';
import styled from 'styled-components';
import { Favicon } from '#components/Icons';
import GlobalNavigationBar from './GlobalNavigationBar';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 12.5rem 24rem;
  z-index: 30;
  @media screen and (max-width: 768px) {
    padding: 12.5rem 0;
    align-items: center;
  }
`;

const Shadow = styled.div`
  width: 60rem;
  height: 60rem;
  opacity: 0.05;
  position: absolute;
  bottom: 20%;
  right: 5%;
  @media screen and (max-width: 768px) {
    width: 40rem;
    height: 40rem;
  }
  @media screen and (max-width: 425px) {
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 95vw;
    height: 95vw;
  }
`;

const Menu = (): React.ReactElement => {
  return (
    <Container>
      <GlobalNavigationBar />
      <Shadow>
        <Favicon size={60} />
      </Shadow>
    </Container>
  );
};

export default Menu;
