import { ThemeType } from '#assets/styles/styled';
import React from 'react';
import styled from 'styled-components';
import { Favicon, Moon } from '../../Icons';

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
`;

const LogoContainer = styled.h1`
  width: 4.8rem;
  height: 4.8rem;
  padding: 1.1rem;
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

const ScrollLineContainer = styled.div<{ theme: ThemeType }>`
  width: 1px;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.blackColor}15;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ScrollLine = styled.span<{ theme: ThemeType }>`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.blackColor};
`;

const DarkButton = styled.button<{ theme: ThemeType }>`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 3.4rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.blackColor};
  svg {
    fill: ${({ theme }) => theme.whiteColor};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = (): React.ReactElement => {
  return (
    <Container>
      <LogoContainer>
        <a href='/'>
          <Favicon />
        </a>
      </LogoContainer>
      <ScrollLineContainer>
        <ScrollLine />
      </ScrollLineContainer>
      <DarkButton>
        <Moon size={1.8} />
      </DarkButton>
    </Container>
  );
};

export default Header;
