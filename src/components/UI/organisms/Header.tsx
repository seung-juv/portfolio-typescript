import styled from 'styled-components';
import DarkButton from '../atoms/DarkButton';
import Logo from '../atoms/Logo';
import ScrollLine from '../atoms/ScrollLine';

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

const Header = (): React.ReactElement => (
  <Container>
    <Logo />
    <ScrollLine />
    <DarkButton />
  </Container>
);

export default Header;
