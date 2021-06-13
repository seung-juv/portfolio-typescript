import React from 'react';
import styled from 'styled-components';
import Navigations from '#components/Layout/Navigations';
import Socials from './Socials';

interface GlobalNavigationBarProps {
  isVisible: boolean;
}

const Container = styled.nav`
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const GlobalNavigationBar = ({ isVisible }: GlobalNavigationBarProps): React.ReactElement => {
  return (
    <Container>
      {isVisible && <Navigations />}
      <Socials />
    </Container>
  );
};

export default GlobalNavigationBar;
