import React from 'react';
import styled from 'styled-components';
import Navigations from '#components/Layout/Navigations';
import Socials from './Socials';

const Container = styled.nav`
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const GlobalNavigationBar = (): React.ReactElement => {
  return (
    <Container>
      <Navigations />
      <Socials />
    </Container>
  );
};

export default GlobalNavigationBar;
