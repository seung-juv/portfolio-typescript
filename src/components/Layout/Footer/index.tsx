import styled from 'styled-components';
import Copyright from './Copyright';

const Container = styled.footer`
  transform: rotate(270deg);
  position: fixed;
  display: block;
  top: 25rem;
  right: -6.5rem;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    right: -9.5rem;
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
