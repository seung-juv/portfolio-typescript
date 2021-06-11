import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import Icon from '#components/UI/atoms/Icon';

const Container = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 3.4rem;
  cursor: pointer;
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

const Dark = (props: React.HTMLAttributes<HTMLButtonElement>): React.ReactElement => {
  const { toggle } = useDarkMode(undefined, {
    storageKey: 'dark-mode',
  });
  return (
    <Container onClick={toggle} aria-hidden='true' {...props}>
      <Icon.Moon size={1.8} />
    </Container>
  );
};

export default Dark;
