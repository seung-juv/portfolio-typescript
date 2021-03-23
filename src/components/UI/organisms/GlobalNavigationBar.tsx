import React from 'react';
import styled from 'styled-components';
import Socials from '../molecules/Socials';
import Navigations from '../molecules/Navigations';

interface GlobalNavigationBarProps {
  containerStyle?: React.CSSProperties;
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

const GlobalNavigationBar = ({
  containerStyle,
  isVisible,
}: GlobalNavigationBarProps): React.ReactElement => {
  return (
    <Container style={containerStyle}>
      <Navigations isVisible={isVisible} />
      <Socials />
    </Container>
  );
};

GlobalNavigationBar.defaultProps = {
  containerStyle: {},
};

export default GlobalNavigationBar;
