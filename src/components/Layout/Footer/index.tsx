import styled from 'styled-components';
import Copyright from '../Copyright';

const Container = styled.footer``;

const Footer = (): React.ReactElement => {
  return (
    <Container>
      <Copyright />
    </Container>
  );
};

export default Footer;
