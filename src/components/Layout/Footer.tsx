import React from 'react';
import styled from 'styled-components';
import Typograph from '#components/Typograph';
import { useMenu } from '#context/MenuContext';

const Container = styled.footer<{ isVisible: boolean }>`
  transform: rotate(270deg);
  position: fixed;
  display: block;
  top: 25rem;
  right: -6rem;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    right: -9rem;
  }
  @media screen and (max-width: 1024px) {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  }
`;

const Footer = (): React.ReactElement => {
  const [isVisible] = useMenu();

  return (
    <Container isVisible={isVisible}>
      <Typograph.Caption>&copy;2021. Seung Ju PortFolio All rights reserved.</Typograph.Caption>
    </Container>
  );
};

export default Footer;
