import React from 'react';
import styled from 'styled-components';
import Navigation, { NavigationProps } from './Navigation';

interface ItemsType extends NavigationProps {}

interface GlobalNavigationBarProps {
  items: Array<ItemsType>;
  containerStyle?: React.CSSProperties;
}

const Container = styled.ul`
  position: relative;
  z-index: 10;
`;

const GlobalNavigationBar = ({
  items,
  containerStyle,
}: GlobalNavigationBarProps): React.ReactElement => {
  return (
    <Container style={containerStyle}>
      {items?.map((item, index) => (
        <Navigation key={index} {...item} />
      ))}
    </Container>
  );
};

export default GlobalNavigationBar;
