import styled from 'styled-components';
import Socials from '../molecules/Socials';
import Navigations from '../molecules/Navigations';

interface GlobalNavigationBarProps {
  containerStyle?: React.CSSProperties;
}

const Container = styled.nav`
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const GlobalNavigationBar = ({ containerStyle }: GlobalNavigationBarProps): React.ReactElement => {
  return (
    <Container style={containerStyle}>
      <Navigations />
      <Socials />
    </Container>
  );
};

export default GlobalNavigationBar;
