import { Moon } from '#components/Icons';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

const Container = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 3.4rem;
  background-color: ${({ theme }) => theme.blackColor};
  svg {
    fill: ${({ theme }) => theme.whiteColor};
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
    <Container onClick={toggle}>
      <Moon size={1.8} />
    </Container>
  );
};

export default DarkButton;
