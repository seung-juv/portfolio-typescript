import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Moon } from './Icons';

const Container = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 3.4rem;
  background-color: ${({ theme }) => theme.blackColor};
  ${({ theme }) => theme.transition};
  svg {
    fill: ${({ theme }) => theme.whiteColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.blackColor}75;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DarkButton = (): React.ReactElement => {
  const { toggle } = useDarkMode(undefined, {
    storageKey: 'dark-mode',
  });
  return (
    <Container onClick={toggle} aria-hidden='true'>
      <Moon size={1.8} />
    </Container>
  );
};

export default DarkButton;
