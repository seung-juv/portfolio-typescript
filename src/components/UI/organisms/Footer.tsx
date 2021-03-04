import React from 'react';
import styled from 'styled-components';
import Copyright from '../atoms/Copyright';

const Container = styled.footer`
  transform: rotate(270deg);
  position: fixed;
  display: block;
  top: 25rem;
  right: -6rem;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    right: -9rem;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Footer = (): React.ReactElement => {
  return (
    <Container>
      <Copyright />
    </Container>
  );
};

export default Footer;
