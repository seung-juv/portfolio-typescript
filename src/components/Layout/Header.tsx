import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Icon from '#components/Icon';
import ScrollLine from '#components/Layout/ScrollLine';
import Button from '../Button';

const Container = styled.header`
  width: 6rem;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 3rem 0;
  position: fixed;
  top: 0;
  left: 5rem;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    left: 2rem;
  }
  @media screen and (max-width: 768px) {
    left: 1rem;
  }
  > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const ScrollContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Scroll = styled(ScrollLine)`
  flex: 1;
  margin-bottom: 4rem;
`;

const Header = (): React.ReactElement => (
  <Container>
    <Link href='/'>
      <a>
        <Icon.Favicon size={4.8} />
      </a>
    </Link>
    <ScrollContainer>
      <Scroll />
      <Button.Dark />
    </ScrollContainer>
  </Container>
);

export default Header;
